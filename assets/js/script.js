document.addEventListener("scroll",function(){
  let header = document.getElementById("header")
  let bottone = document.getElementById("bottone")
  let scroll = window.scrollY;

  if(scroll> 290){
    header.style.backgroundColor = "white";
    bottone.style.backgroundColor = "green";
  }else{
    header.style.backgroundColor = "#ffc017";
    bottone.style.backgroundColor = "black";
  }
})

muroDiM();



function muroDiM(){
  let padre= document.getElementById("artwork")
  let Ms = Array.from(padre.getElementsByTagName("g"))
  let MsDone = []

  setInterval(function(){
    let randomNumber= Math.floor(Math.random()*Ms.length)

    deselect(MsDone)

    if(MsDone.includes(randomNumber)){
      return
    }else{
      Ms[randomNumber].opacity = 0;
      MsDone.push(randomNumber)
    }

  },1000)
}

function deselect(array){
  array.forEach(element => {
    element.opacity = 1;
  });
}