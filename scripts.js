/* Add your JavaScript to this file */
window.onload=function(){
    var message=document.getElementsByClassName("message")[0];
    var subscribe=document.getElementsByTagName("button")[0];
    var email;
    subscribe.setAttribute("type","button");
    subscribe.onclick=function(){emailsubscribe()}
        
    function emailsubscribe(){
        email=document.getElementById("email").value;
        if(email==""){
            message.textContent="please enter a valid email address"
        }else{
            message.textContent="Thank you! Your email address "+email+" has been added to our mailing list! ";
        }
    }
}