const note = document.querySelector('.nowplaying');
const keys = document.querySelectorAll('.key');
const hints = document.querySelectorAll('.hints');

window.addEventListener('keydown' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if(! key) return;

    const keyNote = key.getAttribute('data-note');
 
    key.classList.add('playing');
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
});

function removeTransition() {
    this.classList.remove('playing')
}


hints.forEach(function(elm , index) {
    // elm.style = `transition-delay : ${index * 50}ms`
    elm.setAttribute('style' , `transition-delay : ${index * 50}ms`)
})

keys.forEach(key => key.addEventListener('transitionend' , removeTransition))