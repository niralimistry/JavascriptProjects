function setValue(fName,lName,age) {
    setCustInfo(fName);
    displayCustInfo(lName);
    window.alert("Age: " + age);
}

function setCustInfo(name) {
    var name = "nirali";
    window.alert("The name is set as:" + name);
}

function displayCustInfo(name) {
    var name = "mistry";
    window.alert("Name is displayed as:" + name);
}

setValue('Bruce','Wayne','45');