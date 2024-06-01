const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photos = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alttexts = {
    1: "Closeup of a human eye", 
    2: "Oyster",
    3: "Flower",
    4: "Egyptian wall painting",
    5: "Butterfly",
};

/* Looping through images */

for(let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${photos[i]}`);
    newImage.setAttribute('alt', alttexts[`${i}`]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', currentImage);
    function currentImage() {
        return displayedImage.setAttribute('src', `${newImage.src}`);
    }
}

/* Wiring up the Darken/Lighten button */


btn.addEventListener('click', changeLight);
function changeLight() {
    if(btn.getAttribute("class") === "dark") {
        return btn.setAttribute("class", "light"),
        btn.textContent = "Lighten",
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else {
        return btn.setAttribute("class", "dark"),
        btn.textContent = "Darken",
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}
