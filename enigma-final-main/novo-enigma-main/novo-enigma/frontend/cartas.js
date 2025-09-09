// Impede letras e símbolos no campo de código
document.getElementById('codigo').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
});

function desbloquear() {
  const input = document.getElementById('codigo');
  const msg = document.getElementById('mensagem');
  const valor = input.value.trim();

  const mapa = {
    '1847': 'enigma1.html', // Calmaria
    '7408': 'enigma4.html', // Luto
    '3092': 'enigma3.html', // Concentração
    '5261': 'enigma5.html', // Ganância
    '9630': 'enigma2.html'  // Agitação
  };

  if (mapa[valor]) {
    window.location.href = mapa[valor];
  } else {
    msg.textContent = ' Código inválido. Tente novamente.';
    msg.className = 'mensagem bad';
  }
}