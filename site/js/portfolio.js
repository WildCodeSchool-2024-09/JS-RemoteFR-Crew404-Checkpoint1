const bannerImg = document.querySelector('#avatar');

bannerImg.addEventListener('click', () => {
    bannerImg.src = "./image/avatar.svg";
  });

  const firstname = document.querySelector('#firstname');
  const modifyButton = document.querySelector('#modify');
  const sectionColor = document.querySelectorAll('.pink-bg');
  const textColor = document.querySelectorAll('.pink-text');

  modifyButton.addEventListener('click', () => {
    const userName = prompt("Enter your name");
    firstname.innerHTML = userName;
    firstname.style.color = "white";
    const changeColor = prompt("Enter a color");
    for (let element of sectionColor) {
        element.style.backgroundColor = changeColor;
      }

    for (let element of textColor) {
        element.style.color = changeColor;
      }
  });

