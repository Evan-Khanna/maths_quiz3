function send1(){
number_1=document.getElementById("numer_1").value ;
number_2=document.getElementById("numer_2").value ;
answer=parseInt(number_1)*parseInt(number_2);
question_word="<h3>"+number_1+"X"+number_2+"</h3>";
input="<br>answer:<input type='number' id='answer'>";
button="<br><br><button id='check_btn' class='btn btn-danger'>Check</button>";
document.getElementById("output").innerHTML=question_word+input+button;
document.getElementById("numer_1").value="";
document.getElementById("numer_2").value="";
}

