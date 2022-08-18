document.getElementById('withdraw-btn').addEventListener('click',function(){

    const newWithAmount= getInputValueById('withdraw');
    if(isNaN(newWithAmount)){
        alert("Please Enter Numbers as amount");
        return;
    }
    else{
    const preWithdrawTotal=getElementValueById('with-board');
   

    const currentTotalWithdraw= newWithAmount+preWithdrawTotal ;

    console.log(preWithdrawTotal);
    setTextElementValueById('with-board',currentTotalWithdraw);
    // -----------------Withdraw  board done--------------

   // -----------------Withdraw  Conditions start--------------
    const prevTotalBalance=getElementValueById('total-balance');
    if(prevTotalBalance<0 || newWithAmount>prevTotalBalance){
        alert("sorry! You dont have enough money to withdraw, in your account");
      const  conditionTotalWithdraw= preWithdrawTotal ;
    setTextElementValueById('with-board',conditionTotalWithdraw);
    return;
        
    }
    else{
    const currentTotalBalanceAmount=prevTotalBalance-newWithAmount;
    setTextElementValueById('total-balance',currentTotalBalanceAmount);
     // -----------------Balance board done--------------
    }
    }

})