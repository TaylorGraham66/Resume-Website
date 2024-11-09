let currentSliderIndex = 1;
const totalSliders = 3;

// Function to display the next slider item
function nextSlider() {
    const sliders = document.querySelectorAll('.slider1');
    sliders[currentSliderIndex - 1].classList.remove('active');

    currentSliderIndex = (currentSliderIndex % sliders.length) + 1;
    sliders[currentSliderIndex - 1].classList.add('active');

    
    resetTextStates();
}

// Function to display the previous slider item
function prevSlider() {
    const sliders = document.querySelectorAll('.slider1');
    sliders[currentSliderIndex - 1].classList.remove("active");
    
    currentSliderIndex = (currentSliderIndex - 2 + totalSliders) % totalSliders + 1;
    sliders[currentSliderIndex - 1].classList.add("active");

  
    resetTextStates();
}

