// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    const applyButton = document.querySelector(".cta button");
    applyButton.addEventListener("click", function () {
        window.location.href = "Admission_page.html";
    });
});
