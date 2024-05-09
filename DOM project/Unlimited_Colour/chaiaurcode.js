const randomColour = function () {
    const hex = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
      colour += hex[Math.floor(Math.random() * 16)];
    }
    return colour;
  };
  let changer;
  const startover = function () {
    changer = setInterval(changeBg, 2000);
    function changeBg() {
      document.body.style.backgroundColor = randomColour();
    }
  };
  const stopover = function () {
    clearInterval(changer);
    changer=null // just for clean code
  };
  
  document.querySelector('#start').addEventListener('click', startover);
  document.querySelector('#stop').addEventListener('click', stopover);
  