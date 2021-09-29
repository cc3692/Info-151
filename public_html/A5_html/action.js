
function dataValidation(){
    var count=0
    var pattern = /\w+ \w+/;
    var name = document.survey.name.value;
    if(pattern.test(name)){
        document.getElementById("nameError").innerHTML= "Good!";
    }else{
        document.getElementById("nameError").innerHTML= "Enter First and Last Name!";
            return false;
    }
    var pattern = /[a-z]+@[a-z]+.[a-z]+/i;
    var email = document.survey.email.value;
    if (pattern.test(email)){
        document.getElementById("emailError").innerHTML= "Good!";
    }else{
        document.getElementById("emailError").innerHTML= "Invalid Email!";
            return false;
    }
    var col = document.survey.college.value;
    if(college == "11"){
        alert("Choose College!")
        return false;
    }else{
      count++;
    }
    var s1 = document.survey.korma.checked;
    var s2 = document.survey.rossc.checked;
    var s3 = document.survey.gerri.checked;
    var s4 = document.survey.hager.checked;
    var s5 = document.survey.pearl.checked;
    var s6 = document.survey.colab.checked;
    if(s1 != true && s2 != true && s3 != true && s4 != true && s5 != true && s6 != true)
    {
        alert("Choose Favorite Spot");
        return false;
        }else{
            count++;
        }
        if(count == "6")
        {
          document.survey.submit();   
        }
}