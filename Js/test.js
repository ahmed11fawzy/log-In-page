let getUserData=JSON.parse(localStorage.getItem('logInUsers'))
console.log(getUserData);
let headerName=document.querySelector('#page2Header'),
   length=getUserData.length;

headerName.innerText=`Welcome, ${getUserData[length-1].name}`