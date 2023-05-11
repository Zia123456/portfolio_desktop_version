/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
const projectsInformation = [
  {
    id: 1,
    name: 'Book My Ride',
    description:
      'The Book My Ride application is a car rental service that enables users to sign up and log in to their accounts to rent a vehicle for a designated duration. Users can browse all available cars and view specific details for each vehicle. Additionally, the application lets users access their booking history and view all previous reservations made by them.',
    featuredImage: 'images/book-my-ride-home.PNG',
    featuredImageMobileView: 'images/book-my-ride-home.PNG',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://rentyourcar.onrender.com/',
    sourceLink: 'https://github.com/Zia123456/book-my-ride-front-end.git',
  },
  {
    id: 2,
    name: 'Budget App',
    description:
      'The Leaderboard website showcases scores from various players, which can be submitted by users. The data is securely stored through an external Leaderboard API service. To create this project, I employed JavaScript ES6, HTML5, CSS, and Webpack.',
    featuredImage: 'images/leader.PNG',
    featuredImageMobileView: 'images/leader.PNG',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://lovely-kataifi-859c6f.netlify.app/',
    sourceLink: 'https://github.com/Zia123456/leaderboard.git',
  },
  {
    id: 3,
    name: 'My Movies',
    description:
      'My Movies is a web app, Displays a list of movies and users can check the details of movies by clicking the view details button also users can search for a specific movie by writing the title of a movie in the search box.',
    featuredImage: 'images/my-movies.PNG',
    featuredImageMobileView: 'images/my-movies.PNG',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://magical-cendol-0725d4.netlify.app/',
    sourceLink: 'https://github.com/Zia123456/react-redux-capstone.git',
  },
  {
    id: 4,
    name: 'Space Traveler Hub',
    description:
      'A React-Redux site created for a Microverse Group Project alongside my teammate Microverse student, Vanessa, uses data from the SpaceX API to display lists of rockets and missions and allows a user to book rockets and join missions.',
    featuredImage: 'images/traveler-hub.PNG',
    featuredImageMobileView: 'images/traveler-hub.PNG',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://tiny-dolphin-850110.netlify.app/',
    sourceLink: 'https://github.com/Zia123456/space-travelers.git',
  },
  {
    id: 5,
    name: 'Royal Meal',
    description:
      "The Royal Meals website is a dynamic Single Page Application (SPA) that showcases a variety of delectable foods and enables users to provide their feedback through likes and comments. This engaging webpage was expertly crafted using a powerful blend of HTML, CSS, and Javascript technologies, seamlessly integrated with the Webpack framework. Additionally, I ensured the high quality of the website's functionality through rigorous Unit Testing using Jest, further attesting to its SPA superiority.",
    featuredImage: 'images/Royal.PNG',
    featuredImageMobileView: 'images/Royal.PNG',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink:
      'https://simongideon.github.io/javascript-group-capstone-project/dist/',
    sourceLink: 'https://github.com/Zia123456/capstone-javascript.git',
  },
  {
    id: 6,
    name: 'Global Developers',
    description:
      "Global Developers is a modern and visually appealing online course web app that provides a comprehensive learning experience for aspiring developers. Developed using JavaScript, Webpack, HTML, and CSS, this user-friendly platform offers a range of courses on programming languages and tools, including JavaScript, HTML, and CSS. Each course features interactive exercises, quizzes, and real-world projects that help learners build practical skills. Whether you're a beginner or an experienced developer, Global Developers is the ideal platform to enhance your skills and pursue a career in software development.",
    featuredImage: 'images/g-dev.PNG',
    featuredImageMobileView: 'images/g-dev.PNG',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersionLink: 'https://zia123456.github.io/global_developers/index.html',
    sourceLink: 'https://github.com/Zia123456/global_developers.git',
  },
];
// js for click event to cause popup apears
const clickToPopUp = document.querySelectorAll('.see-project');

