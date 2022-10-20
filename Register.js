//Register Customers JavaScript (SOH)
//Any Code without a website link above it was learned in class

//Create arrays for customer Info
let appuser =["user1"];
let apppwd = ["pw1"];
let appemail = ["email@gmail.com"];

//Register fuction to save info and check it
function register()
{
	//Create variables for password entered and confirm password entered by using id
	let pass = document.getElementById("pwd").value;
    let confPass = document.getElementById("txtConfirmPwd").value;

	//If password and confirm password dont match, create an alert
    if (pass != confPass) 
	{
		alert("Passwords do not match!");
		return false;
	}
	
	//if confirm password is not left empty and Passwords match, save entered elements
	//Making sure confirm password isnt empty as if both empty they would match
	if(confPass != "")
	{
		if(pass == confPass)
		{
			//save entered username and push it into username array
			let userN = document.getElementById("uname").value;
			appuser.push(userN);
			
			//save entered password and push it into password array
			let pwd = document.getElementById("pwd").value;
			apppwd.push(pwd);
			
			//save email username and push it into email array
			let email = document.getElementById("email").value;
			appemail.push(email);
			
			//This saves the array as an array not as multiple info, this is needed for checking login details on login page
			//https://stackoverflow.com/questions/51123210/storing-array-content-in-session-storage
			//Learned how to save storage as array from site above, is also used for other 2 arrays
			sessionStorage.setItem("User", JSON.stringify(appuser));
			sessionStorage.setItem("Pass", JSON.stringify(apppwd));
			sessionStorage.setItem("Email", JSON.stringify(appemail));

			//Register successful alert and taken to login in page
			alert("You are now registered! Taking you to login in page");
			return true;
		}
		else 
		{
			return false;
		}
	}
}