document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.rudy');
  
    element.addEventListener('click', () => {
      element.innerHTML = '<img src="image/logo-wcs.png" alt="logo">';
    });
  });




  document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#firstname');
  
    element.addEventListener('click', () => {
      element.textContent = prompt("what yout name ?");
      element.style.color = "white"
    });
  });
  



  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button1');
    const section = document.querySelector('.pink-bg');
    
    button.addEventListener('click', () => {
        section.style.backgroundColor = '#750ff7';
      
    });
  });

  
  
 