clickToPopUp.forEach((seeProject) => {
  seeProject.addEventListener('click', () => {
    const nameAttributeValue = seeProject.getAttribute('name');
    const result = projectsInformation.find(
      (item) => item.id == nameAttributeValue,
    );

    // console.log(result);
    const popupDiv = document.createElement('div');
    popupDiv.className = 'popup-container';
    popupDiv.id = 'popup-container';

    // js to create div for close btn inside popupDiv
    const closeBtnDiv = document.createElement('div');
    closeBtnDiv.className = 'close-btn-box';

    // js to create img tag inside closeBtnDiv
    const imageTag = document.createElement('img');
    imageTag.src = 'images/Icon.png';
    imageTag.alt = 'close button';
    imageTag.className = 'close-btn';
    closeBtnDiv.appendChild(imageTag);
    popupDiv.appendChild(closeBtnDiv);

    // js to create div for img inside popupDiv
    const backgroundImageDiv = document.createElement('div');
    backgroundImageDiv.className = 'background-img-container';

    // js to create img tag for background image
    const backgroundImage = document.createElement('img');
    backgroundImage.src = result.featuredImage; // src comes from projectsInformation object
    backgroundImage.alt = 'background image';
    backgroundImage.className = 'background-img';
    backgroundImageDiv.appendChild(backgroundImage);
    popupDiv.appendChild(backgroundImageDiv);

    // js to create div for mobile view and medium screen for img inside popupDiv
    const backgroundImageDivMobileView = document.createElement('div');
    backgroundImageDivMobileView.className = 'bg-img-container-mobile-view';

    // js to create img tag for mobile view and medium screen sizes
    const backgroundImageMobileView = document.createElement('img');
    backgroundImageMobileView.src = result.featuredImageMobileView; // src comes from projectsInformation object
    backgroundImageMobileView.alt = 'background image';
    backgroundImageMobileView.className = 'background-img-mobile-view';
    popupDiv.appendChild(backgroundImageDivMobileView);

    // js to create div to contain title and See Live and See Source
    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';

    // js to create div for title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title-container';
    const titleText = document.createElement('h2');
    titleText.innerHTML = result.name;
    titleDiv.appendChild(titleText);
    middleContainer.append(titleDiv);

    // js to create a tag for See Live inside middleContainer
    const seeLive = document.createElement('a');
    seeLive.href = result.liveVersionLink; // link comes fromprojectsInformation object
    seeLive.className = 'see-live';

    // js to create button tag for see live inside a tag
    const seeLiveButton = document.createElement('button');
    seeLiveButton.className = 'see-live-button';
    seeLive.appendChild(seeLiveButton);

    // js to create div for see live text and icon inside seeLiveButton
    const seeLiveText = document.createElement('span');
    seeLiveText.className = 'see-live-text';
    seeLiveText.innerHTML = 'See Live';
    seeLiveButton.appendChild(seeLiveText);

    // js to create img tag inside seeLiveButton
    const seeLiveIcon = document.createElement('img');
    seeLiveIcon.src = 'images/Icon - Export.png';
    seeLiveIcon.alt = 'Icon';
    seeLiveIcon.className = 'see-live-icon';
    seeLiveButton.appendChild(seeLiveIcon);

    seeLive.appendChild(seeLiveButton);
    middleContainer.appendChild(seeLive);

    // js to create a tag for See Sources inside middleContainer
    const seeSource = document.createElement('a');
    seeSource.href = result.sourceLink; // link comes from projectsInformation object
    seeSource.className = 'see-source';

    // js to create button tag for see live inside a tag
    const seeSourceButton = document.createElement('button');
    seeSourceButton.className = 'see-source-button';

    // js to create div for see source text and icon inside seeLiveButton
    const seeSourceText = document.createElement('span');
    seeSourceText.className = 'see-source-Text';
    seeSourceText.innerHTML = 'See Source';
    seeSourceButton.appendChild(seeSourceText);

    // js to create img tag inside seeSourceButton
    const seeSourceIcon = document.createElement('img');
    seeSourceIcon.src = 'images/Frame.png';
    seeSourceIcon.alt = 'Icon';
    seeSourceIcon.className = 'see-source-icon';
    seeSourceButton.appendChild(seeSourceIcon);
    seeSource.appendChild(seeSourceButton);
    middleContainer.appendChild(seeSource);

    // js to append middleContainer to popupDiv
    popupDiv.appendChild(middleContainer);

    // js to create ul inside popupDiv
    const technologiesUl = document.createElement('ul');
    technologiesUl.className = 'technologies-container';

    // js to create li tag inside technologiesUl
    const { technologies } = result;
    technologies.forEach((item) => {
      const technology = document.createElement('li');
      technology.className = item;
      technology.innerHTML = item;
      technologiesUl.appendChild(technology);
    });
    // js to append technologiesUl to popupDiv
    popupDiv.appendChild(technologiesUl);

    // js to create div for project description inside popupDiv
    const projectDescription = document.createElement('div');
    projectDescription.className = 'projectDescription';
    projectDescription.innerHTML = result.description;
    popupDiv.appendChild(projectDescription);

    // js to get section with className of my-recent-work-container and append popupDiv to it
    const myRecentWorkContainer = document.querySelector(
      '.my-recent-work-container',
    );
    myRecentWorkContainer.appendChild(popupDiv);

    // js to create clickEvent for close button
    const clickedCloseButton = document.querySelector('.close-btn-box');
    const popupContainer = document.querySelector('.popup-container');

    clickedCloseButton.addEventListener('click', () => {
      popupContainer.classList.add('hide-popup');
      location.reload();
    });

    const actionContainer = document.createElement('div');
    actionContainer.className = 'action-container';
    function myFunction(x) {
      if (x.matches) {
        middleContainer.appendChild(technologiesUl);
        middleContainer.appendChild(projectDescription);
        backgroundImageMobileView.className = 'background-img-mobile-view';
        backgroundImageDivMobileView.appendChild(backgroundImageMobileView);

        // js to create a div container for see live and see source
        actionContainer.appendChild(seeLive);
        actionContainer.appendChild(seeSource);
        middleContainer.appendChild(actionContainer);
      } else {
        popupDiv.appendChild(technologiesUl);
        popupDiv.appendChild(projectDescription);
        middleContainer.appendChild(seeLive);
        middleContainer.appendChild(seeSource);
        backgroundImageMobileView.className = 'background-img-mobile-view-none';
      }
    }

    const x = window.matchMedia('(max-width: 1200px)');
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  });
});

