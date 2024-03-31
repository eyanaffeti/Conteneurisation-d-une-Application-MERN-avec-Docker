const request = require('supertest');
const app = require('./testapi');


// @route POST messages
// @desc Créer un nouveau message
// @access Public (sans authentification)

describe('POST /msg', () => { // Changement de la route à tester pour correspondre à l'API
  it('devrait renvoyer le message "Message recu avec succès" pour POST', (done) => {
    request(app)
      .post('/msg') // Changement de la route à tester pour correspondre à l'API
      .send({ 
         objet : "Demande d'informations",
         email: "eyanaffeti@email.com",
         message: "Bonjour, j'aimerais obtenir des informations supplémentaires sur vos services."
        }) 
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        if (res.text !== "Message recu avec succès") { // Correction de la vérification du texte de réponse attendue
          return done(new Error('Verifiez vos données '));
        }
        done();
      });
  });
});

