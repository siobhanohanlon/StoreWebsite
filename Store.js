//Store JavaScript (SOH)

//When the window loads it then listens for event handlers as without this it would run before DOM had properly set up and caused an error
window.onload=function()
{
  //EventListeners to run functions when clicked
  document.getElementById("b1").addEventListener("click", addProduct1);
  document.getElementById("b2").addEventListener("click", addProduct2);
  document.getElementById("b3").addEventListener("click", addProduct3);
  
  //Set Values for Product Names and Prices
  //Product 1
  sessionStorage.setItem("product1", "Boots1");
  sessionStorage.setItem("price1", 40.00);
  sessionStorage.setItem("qty1", 0);
  //Product 2
  sessionStorage.setItem("product2", "Boots2");
  sessionStorage.setItem("price2", 50.00);
  sessionStorage.setItem("qty2", 0);
  //Product 3
  sessionStorage.setItem("product3", "Boots3");
  sessionStorage.setItem("price3", 60.00);
  sessionStorage.setItem("qty3", 0);
}

//---------------------------------------------------------------------------------------------
//Product 1
//Sets qty1 to 0 as without b1 Clicked there should be none in the cart
let qty1=0;

function addProduct1()
{
	//Everytime b1 is clicked another is added to cart and qty variable is updated
	sessionStorage.setItem("qty1", (++qty1));
	//Alert to inform customer how many is in cart
	alert("Boots1 Order added to Cart\nQuantity in Cart: "+qty1);
}

//Product 2
//Sets qty1 to 0 as without b1 Clicked there should be none in the cart
let qty2=0;

function addProduct2()
{
	//Everytime b1 is clicked another is added to cart and qty variable is updated
	sessionStorage.setItem("qty2", (++qty2));
	//Alert to inform customer how many is in cart
	alert("Boots2 Order added to Cart\nQuantity in Cart: "+qty2);
}

//Product 3
//Sets qty1 to 0 as without b1 Clicked there should be none in the cart
let qty3=0;

function addProduct3()
{
	//Everytime b1 is clicked another is added to cart and qty variable is updated
	sessionStorage.setItem("qty3", (++qty3));
	//Alert to inform customer how many is in cart
	alert("Boots3 Order added to Cart\nQuantity in Cart: "+qty3);
}