const projectsInformation = [
  {
    id: 1,
    name: "Multi-Post Stories Gain+Glory - 1",
    description:
      "Hello World Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Snapshoot Portfolio.png",
    featuredImageMobileView: "images/Snapshoot Portfolio mobile.png",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveVersionLink: "#liveversionlink-1",
    sourceLink: "#sourcelink-1",
  },
  {
    id: 2,
    name: "Multi-Post Stories Gain+Glory - 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Snapshoot Portfolio.png",
    featuredImageMobileView: "images/Snapshoot Portfolio mobile.png",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveVersionLink: "#liveversionlink-2",
    sourceLink: "#sourcelink-2",
  },
  {
    id: 3,
    name: "Multi-Post Stories Gain+Glory - 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Snapshoot Portfolio.png",
    featuredImageMobileView: "images/Snapshoot Portfolio mobile.png",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveVersionLink: "#liveversionlink-3",
    sourceLink: "#sourcelink-3",
  },
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory - 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Snapshoot Portfolio.png",
    featuredImageMobileView: "images/Snapshoot Portfolio mobile.png",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveVersionLink: "#liveversionlink-4",
    sourceLink: "#sourcelink-4",
  },
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory - 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Snapshoot Portfolio.png",
    featuredImageMobileView: "images/Snapshoot Portfolio mobile.png",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveVersionLink: "#liveversionlink-5",
    sourceLink: "#sourcelink-5",
  },
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory - 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Snapshoot Portfolio.png",
    featuredImageMobileView: "images/Snapshoot Portfolio mobile.png",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveVersionLink: "#liveversionlink-6",
    sourceLink: "#sourcelink-6",
  },
];
//js for click event to cause popup apears
const clickToPopUp = document.querySelectorAll(".see-project");

