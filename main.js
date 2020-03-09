
let mouse = document.querySelectorAll('.box');
mouse.forEach(letterInner => {
    letterInner.addEventListener('mousedown', function() {
        const audio = new Audio();
        audio.src = `audio/${letterInner.innerHTML}.mp3`;
        audio.play();
    })
})

let letters = document.querySelectorAll('.box');
document.addEventListener('keydown', someBtn => {
    if (someBtn.code == "KeyA") {
        new Audio('./audio/A.mp3').play();
    } else if (someBtn.code == "KeyS") {
        new Audio('./audio/S.mp3').play();
    } else if (someBtn.code == "KeyD") {
        new Audio('./audio/D.mp3').play();
    }
    
})