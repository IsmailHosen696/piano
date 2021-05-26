const keys = document.querySelectorAll('.key');
const whiteKeys = [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
const blackKeys = [ 'd', 'f', 'j', 'k', 'l' ];
const white = document.querySelectorAll('.white');
const black = document.querySelectorAll('.black');

keys.forEach(key => {
    key.addEventListener('click', () => playnote(key));
});

document.addEventListener('keydown', (e) => {
    if (e.repeat) return
    const key = e.key
    const whit_key_index = whiteKeys.indexOf(key);
    const black_key_index = blackKeys.indexOf(key);
    if (whit_key_index > -1) playnote(white[ whit_key_index ])
    if (black_key_index > -1) playnote(black[ black_key_index ])
})
function playnote(key) {
    const sound = document.getElementById(key.dataset.id);
    sound.currentTime = 0
    sound.play();
    key.classList.add('active');
    sound.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}