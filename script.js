// JavaScript untuk efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Smooth scroll untuk semua link yang memiliki href dimulai dengan #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah perilaku default link

    // Ambil target elemen yang dituju
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll ke elemen target dengan efek smooth
      targetElement.scrollIntoView({
        behavior: 'smooth', // Efek scroll halus
        block: 'start'      // Posisi elemen target di bagian atas layar
      });
    }
  });
});