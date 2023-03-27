const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 500)
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = '90px';

    mario.style.animation = 'none';
    mario.style.bottom = '80px';
    
    mario.src = './imagens/game-over.png';
    mario.style.width = '60%';
    mario.style.marginTop = '100%';
    mario.style.marginLeft = '20%';

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
