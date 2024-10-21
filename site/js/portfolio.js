function changePic() {
    const img = document.querySelector('#avatarPic')
  
    img.addEventListener('click', () => {
      img.src = './image/avatar-bis.png'
    })
  }

  changePic();