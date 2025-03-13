//your JS code here. If required.
let frm= document.getElementById('frm');

frm.addEventListener("submit",(event)=>{
	event.preventDefault();
	let firstname = document.getElementById("first").value;
	let lastname = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
	let alertmsg= `First Name: ${firstname} Last Name: ${lastname} Phone Number:${number} Email ID:${email}`
	alert(alertmsg);
	
})
