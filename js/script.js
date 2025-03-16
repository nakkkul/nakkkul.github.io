// Project Modal Functionality
const viewMoreButtons = document.querySelectorAll('.view-more');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Define project details for 6 projects with separate screenshot images
const projects = {
  1: {
    title: 'Intelligent Car Brand Classification',
    description: 'A deep learning system that accurately classifies car brands using convolutional neural networks and transfer learning techniques. The model is deployed to recognize vehicle logos from images in real time.',
    screenshot: 'assets/images/screenshots/car_screenshot.jpg'
  },
  2: {
    title: 'Vehicle Resale Value Prediction',
    description: 'A predictive model using machine learning algorithms to forecast the resale value of vehicles based on historical data and market trends.',
    screenshot: 'assets/images/screenshots/resale_screenshot.png'
  },
  3: {
    title: 'Subscription Renewal Prediction',
    description: 'An ML-based solution that predicts customer subscription renewals, enabling proactive engagement and improved customer retention.',
    screenshot: 'assets/images/screenshots/predict_screenshot.png'
  },
  4: {
    title: 'Sentiment Analysis with NLP',
    description: 'A natural language processing application that analyzes text data to determine sentiment polarity and overall public opinion.',
    screenshot: 'assets/images/screenshots/nlp_screenshot.png'
  },
  5: {
    title: 'HR Analytics Dashboard',
    description: 'A comprehensive dashboard that visualizes HR data and provides actionable insights for optimizing workforce management.',
    screenshot: 'assets/images/screenshots/hr_screenshot.png'
  },
  6: {
    title: 'Ecommerce Analytics',
    description: 'An analytics solution designed to monitor ecommerce performance, providing key insights and visualizations to drive business strategy.',
    screenshot: 'assets/images/screenshots/ecommerce_screenshot.png'
  }
};

// Attach event listeners to all "View More" buttons
viewMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    const projectId = button.getAttribute('data-project');
    const project = projects[projectId];
    if (project) {
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalImage.src = project.screenshot;
      modal.style.display = 'block';
    }
  });
});

// Close modal on clicking close button or outside modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
