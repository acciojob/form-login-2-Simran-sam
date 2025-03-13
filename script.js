//your JS code here. If required.
let frm= document.getElementById('frm');

frm.addEventListener("submit",(event)=>{
	event.preventDefault();
	let firstname = document.getElementById("First Name").value;
	let lastname = document.getElementById("Last Name").value;
    let email = document.getElementById("Email ID").value;
    let number = document.getElementById("Phone Number").value;
	let alertmsg= `First Name: ${firstname} Last Name: ${lastname} Phone Number:${number} Email ID:${email}`
	alert(alertmsg);
	
})
