const bannerImg = document.querySelector('#avatar');

bannerImg.addEventListener('click', () => {
    bannerImg.src = "./image/avatar.svg";
  });

  const firstname = document.querySelector('#firstname');
  const modifyButton = document.querySelector('#modify');

  modifyButton.addEventListener('click', () => {
    firstname.innerHTML = "Antonio Delavega";
    firstname.style.color = "white";
  });

  