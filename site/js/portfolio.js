const bannerImg = document.querySelector('#avatar');

bannerImg.addEventListener('click', () => {
    bannerImg.src = "./image/avatar.svg";
  });

  const firstname = document.querySelector('#firstname');
  const modifyButton = document.querySelector('#modify');
  const descriptionBG = document.querySelector('.pink-bg');
  
  modifyButton.addEventListener('click', () => {
    let userName = prompt("Enter your name");
    firstname.innerHTML = userName;
    firstname.style.color = "white";
    let changeBG = prompt("Enter a color");
    descriptionBG.style.backgroundColor = changeBG;
  });

