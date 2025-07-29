'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Clients modal variables
const clientItems = document.querySelectorAll("[data-client-item]");
const clientModalContainer = document.querySelector("[data-client-modal-container]");
const clientModalCloseBtn = document.querySelector("[data-client-modal-close-btn]");
const clientOverlay = document.querySelector("[data-client-overlay]");
const clientModalImg = document.querySelector("[data-client-modal-img]");
const clientModalTitle = document.querySelector("[data-client-modal-title]");
const clientModalText = document.querySelector("[data-client-modal-text]");

// Client modal toggle
const toggleClientModal = function () {
  clientModalContainer.classList.toggle("active");
  clientOverlay.classList.toggle("active");
};

// Add click event to each client logo
clientItems.forEach(item => {
  item.addEventListener("click", function () {
    const img = this.querySelector("[data-client-img]");

    clientModalImg.src = img.src;
    clientModalImg.alt = img.alt;
    clientModalTitle.textContent = img.getAttribute("data-client-title");
    clientModalText.innerHTML = img.getAttribute("data-client-description");

    toggleClientModal();
  });
});


function showEmailAlert(message, isSuccess = true) {
  const alertBox = document.getElementById('email-alert');
  alertBox.innerText = message;
  alertBox.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336'; // green or red
  alertBox.style.color = '#fff';
  alertBox.style.display = 'block';

  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 4000);
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_9mj1tk6', 'template_z0ycv6m', this)
    .then(() => {
      showEmailAlert('✅ Message sent successfully!', true);
      this.reset();
    })
    .catch((error) => {
      showEmailAlert('❌ Failed to send message. Please try again.', false);
      console.error('EmailJS Error:', error);
    });
});

// Certificate modal functionality
const certificateItems = document.querySelectorAll("[data-certificate-item]");
const certificateModalContainer = document.querySelector("[data-certificate-modal]");
const certificateModalCloseBtn = document.querySelector("[data-certificate-close-btn]");
const certificateOverlay = document.querySelector("[data-certificate-overlay]");

const modalCertificateImg = document.querySelector("[data-modal-certificate-img]");
const modalCertificateTitle = document.querySelector("[data-modal-certificate-title]");
const modalCertificateText = document.querySelector("[data-modal-certificate-text]");


function openPopup(img, title, desc) {
  document.getElementById("popup-img").src = img;
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-desc").innerText = desc;
  document.getElementById("popup").style.display = "flex";

  document.body.classList.add("modal-open"); // ✅ Lock scroll
}

function closePopup() {
  document.getElementById("popup").style.display = "none";

  document.body.classList.remove("modal-open"); // ✅ Unlock scroll
}
