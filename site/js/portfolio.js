function changePic() {
    const img = document.querySelector('#avatarPic');
  
    img.addEventListener('click', () => {
      img.src = './image/avatar-bis.png'
    })
  }

  changePic();


  function changingTextAndColor () {
    const name = document.querySelector('#firstname');
    const promptModify = document.querySelector('#modify');
    const bgColor = document.querySelectorAll('.bgName');

    promptModify.addEventListener('click', () => {
        name.style.color = 'white';
        name.innerText = prompt('What is you name ?');
        bgColor.style.backgroundColor = prompt('Wich color do you want ?');        
    })

  }

  changingTextAndColor();

  function popUp() {
    // Logique Serpentard
    document.querySelector('#Serpentard').addEventListener('click', () => {
      gameContext.theme = 'Serpentard'; // Sauvegarde tu thème.
    
      for (const element of document.querySelectorAll('.customizable')) {
        element.classList.add(gameContext.theme); // Application du thème.
      }
      for (const element of document.querySelectorAll('.customizable')) {
        element.classList.remove('Serdaigle', 'Gryffondor', 'Poufsouffle');
      }
    })
}