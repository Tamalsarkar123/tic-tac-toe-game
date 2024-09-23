let boxes=document.querySelectorAll(".box");
let btnRest=document.querySelector(".restart");
let msgContainner=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newBtn=document.querySelector(".newgame");

let trun0=true;//player0 and palayer1

let winner=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const reSet=()=>{
 trun0=true;
 btnEnable();
 msgContainner.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(trun0) //player 0
      {
        box.innerText="O";
        trun0=false;
        
        
      }
      else{   //player x
        box.innerText="X";
        trun0=true;
      }
      box.disabled=true; 
      getWinner();
    })
    
    
  });


const btnDisable=()=>{
  for (const box of boxes) {
    
    box.disabled=true;
  }
}
const btnEnable=()=>{
  for (const box of boxes) {
    
    box.disabled=false;
    box.innerText="";
  }
}


  
const showWinner=(winner)=>{

  msg.innerText=`Congratulation,Winner is player ${winner}`;
  btnDisable();
  msgContainner.classList.remove("hide");
}
  
const  showDraw=()=>{

  msg.innerText=`Draw Game`;
  btnDisable();
  msgContainner.classList.remove("hide");
}



  
const getWinner = () => {
  let isDraw = true; // Assume it's a draw initially
  
  for (const win of winner) {
    let petVal1 = boxes[win[0]].innerText;
    let petVal2 = boxes[win[1]].innerText;
    let petVal3 = boxes[win[2]].innerText;

    if (petVal1 !== "" && petVal2 !== "" && petVal3 !== "") {
      if (petVal1 === petVal2 && petVal2 === petVal3) {
        showWinner(petVal1);
        return; // Exit if we find a winner
      }
    }
  }
  
  // Check if all boxes are filled
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false; // If there's an empty box, it's not a draw
    }
  });

  if (isDraw) {
    showDraw(); // If no winner and all boxes are filled, it's a draw
  }
};

  btnRest.addEventListener("click",reSet);
  newBtn.addEventListener("click",reSet);