// ===== POP-UP DE CAPTURA =====
document.addEventListener('DOMContentLoaded', function() {
  // Exibe pop-up após 15 segundos
  setTimeout(openPopup, 15000);
  
  // Fecha pop-up
  document.querySelector('.close-popup').addEventListener('click', closePopup);
  
  // Fecha ao clicar fora
  document.getElementById('lead-popup').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
  });
  
  // Inicia contador
  startCountdown();
});

function openPopup() {
  document.getElementById('lead-popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('lead-popup').style.display = 'none';
}

// ===== CONTADOR REGRESSIVO =====
function startCountdown() {
  const countdownElement = document.querySelector('.countdown');
  if (!countdownElement) return;
  
  const endDate = new Date(countdownElement.dataset.date).getTime();
  
  const update = () => {
    const now = new Date().getTime();
    const distance = endDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    if (distance < 0) {
      countdownElement.innerHTML = '🎉 PACOTE LIBERADO!';
    } else {
      document.getElementById('days').textContent = days;
    }
  };
  
  update();
  setInterval(update, 86400000); // Atualiza a cada 24h
}

// ===== ANIMAÇÃO DA BARRA DE URGÊNCIA =====
function animateAlertBar() {
  const alertBar = document.querySelector('.alert-bar');
  if (alertBar) {
    setInterval(() => {
      alertBar.style.opacity = alertBar.style.opacity === '0.9' ? '1' : '0.9';
    }, 2000);
  }
}

animateAlertBar();