// js to validate form
const form = document.querySelector('form');
const errorMessage = document.createElement('span');
errorMessage.className = 'error-message';
form.appendChild(errorMessage);

// when the user submit the form

form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    errorMessage.innerHTML = '<p>email must be in lowercase</p>';
    event.preventDefault();
  } else {
    errorMessage.innerHTML = '';
  }
});

//  Create input variables
const userName = document.getElementById('fullname');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('textarea-size');

// Object to store user data
const userData = {
  nameInput: userName,
  emailInput: userEmail,
  messageInput: userMessage,
};

// Store data using localStorage
function storeData() {
  userData.nameInput = userName.value;
  userData.emailInput = userEmail.value;
  userData.messageInput = userMessage.value;
  localStorage.setItem('userData', JSON.stringify(userData));
}

// call storeData at every event
userName.addEventListener('keyup', storeData);
userEmail.addEventListener('keyup', storeData);
userMessage.addEventListener('keyup', storeData);

// Check for info in local-storage
const savedUserData = localStorage.getItem('userData');
if (savedUserData !== null) {
  const userData = JSON.parse(savedUserData);
  if (userData.nameInput !== null) {
    document.getElementById('fullname').value = userData.nameInput;
  }
  if (userData.emailInput !== null) {
    document.getElementById('email').value = userData.emailInput;
  }
  if (userData.messageInput !== null) {
    document.querySelector('.req').value = userData.messageInput;
  }
}

// js for typing effect
const primaryText = document.querySelector('.primary-text');
const supportingText = document.querySelector('.supporting-text');
const socialMediaContainer = document.querySelector('.social-media-container');

document.addEventListener('DOMContentLoaded', () => {
  primaryText.classList.add('fade-in'); // Add the fade-in class to trigger the animation
});

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    // Check if user has scrolled to the top
    primaryText.classList.add('fade-in'); // Add the fade-in class to trigger the animation
  } else {
    primaryText.classList.remove('fade-in'); // Remove the class if the user has scrolled away from the top
  }
});

document.addEventListener('DOMContentLoaded', () => {
  supportingText.classList.add('fade-in'); // Add the fade-in class to trigger the animation
  socialMediaContainer.classList.add('fade-in');
});

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    // Check if user has scrolled to the top
    supportingText.classList.add('fade-in'); // Add the fade-in class to trigger the animation
  } else {
    supportingText.classList.remove('fade-in'); // Remove the class if the user has scrolled away from the top
  }
});

const navbar = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});

// side nav bar

const openSideNav = document.querySelector('.humberger-icon-container');
const closeSideNav = document.querySelector('.close-btn-box-side-nav');
const clickedOnPortfolio = document.querySelector('.portfolio-text-side-nav');
const clickedOnAbout = document.querySelector('.about-text-side-nav');
const clickedOnContact = document.querySelector('.contact-side-nav');
const clicked = document.querySelector('.side-nav-container');
const clickedCloseBtn = document.querySelector('.side-nav-container');

function displaySideNav() {
  clicked.classList.add('side-nav-container-clicked');
  clicked.classList.remove('side-nav-container');
}

openSideNav.addEventListener('click', displaySideNav);

function hideSideNav() {
  clickedCloseBtn.classList.remove('side-nav-container-clicked');
  clickedCloseBtn.classList.add('side-nav-container');
  clickedOnPortfolio.classList.remove('side-nav-container-clicked');
  clickedOnAbout.classList.remove('side-nav-container-clicked');
  clickedOnContact.classList.add('side-nav-container-clicked');
}

closeSideNav.addEventListener('click', hideSideNav);
clickedOnPortfolio.addEventListener('click', hideSideNav);
clickedOnAbout.addEventListener('click', hideSideNav);
clickedOnContact.addEventListener('click', hideSideNav);
