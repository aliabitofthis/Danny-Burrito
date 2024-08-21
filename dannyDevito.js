// content.js
const dannyDevito = [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito2.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito3.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito4.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito5.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito6.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito7.jpeg"
];

const changeImg = () => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
        if (!dannyDevito.includes(img.src)) {
            img.src = dannyDevito[Math.floor(Math.random() * dannyDevito.length)];
            img.srcset = "";

            // Get current style
            const currentStyle = img.getAttribute("style");

            // Apply styles individually
            img.style.objectFit = "cover";
            img.style.visibility = "visible";

            // Apply the rest of the current inline styles, if any
            if (currentStyle) {
                img.setAttribute("style", currentStyle + "; object-fit: cover !important; visibility: visible;");
            } else {
                img.setAttribute("style", "object-fit: cover !important; visibility: visible;");
            }
        }
    });
};


// Observe DOM changes to catch dynamically added images
const observeDOM = () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                changeImg();
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
};

// Initialize the image replacement process
changeImg();
observeDOM();
