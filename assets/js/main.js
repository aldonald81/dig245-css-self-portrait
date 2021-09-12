
/* javascript */

document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  //console.log([mousex, mousey]); // Prints data
  document.getElementById("mouse").innerHTML = "X: " + mousex + ", " + "Y: " + mousey;
});

var total_elements = document.querySelectorAll("div").length;
console.log("Total elements in self portrait: " + total_elements);

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
