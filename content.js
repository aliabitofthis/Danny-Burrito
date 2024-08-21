// content.js
const dannyDevito = [
    "https://github.com/aliabitofthis/Danny-Burrito/blob/main/dannyDorito.jpg?raw=true",
  
    "https://github.com/aliabitofthis/Danny-Burrito/blob/main/dannyBurrito.png?raw=true",
  
    "https://github.com/aliabitofthis/Danny-Burrito/blob/main/a%20nice%20egg%20in%20this%20trying%20time.jpg?raw=true",
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
