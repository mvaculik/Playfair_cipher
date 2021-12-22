

// dictionary
let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// diacritics character
let diacritics =
{
    "Ě" : "E",    "Š" : "S",    "Č" : "C",     "Ř" : "R",    "Ž" : "Z",   "Ý" : "Y",
    "Á" : "A",    "Í" : "I",    "É" : "E",     "Ó" : "O",    "Ů" : "U",   "Ú" : "U",
    "Ť" : "T",    "Ď" : "D",    "Ň" : "N",
}

var arr = [];
var mode = 'small';
var language = "cz"

// function get user key and 
function getKey(key) {
   var key = document.getElementById("key").value;

       // set key to upper case, replace gaps
       key = key.toUpperCase().replace(/\s/g, '');

       // loop for check allowed characters
       for(var i = 0; i < key.length; i++){
           if(dictionary.includes(key[i]) === true || key[i] in diacritics) {
                if(key[i] in diacritics) {
                    var change = (key[i], diacritics[key[i]]);
                    key = key.replace(key[i], change);   
               }
            }
            else {
                key = key.replace(key[i], '');
                alert("Enter the allowed characters in the key field!");
                return;
            }
        }
        return key;

}

// function get input
function getString(input) {
    // return document.getElementById("input").value;
    var input = document.getElementById("input").value;

        // set input to upper case, replace gaps
        input = input.toUpperCase().replace(/\s/g, 'XMEZERAX');
     
        // loop for check allowed characters
        for(var i = 0; i < input.length; i++){
            if(dictionary.includes(input[i]) === true || input[i] in diacritics) {
                 if(input[i] in diacritics) {
                     var change = (input[i], diacritics[input[i]]);
                     input = input.replace(input[i], change);   
                }
             }
             else {
                input = input.replace(input[i], '');
             }
         }
         return input;
}

// function generate matrix from user key 
function generateMatrix() { 
  var key = getKey();

  if (key == "") {
      alert("Please enter the key!");
      return;
  }

  // matrix
  var matrix = [];

  // temporary 
  var temp = '';
  
  if(language === 'cz') {
      var dict = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
      
    if(arr !== '') {
        arr = [];
    }

      // loop - add key to array (one by one)
    for(var i = 0; i < key.length; i++) {
        if(dict.indexOf(key[i]) !== -1) {
            // remove same character as in dict
            dict = dict.replace(key[i], '');
            // add key to temporary dictionary
            temp += key[i];
        }
    }

}

if(language === 'en') {
    var dict = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    
    if(arr !== '') {
        arr = [];
    }

        // loop - add key to array (one by one)
        for(var i = 0; i < key.length; i++) {
        if(dict.indexOf(key[i]) !== -1) {
            // remove same character as in dict
            dict = dict.replace(key[i], '');
            // add key to temporary dictionary
            temp += key[i];
        }
    }
  
}

  // cycle for create matrix
  // add temp to dict at the first position
  temp += dict;

  temp = temp.split('');

  var filMatrix = temp.join('').toString();

  // generate matrix
  while(temp[0]) {

    // push to matrix of 0 index to 5 index
    matrix.push(temp.splice(0,5));
    }

    for(var k = 0; k < 25; k++) {
        document.getElementsByClassName(mode)[k].value = filMatrix[k];
    }
        // show matric in console
        console.groupCollapsed("MATRIX");
        console.table(matrix);
        console.groupEnd();
    return matrix;  
}

function cz() {
    language = 'cz';
    console.log("SET LANGUAGE: " + language);
    
    for(i = 0; i < 25; i++) {
        var arr = document.getElementsByClassName(mode)[i].value;
            if(arr == "Q" && 25 == "25") {
                arr = arr.replace("Q", "J");
                document.getElementsByClassName(mode)[i].value = "J";
            }
    }
}
function en() {
    language = 'en';
    console.log("SET LANGUAGE: " + language);

        for(i = 0; i < 25; i++) {
            var arr = document.getElementsByClassName(mode)[i].value;
                if(arr == "J" && 25 == "25") {
                    arr = arr.replace("J", "Q");
                    document.getElementsByClassName(mode)[i].value = "Q";
                }
        }

}


function reload() {
    window.location.reload();
}
    

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}