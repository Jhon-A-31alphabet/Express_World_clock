

function change_background() {
    const body = document.body;
    const h1 = document.h1;
    const current_background = window.getComputedStyle(body).backgroundColor;
  
    if (current_background === 'rgb(255, 255, 255)' || current_background === 'white') {
      body.style.backgroundColor = 'black';
    
    } else {
      body.style.backgroundColor = 'white';
    }
}