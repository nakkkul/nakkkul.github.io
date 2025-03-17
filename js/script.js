// Scroll Reveal using IntersectionObserver that re-triggers on every scroll
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => {
  revealObserver.observe(reveal);
});

// Highlight active sidebar button based on section in view
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Project Modal Functionality
const viewMoreButtons = document.querySelectorAll('.view-more');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalBody = document.getElementById('modal-body');

const projects = {
  1: {
    title: 'Intelligent Car Brand Classification',
    description: `<strong><u>Overview</u> :</strong><br><br>AutoBrand Identifier leverages deep learning to predict car brands from user-uploaded images. Built with Flask and deployed on Render, it offers an intuitive interface for accurate brand identification.<br><br>
<strong><u>Features</u> :</strong><br>
• Automated Brand Classification – Instant predictions from uploaded images.<br>
• Deep Learning Model – A CNN trained on a diverse dataset for high accuracy.<br>
• User-Friendly Interface – Simplified image upload and result display.<br>
• Cloud Deployment – Hosted on Render ensuring reliability.<br><br>
<strong><u>Technology Stack</u> :</strong><br>
• Frontend: HTML, CSS<br>
• Backend: Flask (Python)<br>
• Deep Learning: TensorFlow/Keras<br>
• Deployment: Render<br><br>
<strong><u>Performance</u> :</strong><br><br>Achieved 93% validation accuracy.<br><br>
<strong><u>Project Architecture</u> :</strong><br>
• Image Preprocessing – Resizes and normalizes images.<br>
• Model Inference – Processes input via the CNN.<br>
• Web Interface – Displays predictions with confidence scores.<br>
• Deployment – Flask backend on Render.<br><br>
<strong><u>Repository</u> :</strong> <a href="https://github.com/nakkkul/Intelligent-Car-Brand-Classification-System" target="_blank">View on GitHub</a>`,
    screenshot: 'assets/images/screenshots/car.png',
    layout: 'landscape'
  },
  2: {
    title: 'Vehicle Resale Value Prediction',
    description: `<strong><u>Live Link</u> :</strong> <a href="https://vehicle-valuation-model.onrender.com/" target="_blank">Click Here</a><br><br>
<strong><u>Overview</u> :</strong><br><br>This web application predicts the resale value of vehicles based on user inputs. Built with Flask and HTML, it offers an intuitive experience and is deployed on Render.<br><br>
<strong><u>Features</u> :</strong><br>
• Instant Valuation – Get an estimated resale price instantly.<br>
• Optimized Model – High-accuracy machine learning regression.<br>
• User-Friendly Interface – Simple, clean data entry form.<br>
• Cloud Deployment – Hosted on Render for seamless access.<br><br>
<strong><u>Technology Stack</u> :</strong><br>
• Frontend: HTML, CSS<br>
• Backend: Flask (Python)<br>
• Machine Learning: Scikit-learn<br>
• Deployment: Render<br><br>
<strong><u>Performance Metrics</u> :</strong><br><br>MAE: 0.82 | MSE: 3.39 | RMSE: 1.84<br><br>
<strong><u>Project Architecture</u> :</strong><br>
• Data Processing – Preprocesses inputs.<br>
• Model Prediction – Regression model estimates value.<br>
• Web Interface – HTML form for user input.<br>
• Deployment – Flask backend on Render.<br><br>
<strong><u>Repository</u> :</strong> <a href="https://github.com/nakkkul/Resale-Value-Prediction-Web-Application" target="_blank">View on GitHub</a>`,
    screenshot: 'assets/images/screenshots/interface.png',
    layout: 'portrait'
  },
  3: {
    title: 'Subscription Renewal Prediction',
    description: `<strong><u>Live Link</u> :</strong> <a href="https://customer-subscription-prediction-app.onrender.com/" target="_blank">Click Here</a><br><br>
<strong><u>Overview</u> :</strong><br><br>This application uses machine learning to predict customer subscription renewals. Built with Flask and a robust predictive model, it provides real-time insights for targeted marketing and is deployed on Render.<br><br>
<strong><u>Features</u> :</strong><br>
• Instant Predictions – Immediate insights upon entering customer details.<br>
• High-Accuracy Model – Distinguishes potential subscribers effectively.<br>
• Minimalistic Interface – Clean, intuitive design.<br>
• Cloud Deployment – Hosted on Render.<br><br>
<strong><u>Technology Stack</u> :</strong><br>
• Frontend: HTML, CSS<br>
• Backend: Flask (Python)<br>
• Machine Learning: Scikit-learn<br>
• Deployment: Render<br><br>
<strong><u>Performance</u> :</strong><br><br>Test Accuracy: 90.3% | ROC AUC Score: 0.93<br><br>
<strong><u>Project Architecture</u> :</strong><br>
• Data Processing – Preprocesses customer data.<br>
• Model Prediction – Classification model outputs subscription likelihood.<br>
• Web Interface – Simple form for input.<br>
• Deployment – Flask backend on Render.<br><br>
<strong><u>Repository</u> :</strong> <a href="https://github.com/nakkkul/Customer-Subscription-Prediction-App" target="_blank">View on GitHub</a>`,
    screenshot: 'assets/images/screenshots/predictive.png',
    layout: 'portrait'
  },
  4: {
    title: 'Sentiment Analysis with NLP',
    description: `<strong><u>Overview</u> :</strong><br><br>This project analyzes Twitter data to classify sentiment as positive, negative, or neutral using NLP techniques. It employs word embeddings and an LSTM model for effective contextual analysis.<br><br>
<strong><u>Features</u> :</strong><br>
• Real-Time Analysis – Processes tweets in real time.<br>
• Word Embeddings – Uses Word2Vec for improved text representation.<br>
• Deep Learning Classification – Implements an LSTM model.<br>
• User-Friendly Integration – Easily embedded in web applications.<br><br>
<strong><u>Additional Details</u> :</strong><br>
• Model Training – Utilizes a large corpus of labeled tweets.<br>
• Data Preprocessing – Cleans and tokenizes tweet text.<br>
• Deployment – Hosted on Heroku for scalability.<br><br>
<strong><u>Technology Stack</u> :</strong><br>
• Frontend: HTML, CSS<br>
• Backend: Flask (Python)<br>
• Deep Learning: TensorFlow, Keras<br><br>
<strong><u>Repository</u> :</strong> <a href="https://github.com/nakkkul/NLP-TweetSentiment" target="_blank">View on GitHub</a>`,
    screenshot: '', // No screenshot for this project
    layout: 'none'
  },
  5: {
    title: 'HR Analytics',
    description: `<strong><u>Overview</u> :</strong><br><br>A powerful BI tool for HR professionals, this dashboard transforms raw HR data into interactive visualizations. It tracks employee demographics, attrition, performance, and salary distribution to optimize HR strategies.<br><br>
<strong><u>Key Features</u> :</strong><br>
• Workforce Composition – Visualize employee demographics.<br>
• Attrition Analysis – Identify turnover trends.<br>
• Performance Metrics – Monitor productivity.<br>
• Salary Insights – Analyze compensation data.<br>
• HR KPIs – Track key performance indicators.<br><br>
<strong><u>Project Architecture</u> :</strong><br>
• Data Sources – Employee records, attrition data, reviews.<br>
• Visualizations – Bar, line, pie charts, and heatmaps.<br>
• Dashboard – Interactive Power BI report.<br>
• Usage – Optimize HR strategies with actionable insights.<br><br>
<strong><u>Repository</u> :</strong> <a href="https://github.com/nakkkul/Power-Bi-Projects" target="_blank">View on GitHub</a>`,
    screenshot: 'assets/images/screenshots/HR.png',
    layout: 'landscape'
  },
  6: {
    title: 'Ecommerce Analytics Dashboard',
    description: `<strong><u>Overview</u> :</strong><br><br>This dashboard provides a comprehensive BI solution for e-commerce managers. It analyzes sales, customer behavior, and product performance to optimize revenue and operations.<br><br>
<strong><u>Key Features</u> :</strong><br>
• Sales Overview – Track total sales and growth.<br>
• Customer Insights – Segment customers by behavior.<br>
• Product Performance – Identify top-selling products.<br>
• Geographical Analysis – Visualize regional sales.<br>
• Marketing Analysis – Evaluate promotion effectiveness.<br><br>
<strong><u>Project Architecture</u> :</strong><br>
• Data Sources – Transaction data, customer info, product catalog.<br>
• Visualizations – Bar, line, pie charts, and maps.<br>
• Dashboard – Interactive Power BI report.<br>
• Usage – Drive strategic decisions and optimize marketing.<br><br>
<strong><u>Repository</u> :</strong> <a href="https://github.com/nakkkul/Power-Bi-Projects" target="_blank">View on GitHub</a>`,
    screenshot: 'assets/images/screenshots/Ecommerce.png',
    layout: 'landscape'
  }
};

// Disable background scroll when modal is open
function disableScroll() {
  document.body.style.overflow = 'hidden';
}
function enableScroll() {
  document.body.style.overflow = '';
}

// Attach event listeners to all "View More" buttons
viewMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    const projectId = button.getAttribute('data-project');
    const project = projects[projectId];
    if (project) {
      modalTitle.innerText = project.title;
      modalDescription.innerHTML = project.description;
      modalImage.src = project.screenshot;
      
      // Reset classes before applying new layout
      modalBody.classList.remove('landscape', 'portrait', 'none');
      
      // Apply layout adjustments based on project.layout
      if (project.layout === 'landscape') {
        modalBody.classList.add('landscape');
        modalImage.style.display = "block";
      } else if (project.layout === 'portrait') {
        modalBody.classList.add('portrait');
        modalImage.style.display = "block";
      } else {
        modalBody.classList.add('none');
        modalImage.style.display = "none";
      }
      
      modal.style.display = 'block';
      disableScroll();
    }
  });
});

// Close modal on clicking close button or outside modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  enableScroll();
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    enableScroll();
  }
});
