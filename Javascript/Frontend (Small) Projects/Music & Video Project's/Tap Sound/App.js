 // ^ This window eventListener, it uses the "load": event type which helps the window to load completely first and then only run javascript.
                          // ! load event doesn't work anywhere else than window.addEventListener

window.addEventListener( "load", () =>
{
  // const sounds = document.querySelector(".sound");
  // const pads =  document.querySelectorAll(".pads div");
  // const visual = document.querySelector(".visual");
  
  const pad1 = document.querySelector(".pad1");
  const pad2 = document.querySelector(".pad2");
  const pad3 = document.querySelector(".pad3");
  const pad4 = document.querySelector(".pad4");
  const pad5 = document.querySelector(".pad5");
  const pad6 = document.querySelector(".pad6");
  const colors =
  [
                 "rgb(23, 95, 212)",
                 "rgb(64, 212, 23)",   
                 "rgb(240, 247, 15)",
                 "rgb(255, 91, 15)",
                 "rgb(255, 15, 15)",
                 "rgb(255, 15, 211)"
  ];

                                                // * Lets get going with the sound where   
  // pads.forEach((pad, index) => 
  // {
  
  pad1.addEventListener("click", function ()
  {
    // sounds[index].currentTime = 0;   
    // sounds[index].play();  
    var sound1 = new Audio("Sounds/bubbles.mp3");
    sound1.play();
    // createBubbles(index);
  });
  
  // });

  pad2.addEventListener("click", function ()
  {
    var sound2 = new Audio("Sounds/clay.mp3");
    sound2.play();   
  });
         
  pad3.addEventListener("click", function ()
  {
    var sound3 = new Audio("Sounds/confetti.mp3");
    sound3.play();
  });
         
  pad4.addEventListener("click", function ()
  {
    var sound4 = new Audio("Sounds/glimmer.mp3");
    sound4.play();
  });   
     
  pad5.addEventListener("click", function ()
  {
    var sound5 = new Audio("Sounds/moon.mp3");
    sound5.play();
  });   
     
  pad6.addEventListener("click", function ()
  {
    var sound6 = new Audio("Sounds/ufo.mp3");
    sound6.play();
  });   
     
                                           //  & Create a function that makes a bubble
     
  // const createBubbles = (index) =>
  // {
  //   const bubble = document.createElement("div");
  //   visual.appendChild(bubble);
  //   bubble.style.backgroundColor = colors[index];
  //   bubble.style.animation = `jump 1s ease`;
  //   bubble.addEventListener("animationend",function() {
  //      visual.removeChild(this);
  //   });
  //  };
}); 