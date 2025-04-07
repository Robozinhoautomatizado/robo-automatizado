// ===== POP-UP DE CAPTURA =====
document.addEventListener('DOMContentLoaded', function() {
  // Exibe pop-up após 15 segundos
  setTimeout(showPopup, 15000);
  
  // Fecha pop-up ao clicar no X
  document.getElementById('close-popup').addEventListener('click', hidePopup);
  
  // Fecha pop-up ao clicar fora
  document.getElementById('lead-popup').addEventListener('click', function(e) {
    if (e.target === this) hidePopup();
  });
  
  // Inicia contador regressivo
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

function showPopup() {
  document.getElementById('lead-popup').style.display = 'flex';
}

function hidePopup() {
  document.getElementById('lead-popup').style.display = 'none';
}

// ===== CONTADOR REGRESSIVO =====
function updateCountdown() {
  const endDate = new Date('2025-05-01').getTime(); // Altere a data conforme necessário
  const now = new Date().getTime();
  const distance = endDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    if (distance < 0) {
      countdownElement.innerHTML = '🎉 PACOTE LIBERADO!';
    } else {
      countdownElement.innerHTML = `⏳ Lançamento em: <strong>${days} dias</strong>`;
    }
  }
}

// ===== BOTÃO WHATSAPP =====
// (Funcionalidade já inclusa no HTML - este código é opcional para analytics)
document.querySelector('.whatsapp-float').addEventListener('click', function() {
  // Adicione aqui tracking se necessário (ex: Google Analytics)
  console.log('WhatsApp clicado');
});
