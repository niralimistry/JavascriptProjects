var lName = "Wayne";
function setValue(fName,lName,age){
    setCustInfo(fName);
    displayCustInfo(lName);
}
function setCustInfo(name){
    window.alert("The name is set as: " + name);
}
function displayCustInfo(lName){
    window.alert("Name is displayed as: " + lName);
    // k = name + " " +i;
    // window.alert(k);
}
setValue('Bruce','Wayne','45');