let boxes = document.querySelectorAll(".box");
let resetBtn =  document.querySelector("#reset-btn");
let nwGameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turn0 = true;   // 0 or x

const  winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
    // msg.textContent = "";
    // msgContainer.classList.remove("show");
}

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        cheackWinner();
        });

    });

    const disableBoxes = () =>{
        for( let box of boxes){
            box.disabled = true;
            
        }
    }


     const enableBoxes = () =>{
        for( let box of boxes){
            box.disabled = false;
            box.innerText = "";
            
        }
    }
     
    const showWinner=(Winner) =>{
        msgContainer.classList.remove("hide");

        msg.innerText= `congratulation, Winner is ${Winner}`;
        disableBoxes();
    } 


      const cheackWinner = () =>{
        for (const patterns of winPatterns) {
            // console.log(patterns[0],patterns[1],patterns[2]);
            // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
            let firstval = boxes[patterns[0]].innerText;
            let secondval = boxes[patterns[1]].innerText;
            let thirdval = boxes[patterns[2]].innerText;

            if(firstval !="" && secondval !="" && thirdval!=""){
                if(firstval === secondval && secondval === thirdval){
                    // alert(`Player ${firstval} wins`);
                    // resetGame();
                    // return;
                    console.log("Winners", firstval );
                    showWinner(firstval);
                }
            }
            
        }
      }

      nwGameBtn.addEventListener("click",resetGame);
      resetBtn.addEventListener("click",resetGame);






