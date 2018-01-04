var name="Nirali";

function setValue(fName,lName,age) {
    setCustInfo();
    displayCustInfo();
    window.alert("Age: " + age);
}

function setCustInfo(name) {

    window.alert("The name is set as:" + name);
}

function displayCustInfo(name) {

    window.alert("Name is displayed as:" + name);
}

setValue('Bruce','Wayne','45');