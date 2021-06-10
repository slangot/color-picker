/****** VARIABLES */

// Text Color
const textColor = document.querySelector('#text-color');
const textColorResult = document.querySelector('#result-text');

// BG Color
const bgColor = document.querySelector('#bg-color');
const bgColorResult = document.querySelector('#result-container');

// Color Code
const textColorCode = document.querySelector('#copy-text-color-code');
const bgColorCode = document.querySelector('#copy-bg-color-code');

// Copy Buttons
const copyTextColor = document.querySelector('#copy-text-color');
const copyBGColor = document.querySelector('#copy-bg-color');


/****** EVENTS */


// Text Color Events

textColor.addEventListener('change', () => {
    textColorResult.style.color = textColor.value;
    textColorCode.value = textColor.value;
    textColorCode.textContent = textColor.value;
    console.log(textColorCode.value);
});

copyTextColor.addEventListener('click', () => {
    textColorCode.select();
    document.execCommand('copy');
    document.querySelector('.text-color-copied').style.display = "block";
    document.querySelector('.text-color-copied').style.animation = "copied-animation-forwards 4s";
    setInterval(function() {
        document.querySelector('.text-color-copied').style.animation = "";}, 6000
    );
});


// BG Color Events

bgColor.addEventListener('change', () => {
    bgColorResult.style.backgroundColor = bgColor.value;
    bgColorCode.value = bgColor.value;
    bgColorCode.textContent = bgColor.value;
    console.log(bgColorCode.value);
});

copyBGColor.addEventListener('click', () => {
    bgColorCode.select();
    document.execCommand('copy');
    document.querySelector('.bg-color-copied').style.display = "block";
    document.querySelector('.bg-color-copied').style.animation = "copied-animation-forwards 4s";
    setInterval(function() {
        document.querySelector('.text-color-copied').style.animation = "";}, 6000
    );
});