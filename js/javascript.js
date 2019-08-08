function login() {


var user=document.getElementById('name').value;
var pass=document.getElementById('password').value;
var mob=document.getElementById('mobile').value;
var em=document.getElementById('email').value;



	if (user.length>5 && user.length<20) {


if (pass.length>=6) {


	if (mob.length==11) {







if (em.endsWith("@gmail.com")||em.endsWith("@hotmail.com")||em.endsWith("@yahoo.com")) {





			document.getElementById('n1').innerHTML="User Name:"+user;
			document.getElementById('p1').innerHTML="Password:"+pass;
			document.getElementById('m1').innerHTML="Mobile Number:"+mob;
   			 document.getElementById('e1').innerHTML="Email:"+em;
			
		  
	



} else {
	document.getElementById('e').innerHTML="**Invalid Email Address**";
}






















			
	}
	else
	{
		document.getElementById('m').innerHTML="**Invalid Mobile Number**";
	}



	}
	else
	{
		document.getElementById('p').innerHTML="**plese submit Minimum 6 Number**";

	}


	
	}
	else
	{
		document.getElementById('n').innerHTML="**plese submit Minimum 5 or Maximun 20 character**";
		
		

	}




 
	
	
}
