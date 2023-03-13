const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('/Users/rahsrivastava/Documents/Personal/faceid-boilerplate/backend/flokx-2b832-firebase-adminsdk-zlj22-8e4d90aacb.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://flokx-2b832-default-rtdb.firebaseio.com/',
});

const port = process.env.PORT || 8000;

app.post('/api/phone', (req, res) => {
  const phoneNumber = req.body.number;
  console.log(req.body);
  // Send the phone number to Firebase
  fetch('https://flokx-2b832-default-rtdb.firebaseio.com/phoneNumbers.json', {
    method: 'POST',
    body: JSON.stringify({phoneNumber: phoneNumber}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.json({message: 'Phone number stored successfully!'});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({error: 'Failed to store phone number.'});
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
