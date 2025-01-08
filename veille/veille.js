const veilleButton = document.getElementById('veille-button');
const veilleContent = document.getElementById('veille-content');

veilleButton.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  textarea.rows = 10;
  textarea.cols = 50;
  veilleContent.appendChild(textarea);
  veilleButton.style.display = 'none';
});