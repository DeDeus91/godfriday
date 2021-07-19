import React from 'react'
import ReactDOM from 'react-dom'

const pagina = document.getElementById('form');

pagina.addEventListener('submit', (e) => {
  e.preventDefault();
  let mailPage = document.getElementById('email').value;
  if(mailPage != ""){
      let dtMailPage = mailPage;
      let convertData = JSON.stringify(dtMailPage);
      localStorage.setItem('lead', convertData);
      alert('Email cadastrado para godFriday!'); 
  }else{
      alert('Voce nao digitou um email, tente novamente.');
  }
});