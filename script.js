/****** VARIABLES */

const textColor = document.querySelector('#text-color');
const textColorResult = document.querySelector('#result-text');

const bgColor = document.querySelector('#bg-color');
const bgColorResult = document.querySelector('#result-container');

const textColorCode = document.querySelector('#text-color-code');
const bgColorCode = document.querySelector('#bg-color-code');

const copyTextColor = document.querySelector('#copy-text-color');
const copyBGColor = document.querySelector('#copy-bg-color');


/****** EVENTS */

bgColor.addEventListener('change', () => {
    bgColorResult.style.backgroundColor = bgColor.value;
    bgColorCode.value = bgColor.value;
    console.log(bgColorCode.value);
});

textColor.addEventListener('change', () => {
    textColorResult.style.color = textColor.value;
    textColorCode.value = textColor.value;
    console.log(textColorCode.value);
});

copyTextColor.addEventListener('click', () => {
    console.log(textColorCode.value, textColorCode.select());
    textColorCode.select();
    document.execCommand('copy');

});
