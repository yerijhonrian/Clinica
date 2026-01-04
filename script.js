const openForm = document.getElementById('openForm');
    const modal = document.getElementById('modalForm');
    const closeForm = document.getElementById('closeForm');

    openForm.addEventListener('click', () => {
        modal.classList.add('active');
    });

    closeForm.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));

const btnTopo = document.getElementById("btn-topo");

if (btnTopo) {
  window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY;
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollAtual > alturaTotal * 0.5) {
      btnTopo.classList.add("show");
    } else {
      btnTopo.classList.remove("show");
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}