var arr = [];
var i = 0;
var imgLen;
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var res = JSON.parse(this.responseText);
            arr = res;
            imgLen = arr.allProducts.length;
            imgElement.src = "main.jpg";
            productInfo.innerHTML = res.allProducts[0].product_description;
            customerReviews.innerHTML = res.allProducts[0].customer_reviews;
            shippingInfo.innerHTML = res.allProducts[0].shipping_details;
        }
    };
    xhttp.open("GET", "guitardata.json", true);
    xhttp.send();
}


function prevImage() {
    if (i < imgLen - 1) {
        alert(i);
        i++;
    }
    else {
        i = 0;
    }
    allDetails(i);
}

function nextImage() {
    if (i > 0) {
        alert(i);
        i--;
    }
    else {
        i = imgLen - 1;
    }
    allDetails(i);
}

function allDetails(i) {
    imgElement.src = arr.allProducts[i].image_path;
    productInfo.innerHTML = arr.allProducts[i].product_description;
    customerReviews.innerHTML = arr.allProducts[i].customer_reviews;
    shippingInfo.innerHTML = arr.allProducts[i].shipping_details;
    localStorage.setItem("index", i);
}

