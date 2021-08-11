//quiz javascript
function submitAnswers(){
	var total=8;
	var score=0;
	
	
	//get user input
	var q1=document.forms["quizForm"]["q1"].value;
	var q2=document.forms["quizForm"]["q2"].value;
	var q3=document.forms["quizForm"]["q3"].value;
	var q4=document.forms["quizForm"]["q4"].value;
	var q5=document.forms["quizForm"]["q5"].value;
	var q6=document.forms["quizForm"]["q6"].value;
	var q7=document.forms["quizForm"]["q7"].value;
	var q8=document.forms["quizForm"]["q8"].value;
	
	//validation
	for(i=1;i<=total;i++){
		if(eval("q"+i)==null||eval("q"+i)=="")
		{
			alert("You missed question"+i);
		}
	}
	
	//set correct answers
	var answers=["c","a","b","c","b","a","c","a"];
	
	//check if answer is correct
	for(i=1;i<=total;i++){
		if(eval("q"+i)==answers[i-1]){
			score++;
		}
	}
    //display score 
      var results=document.getElementById("results");
	  results.innerHTML="<h1>You Scored <span>"+score+"</span> out of&nbsp<span>"+total+"</span></h1><br>"
	  
		
		return false;
}