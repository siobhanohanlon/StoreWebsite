//Login Page JavaScript(SOH)
//Any Code without a website link above it was learned in class

//Default User Details
//Create arrays for customer Info
	let appuser =["user1"];
	let apppwd = ["pw1"];
	let appemail = ["email@gmail.com"];
	//This saves the array as an array not as multiple info, this is needed for checking login details on login page
	//https://stackoverflow.com/questions/51123210/storing-array-content-in-session-storage
	//Learned how to save storage as array from site above, is also used for other 2 arrays
	sessionStorage.setItem("User", JSON.stringify(appuser));
	sessionStorage.setItem("Pass", JSON.stringify(apppwd));
	sessionStorage.setItem("Email", JSON.stringify(appemail));
	
//---------------------------------------------------------------------------------------------

//Function to check login details
function login()
{
	//Valid is set as 0 as if user details are not in saved array they cant log in
	let valid=0;
	
	//saving entered username and password from login page to check if they are on arrays
	let username = document.getElementById("uname").value;
	let pwd = document.getElementById("pwd").value;
	
	//Saving arrays with saved user details to check if eneterd details are on them
	//https://stackoverflow.com/questions/51123210/storing-array-content-in-session-storage
	//Learned how to call array stored from this website
	let users = JSON.parse(sessionStorage.getItem("User"));
	let pass = JSON.parse(sessionStorage.getItem("Pass"));
	
	//creating variable index to check if enetered username is in saved array and which number
	let index= users.indexOf(username);
	
	//if username is on array
	if(index >=0)
	{
		//Checking if password is in password array at the corresponding number
		if(pass[index] == pwd)
		{
			//valid user
			valid=1;
		}
	}

	//Login Alerts
	//If User is a registered user
	if(valid == 1)
	{
		//Alert of login in successful
		alert("Log in Successful");
		
		//Taken to shop page
		return true;
	}
	
	else
	{
		//Alert of login details incorrrect
		alert("Invalid Login - Please Try Again!");
		
		//Doesnt take to store page
		return false;
	}
}