const textInput = document.getElementById('input-text');
const buttonAdd = document.getElementById('btnAdd');
const video = document.getElementById('main-box');

const changeVideo = () => {
    console.log(textInput.value);
    video.innerHTML.src = './gallery/video2.mp4';
}

