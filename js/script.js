//login button event handler

document.getElementById('login-btn').addEventListener('click' , function () {
    let welcomeSec = document.getElementById('wlcm-sec').style.display = 'none';
    document.getElementById('bank-page').style.display = 'block' ;
});

//deposit handler

document.getElementById('deposit-btn').addEventListener('click' , function () {
   const depositNumber = inputNumber ('depositAmount');

   updateSpanNumber('currentDeposit' , depositNumber) ;
   updateSpanNumber('balanceAmount' , depositNumber) ;

   document.getElementById('depositAmount').value = '';

});

//withdraw event handler

document.getElementById('withdraw-btn').addEventListener('click' , function () {
     const currentWithdrawNumber = inputNumber('withdrawAmount');

     updateSpanNumber('currentWithdraw' , currentWithdrawNumber) ;
    updateSpanNumber('balanceAmount' , -1 * currentWithdrawNumber )

     document.getElementById('withdrawAmount').value = '' ; 


    });

function inputNumber(id) {
    const string = document.getElementById(id).value;
    const stringToNumber = parseFloat (string);
    return stringToNumber ;
}

function updateSpanNumber(id , depositNumber) {
    const amount = document.getElementById(id).innerText ;
    const amountNumber = parseFloat (amount) ;

    const total = amountNumber + depositNumber ;

    document.getElementById(id).innerText = total ;
}