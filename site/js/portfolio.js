function changePic() {
    const img = document.querySelector('#avatarPic');
  
    img.addEventListener('click', () => {
      img.src = './image/avatar-bis.png'
    })
  }

  changePic();



  changingTextAndColor();

  function changingTextAndColor () {
    const name = document.querySelector('#firstname');
    const promptModify = document.querySelector('#modify');
    const bgNames = document.querySelectorAll('.bgName');
    const bgNamesC = document.querySelectorAll('.bgNameC');

    promptModify.addEventListener('click', () => {
        name.style.color = 'white';
        name.innerText = prompt('What is you name ?');
        const wantedColor = prompt('Wich color do you want ?');
        for (const bgName of bgNames) {
          bgName.style.backgroundColor = wantedColor;
        }
        for (const bgNamesC of bgNameC) {
            bgNameC.style.color = wantedColor;
          }
    })

    

  }

