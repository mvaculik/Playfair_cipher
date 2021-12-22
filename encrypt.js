function encrypt() {

  // get from main.js
  let matrix = generateMatrix();
  var input = getString();
  var key = getKey();

  if (input == "") {
    alert('Enter Text!');
    return;
  }

  // show user key and text in console
  console.log("YOUR INPUT: " + input);
  console.log("INPUT LENGTH: " + input.length);

  console.log("YOUR KEY: " + key);
  
  var encrypted = '';

  // if input is odd then add X
  if(input.length % 2 != 0) {

    if(input.slice(input.length-1) == 'X') {
      input = [input.slice(0, input.length), "W", input.slice(input.length)].join('');
      console.log("ADDED W");
    } else {
      input = [input.slice(0, input.length), "X", input.slice(input.length)].join('');
      console.log("ADDED X");
    }
  }

  // playfair algorithm
  for(var i = 0; i < input.length; i++){
    // elemnt 1
  	var pair1 = input[i];
    // elemnt 2
  	var pair2 = input[i + 1];

    if(pair1 == "Q" || pair2 == "Q" && language == "cz") {
      if(pair1 == "Q") {
        pair1 = pair1.replace("Q", "O");
      } else {
        pair2 = pair2.replace("Q", "O");
      }
    }
    if(pair1 == "J" || pair2 == "J" && language == "en") {
      if(pair1 == "J") {
        pair1 = pair1.replace("J", "I");
      } else {
        pair2 = pair2.replace("J", "I");
      }
    }
    // variables for check position on matrix
  	var p1i, p1j, p2i, p2j;

  	for(var row = 0; row < matrix.length; row++) {
	    for(var column = 0; column < matrix[row].length; column++){

	      if (matrix[row][column] == pair1){
	      	p1i = row;
	      	p1j = column;
            console.groupCollapsed("Position of " + pair1 + " in matrix");
            console.log("row: " + row);
            console.log("column: " + column);
            console.groupEnd();
	      }
	     
	    }
	  }

    for(var row = 0; row < matrix.length; row++) {
	    for(var column = 0; column < matrix[row].length; column++){

	      if (matrix[row][column] == pair2){
	      	p2i = row;
	      	p2j = column;
          console.groupCollapsed("Position of " + pair2 + " in matrix");
          console.log("row: " + row);
          console.log("column: " + column);
          console.groupEnd();
	      }
	    }
	  }

       // playfair rules
      var cod1 = '', cod2 = '';

      if(p1i === p2i) {
        if(p1j === 4) {
          cod1 = matrix[p1i][0];
        }
        else {
          cod1 = matrix[p1i][p1j + 1];
        }
        if(p2j === 4) {
          cod2 = matrix[p2i][0];
        }
        else {
          cod2 = matrix[p2i][p2j + 1]
        }
      }
      if(p1j === p2j) {
        if(p1i === 4) {
          cod1 = matrix[0][p1j];
        }
        else {
          cod1 = matrix[p1i + 1][p1j];
        }
        if(p2i === 4) {
          cod2 = matrix[0][p2j];
        }
        else {
          cod2 = matrix[p2i + 1][p2j]
        }
      }
      if(p1i !== p2i && p1j !== p2j) {
        cod1 = matrix[p1i][p2j];
        cod2 = matrix[p2i][p1j];
      }

      encrypted = encrypted + cod1 + cod2;
   
    i = i + 1;
  }
  
  // print encrypted text in website page
    console.log(encrypted);
    document.getElementById("output").innerHTML = encrypted;
    return encrypted;
  }