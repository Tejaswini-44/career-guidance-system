function check()
{
	var c=0,c1=0,c2=0;
	var q1 = document.quiz.question1.value;
	var q2 = document.quiz.question2.value;
	var q3 = document.quiz.question3.value;
	var q4 = document.quiz.question4.value;
	var q5 = document.quiz.question5.value;
	var q6 = document.quiz.question6.value;
	var q7 = document.quiz.question7.value;
	var q8 = document.quiz.question8.value;
	var q9 = document.quiz.question9.value;
	var q10 = document.quiz.question10.value;
	var q11 = document.quiz.question11.value;
	var q12 = document.quiz.question12.value;
	var q13 = document.quiz.question13.value;
	var q14 = document.quiz.question14.value;
	var q15 = document.quiz.question15.value;
	var result = document.getElementById('result');
    if(q1=="Radio"){c++;}
    if(q2=="Moon"){c++;}
    if(q3=="Graduated cylinder"){c++;}
    if(q4=="Mycology"){c++;}
    if(q5=="Liver"){c++;}
    if(q6=="2^12"){c1++;}
    if(q7=="1750m^2"){c1++;}
    if(q8=="Parabola"){c1++;}
    if(q9=="10c2"){c1++;}
    if(q10=="4"){c1++;}
    if(q11=="1066"){c2++;}
    if(q12=="Canada"){c2++;}
    if(q13=="4"){c2++;}
    if(q14=="A boxer"){c2++;}
    if(q15=="Russia"){c2++;}
    var r = document.getElementById('res').innerHTML="Science " + c + "<br> Social :" + c2 + "<br> Maths : "+c1; 
    //document.write("Science  ", c);
    //document.write("Maths  " ,c1);
    //document.write("Social " ,c2);
    if(c>2 || c1>2 || c2>2)
    {
    if(c==5 && c1==5 && c2==5)
    {
    	document.getElementById('sug').innerHTML="<a href='subject.html'>ur choice</a>";
    }
    else if(c==4 && c1==4 && c2==4)
    {
    	document.getElementById('sug').innerHTML="<a href='subject.html'>ur choice</a>";
    }
    else if(c==3 && c1==3 && c2==3)
    {
    	document.getElementById('sug').innerHTML="<a href='subject.html'>ur choice</a>";
    }
    else if(c>c1 && c>c2)
    {
    	document.getElementById('sug').innerHTML="<a href='science.html'>science</a>";
    }
    else if(c1>c && c1>c2)
    {
    	document.getElementById('sug').innerHTML="<a href='maths.html'>Maths</a>";
    }
    else if(c2>c1 && c2>c)
    {
    	document.getElementById('sug').innerHTML="<a href='social.html'>Social</a>";
    }
    else if(c==c1 && c>c2)
    {
    	document.getElementById('sug').innerHTML="<a href='masc.html'>ur choice</a>";
    }
    else if(c==c2 && c>c1)
    {
    	document.getElementById('sug').innerHTML="<a href='mass.html'>ur choice</a>";
    }
    else if(c1==c2 && c1>c)
    {
    	document.getElementById('sug').innerHTML="<a href='scss.html'>ur choice</a>";
    }}
    else {
    	document.write("try again");
    	location.href = 'quiz.html';
    }

    

}