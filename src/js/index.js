window.addEventListener("DOMContentLoaded", () => {
  console.log("ready");

  const btn = document.querySelectorAll('.btn')[0];
  const backParagraph = document.querySelector('.back--paragraph');
  const frontTextContainer = document.querySelector('.frontTextContainer');
  const descriptionShow = document.querySelector('.description__show');
  const descriptionHide = document.querySelector('.description__Hide');
  const cardContainer = document.querySelector('.card--Container');

  // background stripes 
  const frontBackgroundStripe1 =  document.querySelectorAll('.frontBackground--stripe')[0];
  const frontBackgroundStripe2 =  document.querySelectorAll('.frontBackground--stripe')[1];
  const frontBackgroundStripe3 =  document.querySelectorAll('.frontBackground--stripe')[2];
  const frontBackgroundStripe4 =  document.querySelectorAll('.frontBackground--stripe')[3];
  const frontBackgroundStripe5 =  document.querySelectorAll('.frontBackground--stripe')[4];
  const frontBackgroundStripe6 =  document.querySelectorAll('.frontBackground--stripe')[5];
  const frontBackgroundStripe7 =  document.querySelectorAll('.frontBackground--stripe')[6];
  const frontBackgroundStripe8 =  document.querySelectorAll('.frontBackground--stripe')[7];
  
  // var box = document.querySelectorAll('.box')[0];
  let isFront = true;
  btn.onclick = function() {
    if (isFront) {
      isFront = false;
      backParagraph.style.display = 'block';
      frontTextContainer.style.display = 'none';
      cardContainer.style.background = '#231E32';
      descriptionShow.style.display = 'none';
      descriptionHide.style.display = 'inline';
      btn.style.transform = 'rotate(0deg) translate(-20%, 25%)';

      frontBackgroundStripe1.style.animation = "verticalWave 2s ease-out normal 1 both ";
      frontBackgroundStripe2.style.animation = "verticalWave 2.4s ease-out normal 1 both";
      frontBackgroundStripe3.style.animation = "verticalWave 2.8s ease-out normal 1 both";
      frontBackgroundStripe4.style.animation = "verticalWave 3.2s ease-out normal 1 both";
      frontBackgroundStripe5.style.animation = "verticalWave 3.6s ease-out normal 1 both";
      frontBackgroundStripe6.style.animation = "verticalWave 4s ease-out normal 1 both";
      frontBackgroundStripe7.style.animation = "verticalWave 4.4s ease-out normal 1 both";
      frontBackgroundStripe8.style.animation = "verticalWave 4.8s ease-out normal 1 both";
    
    }else{
      isFront = true;
      backParagraph.style.display = 'none';
      frontTextContainer.style.display = 'block';
      descriptionShow.style.display = 'inline';
      descriptionHide.style.display = 'none';
      cardContainer.style.background = '#5031AA';
      btn.style.transform = 'rotate(45deg) translate(0%, 35%)';
    }
  }
});
