const bottons = document.querySelectorAll('.button');
const body = document.querySelector('body');

bottons.forEach(function (botton) {
  botton.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor= e.target.id // eta jehetu id k target korechi ar id tao grey tai same value debe
    }
   else if(e.target.id==='white'){
      body.style.backgroundColor= e.target.id // eta jehetu id k target korechi ar id tao grey tai same value debe
    }
  else if(e.target.id==='blue'){
      body.style.backgroundColor= e.target.id // eta jehetu id k target korechi ar id tao grey tai same value debe
    }
    else if (e.target.id==='yellow'){
      body.style.backgroundColor= e.target.id // eta jehetu id k target korechi ar id tao grey tai same value debe
    }

  });
});