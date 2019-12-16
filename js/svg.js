$(document).ready(function(){
  initializeAudio();

  $("#circlePlay").click(function(){
    startScene();
  });
});

//Initialiser le son
function initializeAudio(){
  //Son ambient dans l'école
  audioSchool = document.createElement("audio");
  document.body.appendChild(audioSchool);
  audioSchool.src = "./sound/ambient-school.mp3";

  //Son pour le mouvement su casier BANG
  audio = document.createElement("audio");
  document.body.appendChild(audio);
  audio.src = "./sound/locker.ogg";
  audio.addEventListener('ended', function() { //Pour loop le son
    this.currentTime = 0;
    this.play();
  }, false);

  //Son pour l'ouverture du casier
  audioOpenLocker = document.createElement("audio");
  document.body.appendChild(audio);
  audioOpenLocker.src = "./sound/open_locker.ogg";

  //Son pour la transition de scene
  audioTransit = document.createElement("audio");
  document.body.appendChild(audioTransit);
  audioTransit.src = "./sound/magic-effect.mp3";

  //Son pour le personngae (Male-scared-gasp)
  audioScared = document.createElement("audio");
  document.body.appendChild(audioScared);
  audioScared.src = "./sound/male-scared-gasp.mp3";
}

//Commencer la story
function startScene(){
  $("#circlePlay").css("display", "none");
  $("#play").remove();
  $("#story").css("display", "block");
  audioSchool.play();
  setTimeout(livingLocker, 7000);
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
  audioSchool.pause();
  setTimeout(scaredGuy, 3000);
}

//Étonnement du personnage
function scaredGuy(){
  audioScared.play();
  setTimeout(changeScene, 3000);
}

//Changement de scene
function changeScene(){
  audioTransit.play();
  $("#schoolScene").addClass("endSchoolScene");
  setTimeout(startNarniaScene, 5000);
}

//Nouvelle Scene (Narnia)
function startNarniaScene(){
  audioTransit.pause();
}
