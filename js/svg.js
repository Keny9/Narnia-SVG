var flocon = '<svg id="e57924zkc2921" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="e57924zkc2922" d="M42.732000,50.287000L46.687000,56.128000L54.052000,56.128000L57.450000,50.287000L53.870000,44.067000L46.491000,44.067000ZM45.765000,97.261000L45.765000,84.054000L38.386000,88.204000L34.627000,86.052000L34.627000,81.399000L45.570000,75.179000L45.570000,66.499000L37.631000,71.601000L37.631000,62.405000L30.042000,66.779000L30.042000,79.247000L25.891000,81.819000L22.383000,79.498000L22.383000,71.142000L10.865000,77.640000L5.946000,75.570000L5.946000,70.300000L18.035000,63.691000L10.474000,59.890000L10.474000,55.068000L14.765000,52.719000L25.610000,59.105000L33.143000,54.759000L32.961000,54.620000L25.260000,50.203000L32.737000,45.563000L25.232000,41.217000L14.388000,47.589000L10.320000,45.563000L10.320000,40.755000L17.659000,36.632000L5.946000,30.272000L5.946000,25.003000L10.446000,22.684000L21.990000,29.350000L21.990000,20.853000L25.470000,18.505000L29.734000,20.965000L29.706000,33.683000L37.462000,38.113000L37.435000,29.127000L45.569000,33.502000L45.569000,24.822000L34.626000,18.589000L34.626000,13.977000L38.385000,11.797000L45.764000,15.948000L45.764000,2.768000L49.986000,0L54.247000,2.768000L54.247000,15.948000L61.893000,11.713000L65.738000,14.257000L65.738000,18.408000L54.416000,24.822000L54.416000,33.502000L62.160000,28.778000L62.160000,38.226000L70.139000,33.878000L70.139000,20.280000L73.983000,18.491000L78.021000,20.280000L78.021000,28.974000L89.900000,22.558000L94.053000,25.088000L94.053000,30.007000L82.452000,36.604000L89.706000,40.670000L89.706000,45.367000L85.946000,47.450000L74.808000,40.867000L67.106000,45.759000L74.555000,50.401000L66.882000,54.817000L74.808000,58.967000L85.946000,52.746000L89.524000,55.276000L89.524000,59.763000L82.536000,63.690000L93.662000,70.300000L93.662000,75.488000L88.952000,77.640000L78.021000,71.419000L78.021000,79.651000L74.094000,81.845000L70.251000,79.651000L70.251000,67.155000L62.159000,62.544000L62.159000,71.224000L54.415000,66.499000L54.415000,75.179000L65.359000,81.399000L65.359000,86.319000L61.583000,88.205000L54.246000,84.055000L54.246000,97.262000L49.986000,100Z" transform="matrix(1 0 0 1 0.00050000000000 0.00000000000001)" fill="#FFFFFF" stroke="rgb(0,0,0)" stroke-width="1"/></svg>';


$(document).ready(function(){
  initializeAudio(); //Création des sons

  $("#circlePlay").click(function(){
    startScene(); //Lancement de l'histoire
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
  $("#schoolScene").hide();
  $("#main").show();
  saisons(); //2ème scène
}

//Scène guillaume

function saisons(){
  saisonEte();
  setTimeout(saisonAutomne, 2000);
  setTimeout(saisonHiver, 7000);
  setTimeout(nuit, 12000);
}

function saisonEte(){
  //Changer la couleur de l'herbe
  $("#herbe").toggleClass("herbe-ete");
  $("#herbe-ombre").toggleClass("herbe-ombre-ete");
  $("#herbe-droite").toggleClass("herbe-ete");

  //Couleur ciel
  $("#ciel").toggleClass("ciel-ete");
}

function saisonAutomne(){
  //Changer la couleur de l'herbe
  $("#herbe").toggleClass("herbe-automne");
  $("#herbe-ombre").toggleClass("herbe-ombre-automne");
  $("#herbe-droite").toggleClass("herbe-automne");
}

function saisonHiver(){
  //Faire tomber les flocons
  interval = setInterval(function() {
    create_flocon();
    remove_flocon();
  },200);

  //Changer la couleur de l'herbe
  $("#herbe").toggleClass("herbe-hiver");
  $("#herbe-ombre").toggleClass("herbe-ombre-hiver");
  $("#herbe-droite").toggleClass("herbe-hiver");

  //Couleur ciel
  $('#ciel').toggleClass("ciel-hiver");

}

function nuit(){
  $("#paysage").toggleClass("nuit");
  $("#main").toggleClass("nuit");
  $("#ciel").toggleClass("ciel-nuit");

}


//Créer un flocon
function create_flocon(){
  var falling_time = Math.floor(Math.random() * 10) + 5 ;
  var flocon_pos = Math.floor(Math.random() * 90) + 4 ;
  var flocon_size = (Math.floor(Math.random() * 100) + 1)/100 ;
  var snow_flocon = "<div class='flocon-wrapper' style='width:40px; left:" + (flocon_pos) + "%;height:40px;transform:scale("+(flocon_size)+");animation:falling "+ (falling_time) + "s linear infinite'>"+ flocon +"</div>";
  $(snow_flocon).appendTo('.background');
}

//Supprime un flocon
function remove_flocon(){
  $(".flocon-wrapper").each(function(){
    var flocon_pos = $(this).offset().top;
    var body_height = $(document).height()-100;
    if( flocon_pos > body_height){
      $(this).remove();
    }
  });
}
