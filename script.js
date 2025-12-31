let current = 0;
const pages = document.querySelectorAll('.page');

function openLetter() {
  document.querySelector('.envelope-wrapper').style.display = 'none';
  document.querySelector('.letter').classList.remove('hidden');
  showPage(0);
}

function showPage(i) {
  pages.forEach(p => p.classList.remove('active'));
  pages[i].classList.add('active');
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}
