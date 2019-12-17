window.addEventListener('DOMContentLoaded', function() {
  var mirror = "-moz-transform: scale(-1, 1);-webkit-transform: scale(-1, 1);-o-transform: scale(-1, 1);-ms-transform: scale(-1, 1);transform: scale(-1, 1);"
  var main = document.getElementById('main');
  main.innerHTML += '<iframe style="top:300px; left:80px;position:absolute;width:100%;height:100%;max-width: 400px;max-height: 400px;border: none;" src="../Leprechaun/moyen-lutin-4.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';
  main.innerHTML += '<iframe style="top:330px; left:300px;position:absolute;width:100%;height:100%;max-width: 400px;max-height: 400px;border: none;" src="../Leprechaun/moyen-lutin-4.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';
  main.innerHTML += '<iframe style="top:260px; left:550px;position:absolute;width:100%;height:100%;max-width: 400px;max-height: 400px;border: none;" src="../Leprechaun/moyen-lutin-4.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';
  main.innerHTML += '<iframe style="top:200px; left:780px;position:absolute;width:100%;height:100%;max-width: 400px;max-height: 400px;border: none;" src="../Leprechaun/moyen-lutin-4.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';
  main.innerHTML += '<iframe style="'+mirror+'top:0px; left:900px;position:absolute;width:100%;height:100%;max-width: 400px;max-height: 400px;border: none;" src="../Leprechaun/moyen-lutin-4.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';
  main.innerHTML += '<iframe style="'+mirror+'top:0px; left:630px;position:absolute;width:100%;height:100%;max-width: 400px;max-height: 400px;border: none;" src="../Leprechaun/minuscule-lutin-4.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';

  main.innerHTML += '<iframe style="top:0px; left:0px;position:absolute;width:2000px;height:100%;max-height:500px;max-width:2000px;border: none;" src="../soleil/soleil.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';
  main.innerHTML += '<iframe id="majoralune" style="opacity:0;top:0px; left:0px;position:absolute;width:2000px;height:100%;max-height:500px;max-width:2000px;border: none;" src="../soleil/lune.html" <!--onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"-->></iframe>';

  setTimeout(function(){
    document.getElementById('majoralune').style.opacity="1";
  },15666);


  /*var jourAudio = new Audio('../Leprechaun/jour.mp3');
  jourAudio.pause();
  jourAudio.play();
  main.innerHTML += '<iframe src="silence.mp3" allow="autoplay" id="audio" style="display:none"></iframe>';//'<iframe src="../Leprechaun/jour.mp3" allow="autoplay" style="display:none" id="iframeAudio"></iframe> ';
  main.innerHTML += '<audio autoplay loop  id="playAudio"><source src="../Leprechaun/jour.mp3"></audio>';
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if(!isChrome){
    $('#iframeAudio').remove();
  }
  else{
    $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
  }*/
  main.innerHTML += '<iframe src="../Leprechaun/silence.mp3" allow="autoplay" id="audio" style="display:none"></iframe>;';
  main.innerHTML += '<audio id="player" autoplay><source src="../Leprechaun/jour.mp3" type="audio/mp3"></audio>';
  setTimeout

  var nuitAudio = new Audio('../Leprechaun/nuit.mp3');
  setTimeout(function(){
    nuitAudio.play();
  }, 15000);


});
/*var jourAudio = new Audio('../Leprechaun/jour.mp3');
jourAudio.play();*/
