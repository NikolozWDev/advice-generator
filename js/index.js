document.querySelector('.section-4').addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      document.querySelector('.section-2').textContent = `,,${data.slip.advice}''`;
      document.querySelector('.addnum').textContent = data.slip.id;
    });
});