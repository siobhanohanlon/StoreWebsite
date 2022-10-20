//Checkout Javascript (SOH)

//Create a random Order number
let orderNum= Math.floor((Math.random() * 1000) + 1000);

//Function to confirm order
function buyNow()
{
	//Alerts user of order completed and order number
	alert("Order Completed\nOrder Number: "+orderNum);
	orderNum++;
}