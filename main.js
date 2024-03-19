const myName=document.getElementById('name');
const groupButton=document.getElementById('group');
const alertBox = document.getElementById('alertBox');
const addButton = document.getElementById('text-button');
const okGet=document.getElementById('ok__get');
const Alertbox=document.querySelector('.alert-box')

groupButton.addEventListener('click',function(){
    if(myName.value.trim()===""){
        alertBox.style.display='block';
    
    }
    else{
        window.location.href="gift.html"; 
    }
});

okGet.addEventListener('click',function(){
  if(myName.value.trim()===""){
      alertBox.style.display='block';
      console.log("Not Changed")
      window.location.href="index.html"
  
  }
  else{
      window.location.href="page1.html"; 
      console.log("Changed")
  }
});

myName.addEventListener('input',function(){
    if(myName.value.trim()!==""){
        alertBox.style.display='none';
    }
})

addButton.addEventListener('click', function() {

    const newNameContainers = document.getElementsByClassName('multiple__name');
    for (let j = 0; j < newNameContainers.length; j++) {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Enter New Name");
        newNameContainers[j].appendChild(input);
    }
    
    console.log("success");
});

  function toggleButtonDisplay() {
    const radio1 = document.getElementById("radio1");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
  
    if (radio1.checked) {
      button1.style.display = "inline-block";
      button2.style.display = "none";
      console.log("button1")
    } else {
      button1.style.display = "none";
      button2.style.display = "inline-block";
      console.log("button2")
    }
  }

  function drawDate(){
    const opt2=document.getElementById('opt2');
    const opt1=document.getElementById('opt1');
    const draw=document.querySelector(".draw__date");

    if(opt2.checked){
      draw.style.display="inline-block";
      console.log("opt2");
    }else if(opt1.checked){
      draw.style.display="none";
      console.log("opt1")
    }
  }


// 


// const giftButton=document.getElementById('submitButton');
// const elfesterName=document.getElementById('name');
// const alertName=document.getElementById('alertBoxName');

// giftButton.addEventListener('click',function(){
//   if(elfesterName.value.trim()===''){
//     alertName.style.display='block';
//   }
//     else{
//       window.location.href="image.html"; 
//     }
// })




  // //gift page
  // document.getElementById('submitButton').addEventListener('click', function() {
  //   validateForm();
  // });



  // function validateForm() {
  //   var nameInput = document.getElementById('name').value.trim();
  //   var dateInput = document.getElementById('myDate').value.trim();
  //   var emailInput = document.getElementById('email').value.trim();
  //   var platformInput = document.getElementById('names').value;
  
  //   var alertBoxName = document.getElementById('alertBoxName');
  //   var alertBoxDate = document.getElementById('alertBoxDate');
  //   var alertBoxEmail = document.getElementById('alertBoxEmail');
  //   var alertBoxPlatform = document.getElementById('alertBoxPlatform');
  
  //   alertBoxName.style.display = 'none';
  //   alertBoxDate.style.display = 'none';
  //   alertBoxEmail.style.display = 'none';
  //   alertBoxPlatform.style.display = 'none';
  
  //   if (nameInput === '') {
  //     alertBoxName.style.display = 'block';
  //     return; // Stop further execution
  //   }
  
  //   if (dateInput === '') {
  //     alertBoxDate.style.display = 'block';
  //     return; // Stop further execution
  //   }
  
  //   if (emailInput === '') {
  //     alertBoxEmail.style.display = 'block';
  //     return; // Stop further execution
  //   }
  
  //   if (platformInput === '') {
  //     alertBoxPlatform.style.display = 'block';
  //     return; // Stop further execution
  //   }
  
  //   // If all fields are filled, proceed to the next page
  //   window.location.href = "image.html";
  // }




 




