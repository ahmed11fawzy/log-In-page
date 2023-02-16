let userName=document.querySelector('#inpName'),
   userMail=document.querySelector('#inpEmail'),
   userPassword=document.querySelector('#inpPass'),
   logInBtn=document.querySelector('#signBtn');
   welcomeHeader=document.querySelector('#page2Header')
let user={},
    usersContainer=[];
    
/* get saved data */
(function() {
   if(localStorage.getItem('logInUsers')==null){
      usersContainer=[];
   }
   else{
      usersContainer=JSON.parse(localStorage.getItem('logInUsers')) ;
      console.log(usersContainer);
     

   }
   
})()



function addUserData(){
  
      user={
         name:userName.value,
         mail:userMail.value,
         pass:userPassword.value,
      }
      
      
   usersContainer.push(user);
       
   localStorage.setItem('logInUsers',JSON.stringify(usersContainer))
   
   logInBtn.setAttribute('href','./test.html')
   emptyFields()
   console.log(user);
   console.log(usersContainer);
}
logInBtn.addEventListener('click',function(e){
   if(e.target.innerText=='Sign Up'){
      validData()
   }
   else if(e.target.innerText=='Sign In'){

      for(let i=0; i<usersContainer.length;i++){
         if(usersContainer[i].mail.includes(userMail.value)){
               
               console.log('gmail is find')
               if(userMail.value==usersContainer[i].mail && userPassword.value==usersContainer[i].pass){
                  alert('hi'+usersContainer[i].name);
                  
                  
               }
               else{
                  alert('Wrong mail or  password  ')
               }
            }
            
            
              
         }
      
      
   }
   
})


function emptyFields(){
   userName.value=null;
   userName.classList.remove('is-valid')
   userMail.value=null;
   userMail.classList.remove('is-valid')
   userPassword.value=null;
   userPassword.classList.remove('is-valid')
}

/* =====================Validation=============================== */

const nameRegex= new RegExp(/^[A-Z][a-z]{3,}[0-9]{3,8}$/gm,)
      ,mailRegex=new RegExp(/^[A-Za-z]{2,25}[0-9]{2,9}(@gmail.com)$/)
      ,passRegex=new RegExp(/^[A-Za-z|0-9]{8,20}$/);

         /* name validation */

function nameCheck(){
   if(nameRegex.test(userName.value)){
      userName.classList.add('is-valid')
      userName.classList.remove('is-invalid')
      return true;
   }
   else{
      userName.classList.add('is-invalid')
      userName.classList.remove('is-valid')
      return false;
   }
}
userName.addEventListener('blur',function(){
   nameCheck();
})
         /* email validation */

function mailCheck(){
   if(mailRegex.test(userMail.value)){
      
      userMail.classList.add('is-valid');
      userMail.classList.remove('is-invalid')
      return true;
   }
   else{
      
      userMail.classList.add('is-invalid')
      userMail.classList.remove('is-valid')
      return false
   }
}
userMail.addEventListener('blur',function(){
   mailCheck();
})

         /* password check */

function passwordCheck(){
   if(passRegex.test(userPassword.value)){
      userPassword.classList.add('is-valid');
      userPassword.classList.remove('is-invalid')
      return true
   }
   else{
      userPassword.classList.add('is-invalid');
      userPassword.classList.remove('is-valid');
      return false;
   }
}
userPassword.addEventListener('blur',function(){
   passwordCheck();
})

         /* adding data  */
function validData(){
   if( mailCheck() && passwordCheck()){
      addUserData()
   }
   else{
      alert('enter a valid data ')
   }
}

/* ================================================= */

         /* show  Sign Up form */
document.addEventListener('click',function(e){
   let elem=e.target
   if(elem.innerText=="Sign Up"){
      swapItemToRight()
   }
   else if(elem.innerText=='Sign In'){
      swapItemToLeft()
   }

})

/* ======================================================== */
            // ---------- swap------------------

let fullNameContainer=document.querySelector('#fullName');

function swapItemToRight(){
   document.querySelector('#formGroup').style.left='50%';
   document.querySelector('#imgContainer').style.left='0';
   fullNameContainer.removeAttribute('class','d-none');
   fullNameContainer.setAttribute('class','mb-4')
   editText()
}

function  swapItemToLeft(){
   document.querySelector('#formGroup').style.left='0%';
   document.querySelector('#imgContainer').style.left='50%';
   resitText();
}
// edit text 

function editText(){
   document.querySelector('h3').innerText='Get Started '
   document.querySelector('#descriptionText').innerHTML=`Do you already have  an account ? <span onclick="swapItemToLeft()" id="signIn" class="fw-bolder text-black ">Sign in</span> `
   document.querySelector('.btn').innerText='Sign Up'
}

function resitText(){
   document.querySelector('h3').innerText='Welcome Back '
   document.querySelector('#descriptionText').innerHTML=` Not register yet ? <span id="signUp" onclick='swapItemToRight()' class="fw-bolder text-black ">Sign Up</span>`
   fullNameContainer.classList.add('d-none')
   document.querySelector('.btn').innerText='Sign In'
}

/* ================================= */
         // label animation


let inputs=document.querySelectorAll('input'),
   placeHolderTitle=document.querySelectorAll('label');


for(let i=0 ;i<inputs.length;i++){
   inputs[i].addEventListener('click',function(){
   placeHolderTitle[i].style.transform='translateY(-20px)';
   placeHolderTitle[i].style.fontSize='smaller';
   placeHolderTitle[i].style.fontWeight='700'
   inputs[i].style.borderBottom='2px solid rgba(0,0,0,1)'
})
inputs[i].addEventListener('blur',function(){

   if(inputs[i].value ==''){
      placeHolderTitle[i].style.transform='translateY(0px)';
      placeHolderTitle[i].style.fontSize='medium'
      placeHolderTitle[i].style.fontWeight='100'
      inputs[i].style.borderBottom='1px solid #8d8c8c83'
   }
   else{
      placeHolderTitle[i].style.transform='translateY(-20px)';
      placeHolderTitle[i].style.fontSize='smaller'
   }
   
})
}
/* 
fawzi
fwzi117@gmail.com
*/
