// first create the order object
var order = new Object;

// next create the sammich
function createSammich(type){
    // sammich objeect
    var sammich = new Object();

    //switch conditional for type of sammich
    switch(type){
        case "ham":
            sammich.type = "ham";
            break;

        case "turkey":
            sammich.type = "turkey";
            break;
            
        case "roast":
            sammich.type = "roast";
            break;
    }
    // debugging
    console.log("Sammich is " + sammich.type);

    // add the sammich to the order
    order.sammich = sammich;

    // moar debugging
    console.log("order has a " + order.sammich.type + " sammich")
};

// Add user selected bread to Sammich object 
function addBread(type){
    // make bread object
    var bread = new Object;

    // swtich conditional for bread type
    switch(type){
        case "white":
            bread = "white";
            break;
        case "wheat":
            bread = "wheat";
            break;
        case "rye":
            bread = "rye";
            break;
    }

    // debugging
    console.log("bread is " + bread);

    // add to sammich in order variable
    order.sammich.bread = bread;

    // debugging
    console.log("Your sammich has " + order.sammich.bread + " bread");
};

// toppings function
function toppings(selection){
    // switch for toppings
    switch (selection){
        case "lettuce":
            if(order.sammich.lettuce == true){
                order.sammich.lettuce = false;
                console.log("lettuce =  " + order.sammich.lettuce)
            }
            else{
                order.sammich.lettuce = true;
                console.log("lettuce =  " + order.sammich.lettuce)
            }
            break;

        case "onion":
            if(order.sammich.onion == true){
                order.sammich.onion = false;
                console.log("onion =  " + order.sammich.onion)
            }
            else{
                order.sammich.onion = true;
                console.log("onion =  " + order.sammich.onion)
            }
            break;

        case "mayo":
        if(order.sammich.mayo == true){
            order.sammich.mayo = false;
            console.log("mayo =  " + order.sammich.mayo)
        }
        else{
            order.sammich.mayo = true;
            console.log("mayo =  " + order.sammich.mayo)
        }
        break;
            break;

        case "mustard":
        if(order.sammich.mustard == true){
            order.sammich.mustard = false;
            console.log("mustard =  " + order.sammich.mustard)
        }
        else{
            order.sammich.mustard = true;
            console.log("mustard =  " + order.sammich.mustard)
        }
        break;
            break;
    }
};

// calculate total
function total(){
    var price = new Object;

    console.log(order.sammich.type);
    // sammich price
    switch(order.sammich.type){
        case ("ham"):
            price = 3.50;
            break;
        case("turkey"):
            price = 4.50;
            break;
        case("roast"):
            price = 5.00;
            break;
    }
    console.log(price);
    // add extra for toppings
    if (order.sammich.bread == "rye")
        price += 1.00;

    console.log(price);
    if (order.sammich.mustard == true)
        price += 0.50;

    console.log(price);

    // correct decimals
    var p = price.toFixed(2);
    order.total = "$" + p;
    
};

// send total to screen
function calcTotal(){
    // first show the total elemets
    document.getElementById("sammichTotal").style.visibility = "visible";

    // show the sammich type
    document.getElementById("sammichType").innerHTML = order.sammich.type + " sammich ";

    // show the bread
    document.getElementById("sammichBreadSelection").innerHTML= order.sammich.bread + " bread";

    // show toppings
    // determine the toppings
    var toppings = new Object;
    if (order.sammich.lettuce && order.sammich.lettuce == true)
        toppings = "lettuce ";
    if (order.sammich.onion == true)
        toppings += ", onions ";
    if (order.sammich.mayo == true)
        toppings += ", mayo ";
    if (order.sammich.mustard == true)
        toppings += ", Sammich Mustard";
    
    // add to the toppings element and show it
    if (toppings)
        document.getElementById("sammichToppingsSelection").innerHTML = toppings;
    else
        document.getElementById("sammichToppingsSelection").innerHTML = "no toppings";

    // show the total
    total();
    document.getElementById("sammichTotalFinal").innerHTML = order.total;
}