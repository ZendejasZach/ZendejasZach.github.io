function parse(firstName) {
   // Verifiy data input
   var fName = document.getElementById("firstName").value;
   var lName = document.getElementById("lastName").value;
   var address = document.getElementById("address").value;
   var city = document.getElementById("city").value;
   var state = document.getElementById("state").value;
   var zip = document.getElementById("zip").value;
   var CCNum = document.getElementById("CCNumber").value;
   var sCode = document.getElementById("sCode").value;

   var parse = '{"firstName":"' + fName + '", "lastName":"' + lName + '", "address":"' + address + '","city":"' + city + '","state":"' + state + '", "zip":"' + zip + '", "CreditCard":"' + CCNum + '", "SecurityCode":"' + sCode + '"}';
   var info = JSON.parse(parse);

   console.log(info.zip);
   //debugging
   /*
   console.log(parse);
   console.log(info.firstName);
   console.log(info.lastName);
   console.log(info.address);
   console.log(info.CreditCard);
   console.log(info.SecurityCode);
   */

   // send data to confirmation div
   document.getElementById("Name").innerHTML = "Name: " + info.firstName + " " + info.lastName;
   document.getElementById("pAddress").innerHTML = "Billing Address: " + info.address + " " + info.city + ", " + info.state + " " + info.zip;
   document.getElementById("pCCNum").innerHTML = "Credit Card: " + info.CreditCard + " " + info.SecurityCode;

   document.getElementById("string").innerHTML = "String: " + JSON.stringify(info);

   // show div
   document.getElementById("confirmation").style.visibility = "visible";
}