const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  document.querySelector('.item.active').classList.remove('active');
  document.querySelector('.dot.active').classList.remove('active');

  if (direction > 0) {
    active = (active + 1) % total;
  } else if (direction < 0) {
    active = (active - 1 + total) % total;
  }

  items[active].classList.add('active');
  dots[active].classList.add('active');
  numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    update(1);
  }, 15000);
}

// Iniciar o timer automático
resetTimer();

// Botões de navegação
prevButton.addEventListener('click', () => {
  update(-1);
  resetTimer();
});

nextButton.addEventListener('click', () => {
  update(1);
  resetTimer();
});

// Clique nos dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');
    active = index;
    items[active].classList.add('active');
    dots[active].classList.add('active');
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
    resetTimer();
  });
});
