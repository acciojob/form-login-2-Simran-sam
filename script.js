//your JS code here. If required.
let bttn= document.getElementByTagName('button');

bttn.addEventListener("submit",(event)=>{
	event.preventDefault();
	let firstname = document.getElementById("first").value;
	let lastname = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let Number = document.getElementById("Number").value;
	let alertmsg= `First Name: ${firstname} Last Name: ${lastname} Phone Number:${Number} Email ID:${email}`
	alert(alertmsg);
	
})
