document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    const circle = document.querySelector('.circle');

    // Function to move the circle to the hovered item
    function moveCircleTo(element) {
      const itemPosition = element.getBoundingClientRect();
      const sidebarPosition = document.querySelector('.sidebar').getBoundingClientRect();
      const topPosition = itemPosition.top - sidebarPosition.top;
      circle.style.transform = `translateY(${topPosition}px)`;
    }

    // Attach hover event listeners to each sidebar item
    sidebarItems.forEach(item => {
      item.addEventListener('mouseenter', () => moveCircleTo(item));
    });

    // Get all the card sections
    const allCardsSections = document.querySelectorAll(".pipeline-section .cards");

    // Function to hide all card sections
    function hideAllCards() {
      allCardsSections.forEach(section => {
        section.style.visibility = 'hidden';
        section.style.opacity = '0';
        section.style.position = 'absolute'; // Remove from normal flow
      });
    }

    // Function to show a specific card section
    function showCards(section) {
      hideAllCards();
      section.style.visibility = 'visible';
      section.style.opacity = '1';
      section.style.position = 'relative'; // Return to normal flow
    }

    // Add event listeners for each sidebar item to show respective cards
    const complianceItem = document.querySelector("li.active");
    const policyItem = document.querySelector(".policy-management");
    const deployItem = document.querySelector(".deploy-management");
    const environmentItem = document.querySelector(".environment-management");
    const gitopsItem = document.querySelector(".gitops-platform");
    const softwareDeliveryItem = document.querySelector("li:nth-child(6)");
    const operationInsightsItem = document.querySelector("li:nth-child(7)");
    const costManagementItem = document.querySelector("li:nth-child(8)");

    const complianceCards = document.querySelector(".compliance-cards");
    const policyCards = document.querySelector(".policy-cards");
    const deployCards = document.querySelector(".deploy-cards");
    const environmentCards = document.querySelector(".environment-cards");
    const gitopsCards = document.querySelector(".gitops-cards");
    const softwareDeliveryCards = document.querySelector(".software-delivery-cards");
    const operationInsightsCards = document.querySelector(".operation-insights-cards");
    const costManagementCards = document.querySelector(".cost-management-cards");

    // Initially show compliance cards
    showCards(complianceCards);

    // Event listeners for each sidebar item
    policyItem.addEventListener("click", () => {
      showCards(policyCards);
      updateActiveItem(policyItem);
    });

    complianceItem.addEventListener("click", () => {
      showCards(complianceCards);
      updateActiveItem(complianceItem);
    });

    deployItem.addEventListener("click", () => {
      showCards(deployCards);
      updateActiveItem(deployItem);
    });

    environmentItem.addEventListener("click", () => {
      showCards(environmentCards);
      updateActiveItem(environmentItem);
    });

    gitopsItem.addEventListener("click", () => {
      showCards(gitopsCards);
      updateActiveItem(gitopsItem);
    });

    softwareDeliveryItem.addEventListener("click", () => {
      showCards(softwareDeliveryCards);
      updateActiveItem(softwareDeliveryItem);
    });

    operationInsightsItem.addEventListener("click", () => {
      showCards(operationInsightsCards);
      updateActiveItem(operationInsightsItem);
    });

    costManagementItem.addEventListener("click", () => {
      showCards(costManagementCards);
      updateActiveItem(costManagementItem);
    });

    // Function to update active class
    function updateActiveItem(activeItem) {
      sidebarItems.forEach(item => item.classList.remove("active"));
      activeItem.classList.add("active");
    }

    

      



    function validateForm() {
      const email = document.getElementById('email').value;
      const name = document.getElementById('name').value;
      const challenges = document.getElementById('challenges').value;
  
      if (!email || !name || !challenges) {
          alert("All fields are required.");
          return false;
      }
  
      alert("Demo request submitted successfully!");
      return true;
  }
  // Optional: If you want the speed of the animation to be dynamic, you can manipulate the animation in JavaScript.
    document.querySelector('.logos').style.animationDuration = '15s';

  

  });