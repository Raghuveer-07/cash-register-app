const billAmount = document.querySelector("#bill-amount");
const CashGiven = document.querySelector("#cash-given");
const submitButton = document.querySelector("#submit-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function hideMessage() {
    console.log("hiding message")
    message.style.display = "none";
  }

function errorMessage(msg){
    console.log("resetting")
    message.style.display ="block";
    message.innerText=msg;

}


function ChangeHandler(cashToReturn){
    console.log("note count is in process")
    for (let i=0 ; i < availableNotes.length ; i++){
        var notesCount = Math.trunc(cashToReturn/availableNotes[i]);

        cashToReturn = cashToReturn % availableNotes[i];

        noOfNotes[i].innerText=notesCount;

    console.log("note count done")

    }
}

function cashRegisterHandler()
    {
        console.log("clicked and function is processing")
        hideMessage();
        if (billAmount.value>0){

            if (Number(CashGiven.value)>=Number(billAmount.value)){
                console.log("all checks done")
                var cashToReturn = CashGiven.value  -  billAmount.value;
                ChangeHandler(cashToReturn);

            }
            else{
                console.log("cash given is less than bill")
                errorMessage("Wanna wash the plates ????");
            }
        }
        else{
            console.log("bill value is not correct")
            errorMessage("Invalid Bill Amount");
        }
    }


submitButton.addEventListener("click",cashRegisterHandler);


    




