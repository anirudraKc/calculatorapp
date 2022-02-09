let number1;
let number2;
let number3;
let number4;
let perimeter;
let result;
let ab;
let bc;
let cd;
let da;
let r;
let a;
let b;
let c;
let base;
let height1;
let height2;
let height3;
let base1;
let radius1;
let daidonal1;
let diagonal2;
let area;
let radius3;
let height4;
let radius4;
let height5;
let radius5;

let resultElement = document.getElementById("result");
let perimeterElement = document.getElementById("perimeter");
let piElement = document.getElementById("pi");
let triangleElement = document.getElementById("triangle");
let areaQuad = document.getElementById("aQuad");
let areaTriangle = document.getElementById("aTriangle");
let areaCircle = document.getElementById("aCircle");
let areaRhombus = document.getElementById("aRhombus");
let volCube = document.getElementById("vCube");
let volCone = document.getElementById("vCone");
let volCylinder = document.getElementById("vCylinder");
let volSphere = document.getElementById("vSphere");

function updateValues() {
    let n1 = document.getElementById("firstNumber").value;
    let n2 = document.getElementById("secondNumber").value;
    let ab = document.getElementById("AB").value;
    let bc = document.getElementById("BC").value;
    let cd = document.getElementById("CD").value;
    let da = document.getElementById("DA").value;
    let radius = document.getElementById("r").value;
    let a = document.getElementById("sideA").value;
    let b = document.getElementById("sideB").value;
    let c = document.getElementById("sideC").value;
    let base = document.getElementById("diagonals").value;
    let height1 = document.getElementById("Height1").value;
    let height2 = document.getElementById("Height2").value;
    let height3 = document.getElementById("Height3").value;
    let base1 = document.getElementById("Base1").value;
    let radius1 = document.getElementById("Radius1").value;
    let diagonal1 = document.getElementById("Diagonal1").value;
    let diagonal2 = document.getElementById("Diagonal2").value;
    let area = document.getElementById("Area").value;
    let radius3 = document.getElementById("Radius3").value;
    let height4 = document.getElementById("Height4").value;
    let radius4 = document.getElementById("Radius4").value;
    let height5 = document.getElementById("Height5").value;
    let radius5 = document.getElementById("Radius5").value;

   
    

    number1 = ~~n1;
    number2 = ~~n2;
    
    sideA = ~~a;
    sideB = ~~b;
    sideC = ~~c;
    AB = ~~ab;
    BC = ~~bc;
    CD = ~~cd;
    DA = ~~da;
    
    r = ~~radius;
    result= ~~result;
    diagonals = ~~base;
    Height1 = ~~height1;
    Height2 = ~~height2;
    Height3 = ~~height3;
    Base1 = ~~base1;
    Radius1 = ~~radius1;
    Diagonal1 = ~~diagonal1;
    Diagonal2 = ~~diagonal2;
    Area = ~~area;
    Radius3 = ~~radius3;
    Height4 = ~~height4;
    Radius4 = ~~radius4;
    Height5 = ~~height5;
    Radius5 = ~~radius5;
}




function add(){
    updateValues();

    result = number1 + number2;
    resultElement.innerHTML = result;
}

function subtract(){
    updateValues();

    result = number1 - number2;
    resultElement.innerHTML = result;
}   


function calculate(){
    updateValues();

   perimeter = AB + BC + CD + DA ;
   perimeterElement.innerHTML= perimeter;
}


  function circle(){
      updateValues();

     pi = 2 * Math.PI * r;
     piElement.innerHTML = pi;

  }
  console.log(Math.PI);
  
  
  function ptriangle(){
      updateValues();
      triangle = sideA + sideB + sideC;
      triangleElement.innerHTML= triangle;
  }

  function arQUAD(){
      updateValues();
      aQuad = Height1 + Height2 * diagonals *1/2;
      areaQuad.innerHTML = aQuad ;
  }
  

  function arTriangle(){
      updateValues();
      aTriangle = Height3 * Base1 /2;
      areaTriangle.innerHTML = aTriangle;
  }

   function arCircle(){
      updateValues();
      aCircle = Radius1 * Radius1 *Math.PI;
      areaCircle.innerHTML = aCircle;
  }
  console.log(Math.PI);

  function arRhombus(){
      updateValues();
      aRhombus = (Diagonal1 * Diagonal2)/2;
      areaRhombus.innerHTML = aRhombus;
  }
  
  function voCube(){
      updateValues();
      vCube = (Area)*(Area)*(Area);
      volCube.innerHTML = vCube; 
  }

  function voCone(){
      updateValues();
      vCone = Math.PI *(Radius3)*(Radius3)*(Height4)/3;
      volCone.innerHTML = vCone;
  }

   function voCylinder(){
       updateValues();
       vCylinder = (Radius4)*(Radius4)*(Height5)* Math.PI ;
       volCylinder.innerHTML = vCylinder;
   }
   console.log(Math.PI);

   function voSphere(){
       updateValues();
       vSphere =4/3 * Math.PI * (Radius5) * (Radius5) * (Radius5);
       volSphere.innerHTML = vSphere ;
   }
