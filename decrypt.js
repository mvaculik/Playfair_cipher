function decrypt() {

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
  console.log("YOUR KEY: " + key);
  
  var decryptedText = '';

  // playfair algorithm
  for(var i = 0; i < input.length; i++){
    // elemnt 1
  	var pair1 = input[i];
    // elemnt 2
  	var pair2 = input[i + 1];


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
    var coord1 = '', coord2 = '';

    if(p1i === p2i) {
      if(p1j === 0) {
        coord1 = matrix[p1i][4];
      }
      else {
        coord1 = matrix[p1i][p1j - 1];
      }
      if(p2j === 0) {
        coord2 = matrix[p2i][4];
      }
      else {
        coord2 = matrix[p2i][p2j - 1]
      }
    }
    if(p1j === p2j) {
      if(p1i === 0) {
        coord1 = matrix[4][p1j]
      }
      else {
        coord1 = matrix[p1i - 1][p1j];
      }
      if(p2i === 0) {
        coord2 = matrix[4][p2j];
      }
      else {
        coord2 = matrix[p2i - 1][p2j]
      }
    }
    if(p1i !== p2i && p1j !== p2j) {
      coord1 = matrix[p1i][p2j];
      coord2 = matrix[p2i][p1j];
    }

    decryptedText = decryptedText + coord1 + coord2;
    
    i = i + 1;
  }

  

      if(decryptedText.slice(decryptedText.length-2) == 'XW') {
        decryptedText = decryptedText.replace(decryptedText.slice(decryptedText.length-1), "")
        // console.log("REMOVED W");
      }
      if(decryptedText.slice(decryptedText.length-2) == 'WX') {
        decryptedText = decryptedText.replace(decryptedText.slice(decryptedText.length-1), "")
        // console.log("REMOVED X");
      }
  
  
  
  for (var g = 0; g < decryptedText.length; g++) {
    if (decryptedText.includes("XMEZERAX")) {
      decryptedText = decryptedText.replace("XMEZERAX", " ");
    }
  }
    
    // print encrypted text in website page
    console.log(decryptedText);
    document.getElementById("output").innerHTML = decryptedText;
    return decryptedText;
  }