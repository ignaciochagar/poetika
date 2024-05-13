    const express = require('express');
    const app = express();
    const pug = require('pug');
    
    
    app.get('/popup', (req, res) => {
      const popupContent = '<h1>Welcome to the popup!</h1>';
      res.render('popup', { content: popupContent });
    });
    
    app.get('/popup-js', (req, res) => {
      const jsCode = 
        function showModal() {
          const modal = document.getElementById('modal');
          modal.style.display = 'block';
        }
    });
        showModal