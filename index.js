
//this is a function 



// function transferInput() {
//   // taking the bill input and the numberOfPeople input
//   const bill = document.getElementById("input-bill");
//   const N= document.getElementById("number-of-people");

//   const h31 = document.getElementById("h31");
//   const h32=document.getElementById("h32");
//   // Check if the input fields are empty
//   if (bill.value.trim() === '' || N.value.trim() === '') {
//     // If either of the input fields is empty, stop execution
//     return;
//   }
//   // putting it in here 
//   h31.innerText=bill.value;
//   h32.innerText = N.value;
// }

const buttons = document.querySelectorAll(".perc");
const inputPercentage = document.querySelector(".custom-perc");
const h31 = document.getElementById("h31");
const h32=document.getElementById("h32");
const submit = document.querySelector(".submit");

const bill = document.getElementById("input-bill");
const N= document.getElementById("number-of-people");

let clickedButton;
buttons.forEach(button  => {
  button.addEventListener("click" , (event)=> {
    clickedButton = event.target;
    
  }) 
  
});
// Wait for a button to be clicked before using the 'clickedButton' variable
function handleClickedButton() {
  if (clickedButton) {
      console.log(clickedButton.textContent); // Example usage: log the text content of the clicked button
  } else {
      console.log('No button has been clicked yet.');
  }
}

// Call the function to handle the clicked button
handleClickedButton();


submit.addEventListener('click', () => {
  const totalBillAmount = bill.value;
  const numberOfPeople = N.value;



  console.log('Input 1:', input1);
  console.log('Input 2:', input2);
});
