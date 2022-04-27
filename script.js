//get Input Function

function getInputs(inputId){ 
    const input = document.getElementById(inputId);
    const inputText = input.value; 
    const inputValue = parseFloat(inputText);
    if(isNaN(inputValue)){
        return 0;
    }else{
    return inputValue;
    }
}
//All Expenses Add
function totalExpens(){
    const foodInputValue =getInputs('food-input');
    const rentInputValue = getInputs('rent-input');
    const clothesInputValue =  getInputs('clothes-input');  
   const expensesTotal = foodInputValue + rentInputValue + clothesInputValue;
  return expensesTotal;
}
//calculate Persantage
function getPersantage(){
    const persantageInputeValue = getInputs('persentage-input');
    const incomeInputValue = getInputs('income-input');  
    const per = 10000/100*20;
    const  persatageTotal = incomeInputValue / 100 *persantageInputeValue;
    return persatageTotal;
}
// income - expenses  
function blacnce(incomeId){
    const incomeInputValue = getInputs(incomeId);
    const expensesTotal = totalExpens();
    const blacnceTotal = incomeInputValue - expensesTotal;
    return blacnceTotal; 
}

//Calculator Button click
document.getElementById('calculate-button').addEventListener('click',function (){

    const incomeInput =  getInputs('income-input');
    const foodInputValue =getInputs('food-input');
    const rentInputValue = getInputs('rent-input');
    const clothesInputValue =  getInputs('clothes-input');

     const expensesTotal = totalExpens();
     const setError = document.getElementById('set-error');
    // if(isNaN(incomeInput) || isNaN(foodInputValue) || isNaN(rentInputValue) || isNaN(clothesInputValue)){
    //     setError.innerText = 'Empty Value Not Allowed'
    // } else 
    if(incomeInput < 0 || foodInputValue < 0 || rentInputValue < 0 || clothesInputValue < 0  )
    {
        setError.innerText = 'Please Enter Positive Value ,, Negative  Value Are Not Allowed';
      
    }else if(incomeInput < expensesTotal){
        setError.innerText = 'You can not spend more than you earn';
      
    }else{
    
        const blacnceTotal = blacnce('income-input'); 
        //set total expenses an balance 
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = expensesTotal;

        const balance = document.getElementById('balance'); 
        balance.innerText = blacnceTotal; 
        setError.innerText = '';
    }

})


//Save Button click
document.getElementById('save-button').addEventListener('click', function(){
     
    
    // Set saving-amount and reamaining-balance 
    const persatageTotal = getPersantage();
    const incomeInputValue = getInputs('income-input');
    const balacnceTotal = blacnce('income-input');

    const setError = document.getElementById('set-error');
    if(persatageTotal > incomeInputValue ){
        setError.innerText = 'No more money can be saved than income.. Please Dont try...';
    }else if(persatageTotal > balacnceTotal){
        setError.innerText = 'How do you spend it if you do not have money???? So there is no benefit in trying';
    }else{
    const savingAmountInput = document.getElementById('saving-amount');
    savingAmountInput.innerText = persatageTotal;  
    const remainBlacnce = balacnceTotal - persatageTotal;  

    const reamainingBalanceInput = document.getElementById('reamaining-balance');
    reamainingBalanceInput.innerText = remainBlacnce;
    setError.innerText = '';

    }
})
