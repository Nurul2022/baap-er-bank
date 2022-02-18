/*
function doubleIt(num){
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);*/

// banking.js final code edited by me with video (27-5 to 27-9) but not exist ph1 repo. 

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputtAmountText = inputField.value;
    const amountValue = parseFloat(inputtAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount2, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount2;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount2;
    }

}
// handle deposit event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
});
// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input')
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false);
})