clickToPopUp.forEach((seeProject) => {
  seeProject.addEventListener("click", function displayPopup() {
    let nameAttributeValue = seeProject.getAttribute("name");
    let result = projectsInformation.find(
      (item) => item.id == nameAttributeValue
    );

    // console.log(result.name);
    const popupDiv = document.createElement("div");
    popupDiv.className = "popup-container";
    popupDiv.id = "popup-container";

    // js to create div for close btn inside popupDiv
    let closeBtnDiv = document.createElement("div");
    closeBtnDiv.className = "close-btn-box";

    // js to create img tag inside closeBtnDiv
    let imageTag = document.createElement("img");
    imageTag.src = "images/Icon.png";
    imageTag.alt = "close button";
    imageTag.className = "close-btn";
    closeBtnDiv.appendChild(imageTag);
    popupDiv.appendChild(closeBtnDiv);

    // js to create div for img inside popupDiv
    let backgroundImageDiv = document.createElement("div");
    backgroundImageDiv.className = "background-img-container";

    // js to create img tag for background image
    let backgroundImage = document.createElement("img");
    backgroundImage.src = result.featuredImage; // src comes from projectsInformation object
    backgroundImage.alt = "background image";
    backgroundImage.className = "background-img";
    backgroundImageDiv.appendChild(backgroundImage);
    popupDiv.appendChild(backgroundImageDiv);

    // js to create div for mobile view and medium screen for img inside popupDiv
    let backgroundImageDivMobileView = document.createElement("div");
    backgroundImageDivMobileView.className =
      "background-img-container-mobile-view";

    // js to create img tag for mobile view and medium screen sizes
    let backgroundImageMobileView = document.createElement("img");
    backgroundImageMobileView.src = result.featuredImageMobileView; // src comes from projectsInformation object
    backgroundImageMobileView.alt = "background image";
    backgroundImageMobileView.className = "background-img-mobile-view";
    popupDiv.appendChild(backgroundImageDivMobileView);

    // js to create div to contain title and See Live and See Source
    let middleContainer = document.createElement("div");
    middleContainer.className = "middle-container";

    // js to create div for title
    let titleDiv = document.createElement("div");
    titleDiv.className = "title-container";
    let titleText = document.createElement("h2");
    titleText.innerHTML = result.name;
    titleDiv.appendChild(titleText);
    middleContainer.append(titleDiv);

    // js to create a tag for See Live inside middleContainer
    let seeLive = document.createElement("a");
    seeLive.href = result.liveVersionLink; // link comes fromprojectsInformation object
    seeLive.className = "see-live";

    // js to create button tag for see live inside a tag
    let seeLiveButton = document.createElement("button");
    seeLiveButton.className = "see-live-button";
    seeLive.appendChild(seeLiveButton);

    // js to create div for see live text and icon inside seeLiveButton
    let seeLiveText = document.createElement("span");
    seeLiveText.className = "see-live-text";
    seeLiveText.innerHTML = "See Live";
    seeLiveButton.appendChild(seeLiveText);

    // js to create img tag inside seeLiveButton
    let seeLiveIcon = document.createElement("img");
    seeLiveIcon.src = "images/Icon - Export.png";
    seeLiveIcon.alt = "Icon";
    seeLiveIcon.className = "see-live-icon";
    seeLiveButton.appendChild(seeLiveIcon);

    seeLive.appendChild(seeLiveButton);
    middleContainer.appendChild(seeLive);

    // js to create a tag for See Sources inside middleContainer
    let seeSource = document.createElement("a");
    seeSource.href = result.sourceLink; // link comes from projectsInformation object
    seeSource.className = "see-source";

    // js to create button tag for see live inside a tag
    let seeSourceButton = document.createElement("button");
    seeSourceButton.className = "see-source-button";

    // js to create div for see source text and icon inside seeLiveButton
    let seeSourceText = document.createElement("span");
    seeSourceText.className = "see-source-Text";
    seeSourceText.innerHTML = "See Source";
    seeSourceButton.appendChild(seeSourceText);

    // js to create img tag inside seeSourceButton
    let seeSourceIcon = document.createElement("img");
    seeSourceIcon.src = "images/Frame.png";
    seeSourceIcon.alt = "Icon";
    seeSourceIcon.className = "see-source-icon";
    seeSourceButton.appendChild(seeSourceIcon);
    seeSource.appendChild(seeSourceButton);
    middleContainer.appendChild(seeSource);

    // js to append middleContainer to popupDiv
    popupDiv.appendChild(middleContainer);

    // js to create ul inside popupDiv
    let technologiesUl = document.createElement("ul");
    technologiesUl.className = "technologies-container";

    // js to create li tag inside technologiesUl
    let technologies = result.technologies;
    technologies.forEach((item) => {
      let technology = document.createElement("li");
      technology.className = item;
      technology.innerHTML = item;
      technologiesUl.appendChild(technology);
    });
    // js to append technologiesUl to popupDiv
    popupDiv.appendChild(technologiesUl);

    // js to create div for project description inside popupDiv
    let projectDescription = document.createElement("div");
    projectDescription.className = "projectDescription";
    projectDescription.innerHTML = result.description;
    popupDiv.appendChild(projectDescription);

    // js to get section with className of my-recent-work-container and append popupDiv to it
    const myRecentWorkContainer = document.querySelector(
      ".my-recent-work-container"
    );
    myRecentWorkContainer.appendChild(popupDiv);

    // js to create clickEvent for close button
    const clickedCloseButton = document.querySelector(".close-btn-box");
    const popupContainer = document.querySelector(".popup-container");

    clickedCloseButton.addEventListener("click", function hidePopup() {
      popupContainer.classList.add("hide-popup");
      location.reload();
    });

    let actionContainer = document.createElement("div");
    actionContainer.className = "action-container";
    function myFunction(x) {
      if (x.matches) {
        middleContainer.appendChild(technologiesUl);
        middleContainer.appendChild(projectDescription);
        backgroundImageMobileView.className = "background-img-mobile-view";
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
        backgroundImageMobileView.className = "background-img-mobile-view-none";
      }
    }

    var x = window.matchMedia("(max-width: 1200px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  });
});

// js to validate form
const form = document.querySelector("form");
const errorMessage = document.createElement("span");
errorMessage.className = "error-message";
form.appendChild(errorMessage);

// when the user submit the form

form.addEventListener("submit", (event) => {
  const email = document.getElementById("email").value;
  if (email !== email.toLowerCase()) {
    errorMessage.innerHTML = "<p>email must be in lowercase</p>";
    event.preventDefault();
  } else {
    errorMessage.innerHTML = "";
  }
});

//  Create input variables
const userName = document.getElementById("fullname");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("textarea-size");

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
  localStorage.setItem("userData", JSON.stringify(userData));
}

// call storeData at every event
userName.addEventListener("keyup", storeData);
userEmail.addEventListener("keyup", storeData);
userMessage.addEventListener("keyup", storeData);

// Check for info in local-storage
const savedUserData = localStorage.getItem("userData");
document.getElementById("fullname").value = JSON.parse(savedUserData).nameInput;
document.getElementById("email").value = JSON.parse(savedUserData).emailInput;
document.getElementById("textarea-size").value =
  JSON.parse(savedUserData).messageInput;
