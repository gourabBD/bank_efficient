document.getElementById("login-btn").addEventListener('click',function(){
    
    const user_email= document.getElementById("email");
    const email= user_email.value
   
    // email er value newa sesh

    const user_password= document.getElementById("password");
    const password= user_password.value
    console.log(email,password);
    // password er value newa sesh

if( email==="rgourab02@gmail.com" && password==="1234"){
   window.location.href="bank.html"
}
else alert("Invalid User");
})