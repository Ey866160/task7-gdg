const text = "كل عام وانتم بخير رمضان كريم";
const typingSpeed = 100;
const deletingSpeed = 50; 
const delayBetween = 1000; 
let index = 0;
let isDeleting = false;
const textElement = document.getElementById("typing-text");

function typeText() {
    if (isDeleting) {
        textElement.innerHTML = text.substring(0, index);
        index--;
        if (index === 0) {
            isDeleting = false;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(typeText, deletingSpeed);
        }
    } else {
        textElement.innerHTML = text.substring(0, index);
        index++;
        if (index === text.length + 1) {
            isDeleting = true;
            setTimeout(typeText, delayBetween);
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }
}

typeText();
