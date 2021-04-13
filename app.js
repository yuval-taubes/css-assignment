// Tutorial https://www.youtube.com/watch?v=vJNVramny9k


const logo = document.querySelectorAll('#logo path');

//for each letter there is, I want it to tell me the total length (in pixels) for that letter. I later use this info to animate them.
//I find the info by using dev tools

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}