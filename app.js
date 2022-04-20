const shareBtn = document.querySelector('.share');
const modal = document.querySelector('.modal');
const mobileInfoUser = document.querySelector('.user-info');
const mobilePop = document.querySelector('.modalMobile');
const shareMobile = document.querySelector('.share-mobile');

const popModal = () => {    
    modal.classList.toggle('active');
    mobileInfoUser.classList.toggle('active');
    mobilePop.classList.toggle('active');
}

const popModalMobile = () => {
    mobilePop.classList.toggle('active');
    mobileInfoUser.classList.toggle('active');
}

shareBtn.addEventListener('click' , popModal);
shareMobile.addEventListener('click' , popModalMobile);