function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "5px";
  
  var text;
  if(name.length < 5){
    text = "Please enter valid name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please enter subject with at least 10 chars";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please enter valid phone number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter valid email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 50){
    text = "Enter more than 50 chars to send message";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}