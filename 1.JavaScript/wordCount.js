function wordCount(userInput) {
    // verify that function is working properly.
    //console.log("Function called");
    //console.log(userInput);

    // converts userInput object to userArray array
    var userArray = Object.values(userInput);
    //   console.log(userArray);

    // place userArray into words
    // c is last " " placement in userArray.
    var c = 0;
    // index for for loop
    var i = 0;
    var words = [];

    for (i; i <= userArray.length; i++) {
        // search for a " "
        if (userArray[i] == " " || i == userArray.length) {
            // if first word in the array
            if (c == 0) {
                var tempWord = userArray[c];
                c++;
            };
            // place the letters into tempWord
            for (c; c < i; c++) {
                tempWord += userArray[c];
            };
            // append tempWord to words array and increase word count
            c = i + 1;
            words.push(tempWord);
            tempWord = "";
        }
    };
    //console.log(words);

    // setup wordCount variable
    wordCount = [];
    var tempIndex = "";
    for (i = 0; i < words.length; i++) {
        tempIndex = words[i];
        wordCount[tempIndex] = 1;
    }

    console.log(wordCount);

    // reset values;
    i = 0;
    c = 0;
    // count each occurance of the words
    for (i; i <= words.length; i++) {
        for (c; c <= words.length; c++) {
            // make sure to ignore itself
            if (words[i] == words[c] && i != c) {
                // make sure its not double counting
                if (i - c == 1) {
                    console.log("Almost Got Me!");
                } else {
                    wordCount[words[i]] += 1;
                }
            };
        };
        // reset c
        c = 1;
    };

    //console.log(wordCount);

    // HTML insert prep
    var HTML = "<p>Here are the results</p><table><tr><th>Word</th><th>Count</th></tr>";

    // output the results to the user.
    for (i in wordCount) {
        // normal run
        HTML += "<tr><td>" + i + "</td><td>" + wordCount[i] + "</td></tr>";
    };

    HTML += "</table>"
    console.log(HTML);

    // insert into webpage
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("results").innerHTML = HTML;
};

function reload() {
    location.reload();
}