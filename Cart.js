//Cart Javascript(SOH)

//Product 1
//Set cost 1 as 0 as if no qty in cart will display 0 not null
let cost1 =0;

//Set IDs on cart page to those saved in session storage
document.getElementById("product1").textContent = sessionStorage.getItem("product1");
document.getElementById("qty1").textContent = sessionStorage.getItem("qty1");

//Set cost variable to price multipled by qty
cost1 = (sessionStorage.getItem("price1")*sessionStorage.getItem("qty1"));
//set ID on cart page to cost variable
document.getElementById("cost1").textContent = cost1;

//------------------------------------------------
//Product 2
//Set cost 1 as 0 as if no qty in cart will display 0 not null
let cost2 =0;

//Set IDs on cart page to those saved in session storage
document.getElementById("product2").textContent = sessionStorage.getItem("product2");
document.getElementById("qty2").textContent = sessionStorage.getItem("qty2");

//Set cost variable to price multipled by qty	
cost2 = (sessionStorage.getItem("price2")*sessionStorage.getItem("qty2"));
//set ID on cart page to cost variable
document.getElementById("cost2").textContent = cost2;

//------------------------------------------------
//Product 3
//Set cost 1 as 0 as if no qty in cart will display 0 not null
let cost3 =0;

//Set IDs on cart page to those saved in session storage
document.getElementById("product3").textContent = sessionStorage.getItem("product3");
document.getElementById("qty3").textContent = sessionStorage.getItem("qty3");
	
//Set cost variable to price multipled by qty	
cost3= (sessionStorage.getItem("price3")*sessionStorage.getItem("qty3"));
//set ID on cart page to cost variable
document.getElementById("cost3").textContent = cost3;



//------------------------------------------------------------------------------------------------------------
//Coupon 

//Set variable with todays date
let now = new Date().getTime();

//Set the date coupons expire
let couponDate = new Date("June 20, 2021 00:00:00");

//Create arrays for Coupon codes
let couponCodes =["CVX123", "ABC456", "HYG879"];

//This saves the array as an array not as multiple info, this is needed for checking login details on login page
//https://stackoverflow.com/questions/51123210/storing-array-content-in-session-storage
//Learned how to save storage as array from site above, is also used for other 2 arrays
sessionStorage.setItem("Coupon", JSON.stringify(couponCodes));

//event listener so when apply is clicked it runs the discount function
document.getElementById("apply").addEventListener("click",discount);

//discount function for coupons
function discount()
{
	//if it is before the coupons expiry date coupon will be run to check if valid
	if(now<couponDate)
	{
		//Valid is set as 0 to check if coupon is on array
		let valid=0;
		
		//Saving entered coupon code under variable to be able to compare to array
		let codeEntered = document.getElementById("coupon").value;
		
		//creating variable index to check if enetered coupon is in saved array
		let index= couponCodes.indexOf(codeEntered);
		
		//if Coupon is on array
		if(index >=0)
		{
			//Valid coupon
			valid=1;
		}

		//Alert
		//If Coupon is valid perform discount to total
		if(valid == 1)
		{
			//Set Discounted total to id for total on cart page and to session storage
			document.getElementById("total").textContent = ((cost1 + cost2 + cost3)/100*80);
			sessionStorage.setItem("total", ((cost1 + cost2 + cost3)/100*80));
			
			//Alert if Coupon accepted
			alert("Coupon Applied");
		}
		
		else
		{
			//If coupon not accepted set total as costs added together
			document.getElementById("total").textContent = (cost1 + cost2+ cost3);
			sessionStorage.setItem("total", cost1 + cost2+ cost3);
			
			//Alert if Coupon not accepted
			alert("Coupon not Valid");
		}
	}
	
	//if it is after coupon expiry
	else if(couponDate<now)
	{
		//Alert that coupon has expired
		alert("Sorry Coupons Only Valid till:\n"+couponDate);
	}
}

//--------------------------------------------------------------------------------------------
//sets total value for when no coupon attempted
let total= (cost1 +cost2 +cost3);
sessionStorage.setItem("total", total);
document.getElementById("total").innerHTML = sessionStorage.getItem("total");

//--------------------------------------------------------------------------------------------
//Removing Items
//Product 1
//When remove button is clicked it runs remove1 funtion
document.getElementById("remove1").addEventListener("click",remove1);


//Function to reduce qty by 1
function remove1()
{
	//Create qty1 variable and set it to what is stored in session storgae
	let qty1=sessionStorage.getItem("qty1");
	
	//if qty is larger than 0, this is so you wont have minus quantitys
	if(qty1>0)
	{
		//Save to storage as qty minus 1 using prefix
		sessionStorage.setItem("qty1", --qty1);
		//Save id to that updated session storage
		document.getElementById("qty1").textContent = sessionStorage.getItem("qty1");
		
		//Update cost variable for new qty
		cost1 = (sessionStorage.getItem("price1")*qty1);
		document.getElementById("cost1").textContent = cost1;
	}
	else
	{
		//Alert that qty is 0 and cant remove more
		alert("Cant Remove as None in Cart!");
	}
}

//Product 2
//When remove button is clicked it runs remove21 funtion
document.getElementById("remove2").addEventListener("click",remove2);

//Function to reduce qty by 1
function remove2()
{
	//Create qty1 variable and set it to what is stored in session storgae
	let qty2=sessionStorage.getItem("qty2");
	
	//if qty is larger than 0, this is so you wont have minus quantitys
	if(qty2>0)
	{
		//Save to storage as qty minus 1 using prefix
		sessionStorage.setItem("qty2", --qty2);
		//Save id to that updated session storage
		document.getElementById("qty2").textContent = sessionStorage.getItem("qty2");
		
		//Update cost variable for new qty
		cost2 = (sessionStorage.getItem("price2")*qty2);
		document.getElementById("cost2").textContent = cost2;
	}
	else
	{
		//Alert that qty is 0 and cant remove more
		alert("Cant Remove as None in Cart!");
	}
}

//Product 3
//When remove button is clicked it runs remove3 funtion
document.getElementById("remove3").addEventListener("click",remove3);

//Function to reduce qty by 1
function remove3()
{
	//Create qty1 variable and set it to what is stored in session storgae
	let qty3=sessionStorage.getItem("qty3");
	
	//if qty is larger than 0, this is so you wont have minus quantitys
	if(qty3>0)
	{
		//Save to storage as qty minus 1 using prefix
		sessionStorage.setItem("qty3", --qty3);
		//Save id to that updated session storage
		document.getElementById("qty3").textContent = sessionStorage.getItem("qty3");
		
		//Update cost variable for new qty
		cost3 = (sessionStorage.getItem("price3")*qty3);
		document.getElementById("cost3").textContent = cost3;
	}
	else
	{
		//Alert that qty is 0 and cant remove more
		alert("Cant Remove as None in Cart!");
	}
}