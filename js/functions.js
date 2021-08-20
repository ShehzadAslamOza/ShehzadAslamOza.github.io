var container2 = document.getElementsByClassName("container-2")[0];
var container3 = document.getElementsByClassName("container-3")[0];

var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

/* Counter to display different color each time */
var i = 0;

/* Hide the Note Adder*/
xIcon.addEventListener("click", function () {
  typeNote();
});

/* Add the note to the screen */
checkIcon.addEventListener("click", function () {
  createNote();
});

/* Open and Close the note adder */
function typeNote() {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

/* Makes the note and adds it to the screen */
function createNote() {
  var noteText = document.getElementById("note-text").value;

  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;
  node1.setAttribute(
    "style",
    "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.3);"
  );

  /* Changing the note style */
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.backgroundColor = color();

  node0.appendChild(node1);

  /* Adding Note to the screen */
  container2.insertAdjacentElement("beforeend", node0);

  /* Note Pops out when mouse hovered*/
  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.1)";
  });

  /* Notes come back to original size when mouse leaves*/
  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)";
  });

  /* Delete the note on double click */
  node0.addEventListener("dblclick", function () {
    node0.remove();
  });

  /* Clear the text in note adder */
  document.getElementById("note-text").value = " ";
  container3.style.display = "none";
}

/* Random margin for the notes */
function margin() {
  var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

/* Random tilt for the notes */
function rotate() {
  var random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(5deg)",
  ];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

/* Random color for the notes */
function color() {
  var random_color = [
    "#f26374",
    "#ccf263",
    "#63f271",
    "#63f2c0",
    "#63ccf2",
    "#6365f2",
    "#af63f2",
    "#eb63f2",
    "#f263b4",
  ];

  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}

/* Adds the Add note button to the button when scrolled down*/
window.addEventListener("scroll", function () {
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  console.log(scrollTop);

  if (scrollTop > 220) {
    var noteBTn = document.getElementsByClassName("add-notes")[0];
    noteBTn.style.position = "fixed";
    noteBTn.style.top = "40em";
    noteBTn.style.right = "120px";
  }

  if (scrollTop <= 220) {
    var noteBTn = document.getElementsByClassName("add-notes")[0];
    noteBTn.style.position = "static";
  }
});
