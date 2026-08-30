(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('video').forEach((video) => {
    video.addEventListener('error', () => video.closest('.demo-frame')?.classList.add('media-error'));
  });
})();
