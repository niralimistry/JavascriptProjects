var no_of_items = document.getElementById("no_of_items");
var stock_availability = document.getElementById("stock_availability");
var pInfo = document.getElementById("productInfo");
var sI = document.getElementById("shippingInfo");
var cReviews = document.getElementById("customerReviews");
var price1 = document.getElementById("price");
var index = localStorage.getItem("index");

var firstName = localStorage.getItem("firstName");
var lastName = localStorage.getItem("lastName");
var email = localStorage.getItem("email");
var companyName = localStorage.getItem("companyName");
var state = localStorage.getItem("state");
var country = localStorage.getItem("country");
var address1 = localStorage.getItem("address1");
var address2 = localStorage.getItem("address2");
var postalCode = localStorage.getItem("postalCode")
var phoneNumber = localStorage.getItem("phoneNumber");



function loadBody() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var res = JSON.parse(this.responseText);
            // imgLen = arr.allProducts.length;
            imgElement.src = res.allProducts[index].image_path;
            pInfo.innerHTML =  "<b>Product Description:</b>    " + res.allProducts[index].product_description;
            cReviews.innerHTML =  "<b>Customer Reviews:</b>   " + res.allProducts[index].customer_reviews;
            sI.innerHTML =  "<b>Shipping Info:</b>    " + res.allProducts[index].shipping_details;
            no_of_items.innerHTML =  "<b>No Of Items: </b>   " + res.allProducts[index].no_of_items;
            stock_availability.innerHTML = "<b>Stock_availability:</b>    " + res.allProducts[index].stock_availability;
            price1.innerHTML = "<b>price:</b>    " + res.allProducts[index].price;
        }
    };
    xhttp.open("GET", "guitardata.json", true);
    xhttp.send();
}

fN.innerHTML = firstName;
lN.innerHTML = lastName;
emailText.innerHTML = email;
companyNameText.innerHTML = companyName;
stateText.innerHTML = state;
countryText.innerHTML = country;
address1Text.innerHTML = address1;
address2Text.innerHTML = address2;
postalCodeText.innerHTML = postalCode;
phoneNumberText.innerHTML = phoneNumber;


document.getElementById("demo").innerHTML = firstName;