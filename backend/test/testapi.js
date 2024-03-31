const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/msg', (req, res) => {
  const message = req.body.message; 
  if (!message) {
    return res.status(400).send('Le message est requis.'); 
  }
 
  res.send('Message recu avec succès'); 
}); // Ajout de l'accolade de fermeture pour la fonction app.post

module.exports = app;