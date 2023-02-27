const generationnumber = document.getElementById("generation-input");
const numbervalue = document.getElementById("numbervalue");
const playbutton = document.getElementById("playbutton");
const description= document.getElementById("description");
const result= document.getElementById("result");

function drawNumber(event) { 
  event.preventDefault();
  const range = generationnumber.value;
  const user_choice=numbervalue.value;
  const pc_choice = Math.ceil(Math.random()*range);

    description.innerText=`You chose: ${user_choice}, the machine chose: ${pc_choice}`;

  if(user_choice == pc_choice){
    result.innerText=`You won!`;
  }else{    
    result.innerText=`You lost!`;
  }
}


playbutton.addEventListener("click", drawNumber);


