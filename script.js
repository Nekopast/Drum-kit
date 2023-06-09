const drumimage = document.getElementById("drumimage")

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
  drumimage.classList.toggle('scaled');
  drums.classList.toggle('scaled');
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom.wav");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/ride.wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/hihat.wav");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/openhat.wav");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/tink.wav");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;

    case "i":
        var kick = new Audio("sounds/clap.wav");
        kick.play();
        break;

    case "o":
        var kick = new Audio("sounds/boom.wav");
        kick.play();
        break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}