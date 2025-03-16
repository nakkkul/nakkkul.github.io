// Project Modals
const modals = document.querySelectorAll('.view-more');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');

modals.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.dataset.project;
        // Add logic to populate modal content based on project
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Keep existing JavaScript code