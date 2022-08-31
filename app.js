var billAmount = document.querySelector("#bill-amount");
var CashGiven = document.querySelector("#cash-given");
const submitButton = document.querySelector("#submit");
var message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

submitButton.addEventListener("click",cashRegisterHandler());


    function cashRegisterHandler()
    {
        hideMessage();
        if (billAmount.value>0){

            if (CashGiven.value>=billAmount.value){
                var cashToReturn = CashGiven.value  -  billAmount.value;
                ChangeHandler(cashToReturn);

            }
            else{
                errorMessage("Wanna wash the plates ????");
            }
        }
        else{
            errorMessage("Invalid Bill Amount");
        }
    }


function ChangeHandler(cashToReturn){
    for (i=0;i<=availableNotes.length-1;i++){
        var notesCount = math.trunc(cashToReturn/availableNotes[i]);

        cashToReturn = cashToReturn % availableNotes[i];

        noOfNotes[i].innerText=notesCount;

    }
}

function hideMessage() {
    message.style.display = "none";
  }

function errorMessage(msg){
    message.style.display ="block";
    message.innerText=msg;

}