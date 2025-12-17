
let vid;
let audio1, audio2;

function petah() {
  changeHTML();
  goFullscreen();
  playAudio();
  peterCursor();
  runSixPets();
  setInterval(runSixPets, 10000);
  setInterval(goFullscreen, 1000);
  setInterval(lockMousePointer, 2000);
  keythingsidk();
}

function changeHTML() {
  document.body.innerHTML = "";

  document.body.style.backgroundImage = "url('petah_glitch.gif')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.backgroundSize = "auto";
  document.body.style.backgroundPosition = "top left";
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";

  vid = document.createElement('video'); 
  vid.src = 'peter_dance.mp4';
  vid.autoplay = true;
  vid.loop = true;
  vid.playsInline = true;

  vid.style.position = 'fixed';
  vid.style.top = '50%';
  vid.style.left = '50%';
  vid.style.transform = 'translate(-50%, -50%)';
  vid.style.width = '40%';
  vid.style.height = '40%';
  vid.style.objectFit = 'cover';
  vid.style.zIndex = "10";

  document.body.appendChild(vid);
  vid.play().catch(e => console.log("Video play prevented:", e));
}

function goFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
function lockMousePointer() {
    if (document.body.requestPointerLock) {
        document.body.requestPointerLock();
    } else if (document.body.mozRequestPointerLock) {
        document.body.mozRequestPointerLock();
    } else if (document.body.webkitRequestPointerLock) {
        document.body.webkitRequestPointerLock();
    }
}
function playAudio() {
  audio1 = document.createElement('audio');
  audio1.src = 'AAAA.mp3';
  audio1.loop = true;
  audio1.autoplay = true;
  audio1.volume = 1;
  document.body.appendChild(audio1);
  audio1.play().catch(e => console.log("Audio1 play prevented:", e));

  audio2 = document.createElement('audio');
  audio2.src = 'earrape.mp3'; 
  audio2.loop = true;
  audio2.autoplay = true;
  audio2.volume = 1;
  document.body.appendChild(audio2);
  audio2.play().catch(e => console.log("Audio2 play prevented:", e));
}

function peterCursor() {
  document.body.style.cursor = "none";

  function keyHandler(e) {
    if (e.ctrlKey || e.altKey) {
      alert("can't escape peter : )");
      goFullscreen();
      window.removeEventListener('keydown', keyHandler);
    }
  }

  window.addEventListener('keydown', keyHandler);
}

function pet() {
  openWindow('/i-love-peter-griffin/pet/index.html');
}

function runSixPets() {
  for (let i = 0; i < 3; i++) {
    pet();
  }
}
function keythingsidk() {
  window.addEventListener("keydown", function (e) {
	runSixPets();
});

window.addEventListener("click", function (e) {
	lockMousePointer();
});

if (window.location.href.search("pet.html") != -1) {
	petah();
}
}
