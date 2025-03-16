// Modal functionality for projects
const viewMoreButtons = document.querySelectorAll('.view-more');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Define project details
const projects = {
  1: {
    title: 'Intelligent Car Brand Classification',
    description: 'Developed a deep learning system capable of recognizing vehicle brands from images with high accuracy using convolutional neural networks and transfer learning techniques.',
    image: 'assets/images/car-classification.jpg'
  },
  2: {
    title: 'Vehicle Resale Value Prediction',
    description: 'Predicted vehicle resale values using machine learning models enhanced by ensemble methods and robust data preprocessing techniques.',
    image: 'assets/images/resale-prediction.jpg'
  },
  3: {
    title: 'Subscription Renewal Prediction',
    description: 'Forecasted subscription renewals with predictive analytics and ML models, enabling proactive customer engagement.',
    image: 'assets/images/subscription-prediction.jpg'
  },
  4: {
    title: 'Sentiment Analysis with NLP',
    description: 'Implemented sentiment analysis on textual data using natural language processing techniques to gauge public opinion.',
    image: 'assets/images/nlp-sentiment.jpg'
  }
};

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    const project = projects[projectId];
    if (project) {
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalImage.src = project.image;
      modal.style.display = 'block';
    }
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
