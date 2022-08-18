


document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepoAmount= getInputValueById('deposite');
    if(isNaN(newDepoAmount)){
        alert("Please Enter Numbers as amount");
    }
    else{

    
    const preDepositTotal=getElementValueById('dep-tot');
    console.log(preDepositTotal);

    const currentTotalDepo= newDepoAmount+preDepositTotal ;
    setTextElementValueById('dep-tot',currentTotalDepo);
    // -----------------Deposit board done--------------
    const prevTotalBalance=getElementValueById('total-balance');
    const currentTotalBalanceAmount=newDepoAmount+prevTotalBalance;
    setTextElementValueById('total-balance',currentTotalBalanceAmount);
     // -----------------Balance board done--------------
    }
})


