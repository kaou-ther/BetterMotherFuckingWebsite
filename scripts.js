
function closePopup() {
  var popup = document.getElementById('myModal');
  popup.style.display = 'none';
}
var modalBg = document.querySelector('.modal-bg');

window.addEventListener('load', (event) => {
  modalBg.classList.add('bg-active');
});


document.getElementById("redirect").onclick = function () {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

function modePsychedelique(){
    var mode = document.getElementById('mode-psychedelique');
    var defaultStyle = document.getElementsByTagName('body')[0].style;
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (mode.value =='Activate'){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'magenta';
        document.getElementsByTagName('body')[0].style.color = 'blue';
        document.getElementsByTagName('body')[0].style.fontFamily = 'papyrus';
        for (val of headings)
        {
            val.style.color = 'green';
            val.style.fontFamily = 'Comic Sans MS';
        }
        mode.value = 'Disable';
    }else{
        document.getElementsByTagName('body')[0].style = defaultStyle;
        for (val of headings)
        {
            val.style.color = 'black';
            val.style.fontFamily = 'Comic Sans MS';
        }
        mode.value ='Activate';
    }
}
