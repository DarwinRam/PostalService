function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
  }