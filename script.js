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
