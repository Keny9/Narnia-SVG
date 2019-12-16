$(document).ready(function(){
  initializeAudio();

  $("#circlePlay").click(function(){
    startScene();
  });
});

//Initialiser le son
function initializeAudio(){
  //Son pour le mouvement su casier BANG
  audio = document.createElement("audio");
  document.body.appendChild(audio);
  audio.src = "./sound/locker.ogg";
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  //Son pour l'ouverture du casier
  audioOpenLocker = document.createElement("audio");
  document.body.appendChild(audio);
  audioOpenLocker.src = "./sound/open_locker.ogg";
}

//Commencer la story
function startScene(){
  $("#circlePlay").css("display", "none");
  $("#play").remove();
  $("#story").css("display", "block");
  setTimeout(livingLocker, 5000);
}

//Le casier se met en mouvement
function livingLocker(){
  audio.play();
  $("#locker2").addClass("living-locker");
  setTimeout(dieLocker, 5500);
}

//Le casier arrete son mouvement
function dieLocker(){
  audio.pause();
  $("#locker2").removeClass("living-locker");
  setTimeout(openLocker, 5000);
}

//Ouverture du casier
function openLocker(){
  $("#lockerRect1").addClass("openLocker");
  $("#lockerRect2").remove();
  $("#lockerRect3").remove();
  $("#lockerRect4").remove();
  $("#line1").remove();
  $("#line2").remove();
  $("#line3").remove();
  audioOpenLocker.play();
}
