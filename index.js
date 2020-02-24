function showNumber() {
    
    alert(addedValue);
}

function assignLength() {
    var awesomeValue = document.getElementById('fromValue').value;
    var cmNumber = document.getElementById("fromCENTIMETER").value;
    
    var awesomeAssign = awesomeValue + cmNumber;

    alert(awesomeAssign);
}

// Assigning function

function METERgetSelected (){

var fromRadios = document.getElementsByName('from');
var fromValue = document.getElementById('fromValue').value;

var toRadios = document.getElementsByName('to');
var toValue = document.getElementById('toValue').value;

var dpiValue = document.getElementById('dpiValue').value;

for (var fi = 0, fLength = fromRadios.length; fi < fLength; fi++)
for (var ti = 0, tLength = fromRadios.length; ti < tLength; ti++)

    // METER METER METER METER METER 

    if (fromRadios[fi].checked && toRadios[ti].checked) {
        // do whatever you want with the checked radio

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "m") {
        var operatorValue = fromValue;
        document.getElementById('toValue').value = operatorValue;
        document.getElementById('formula_text').innerHTML = "these are the same units";
    } 

    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "m") {
        var operatorValue = fromValue / 100;
        document.getElementById('toValue').value = operatorValue.toFixed(0);
        document.getElementById('formula_text').innerHTML = "divide the length value by 100";
    } 
    
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "m") {
        var operatorValue = fromValue / 1000;
        document.getElementById('toValue').value = operatorValue.content.style.color = 'white';
        document.getElementById('formula_text').innerHTML = "divide the length value by 1000";
    }

    if (fromRadios[fi].value == "in" && toRadios[ti].value == "m") {
        var operatorValue = fromValue / 39.37;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "divide the length value by 39.37";
    }

    if (fromRadios[fi].value == "px" && toRadios[ti].value == "m") {
        var operatorValue = fromValue * 0.0002645833;
        document.getElementById('toValue').value = operatorValue.toFixed(5);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 0.000265";
    }

    if (fromRadios[fi].value == "p" && toRadios[ti].value == "m") {
        var operatorValue = fromValue / 236;
        document.getElementById('toValue').value = operatorValue.toFixed(6);
        document.getElementById('formula_text').innerHTML = "for an approximate result, divide the length value by 236";
    }

    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "m") {
        var operatorValue = fromValue / 2835;
        document.getElementById('toValue').value = operatorValue.toFixed(6);
        document.getElementById('formula_text').innerHTML = "for an approximate result, divide the length value by 2835";
    }

    // METER METER METER METER METER METER METER METER

    // CENTIMETER CENTIMETER CENTIMETER CENTIMETER CENTIMETER

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "cm") {
        var operatorValue = fromValue * 100;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 100";
    } 

    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "cm") {
        var operatorValue = fromValue;
        document.getElementById('toValue').value = operatorValue;
        document.getElementById('formula_text').innerHTML = "these are the same units";
    } 
    
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "cm") {
        var operatorValue = fromValue / 10;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "divide the length value by 10";
    }

    if (fromRadios[fi].value == "in" && toRadios[ti].value == "cm") {
        var operatorValue = fromValue * 2.54;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 2.54";
    }

    if (fromRadios[fi].value == "px" && toRadios[ti].value == "cm" && dpiValue == 0) {
        document.getElementById('formula_text').innerHTML = "a DPI value is needed for this conversion, please input a value below";
        document.getElementById('toValue').value = 0;
    } else if (fromRadios[fi].value == "px" && toRadios[ti].value == "cm" && dpiValue > 0) {
        document.getElementById('formula_text').innerHTML = "multiply the pixel value to the quotient of 2.54 and DPI value or (pixel value * (2.54 / DPI))";
        var operatorValue = fromValue * (2.54 / dpiValue);
        document.getElementById('toValue').value = operatorValue.toFixed(2);    
        }

    if (fromRadios[fi].value == "p" && toRadios[ti].value == "cm") {
        var operatorValue = fromValue / 2.362;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "for an approximate result, divide the length value by 2.362";
    }

    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "cm") {
        var operatorValue = fromValue / 28.346;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "for an approximate result, divide the length value by 28.346";
    }
    
    // CENTIMETER CENTIMETER CENTIMETER CENTIMETER CENTIMETER

    // MILLIMETER MILLIMETER MILLIMETER MILLIMETER MILLIMETER  

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "mm") {
        var operatorValue = fromValue * 1000;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 1000";
    } 

    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "mm") {
        var operatorValue = fromValue * 10;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 10";
    } 
    
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "mm") {
        var operatorValue = fromValue;
        document.getElementById('toValue').value = operatorValue;
        document.getElementById('formula_text').innerHTML = "these are the same units";
    }

    if (fromRadios[fi].value == "in" && toRadios[ti].value == "mm") {
        var operatorValue = fromValue * 25.4;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 25.4";
    }

    if (fromRadios[fi].value == "px" && toRadios[ti].value == "mm" && dpiValue == 0) {
        document.getElementById('formula_text').innerHTML = "a DPI value is needed for this conversion, please input a value below";
        document.getElementById('toValue').value = 0;
    } else if (fromRadios[fi].value == "px" && toRadios[ti].value == "mm" && dpiValue > 0) {
        var operatorValue = fromValue * (25.4 / dpiValue);
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the pixel value to the quotient of 25.4 and DPI value or (pixel value * (25.4 / DPI))";    
        }

    if (fromRadios[fi].value == "p" && toRadios[ti].value == "mm") {
        var operatorValue = fromValue * 4.233;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "for an approximate result, multiply the length value by 4.233";
    }

    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "mm") {
        var operatorValue = fromValue / 2.835;
        document.getElementById('toValue').value = operatorValue.toFixed(4);
        document.getElementById('formula_text').innerHTML = "for an approximate result, divide the length value by 2.835";
    }

    // MILLIMETER MILLIMETER MILLIMETER MILLIMETER MILLIMETER  

    // INCHES INCHES INCHES INCHES INCHES INCHES INCHES INCHES

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "in") {
            var operatorValue = fromValue * 39.37;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 39.37";
    } 
    
    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "in") {
            var operatorValue = fromValue / 2.54;
            document.getElementById('toValue').value = operatorValue.toFixed(4);
            document.getElementById('formula_text').innerHTML = "divide the length value by 2.54";
    } 
        
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "in") {
            var operatorValue = fromValue / 25.4;
            document.getElementById('toValue').value = operatorValue.toFixed(4);
            document.getElementById('formula_text').innerHTML = "divide the length value by 25.4";
    }
    
    if (fromRadios[fi].value == "in" && toRadios[ti].value == "in") {
            var operatorValue = fromValue;
            document.getElementById('toValue').value = operatorValue;
            document.getElementById('formula_text').innerHTML = "these are the same units";
    }
    
    if (fromRadios[fi].value == "px" && toRadios[ti].value == "in" && dpiValue == 0) {
            document.getElementById('formula_text').innerHTML = "a DPI value is needed for this conversion, please input a value below";
            document.getElementById('toValue').value = 0;
    } else if (fromRadios[fi].value == "px" && toRadios[ti].value == "in" && dpiValue > 0) {
        var operatorValue = fromValue / dpiValue;
            document.getElementById('toValue').value = operatorValue.toFixed(6);
            document.getElementById('formula_text').innerHTML = "divide the pixel value to the DPI";    
        }
    
    if (fromRadios[fi].value == "p" && toRadios[ti].value == "in") {
            var operatorValue = fromValue / 6;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "divide the length value by 6";
    }
    
    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "in") {
            var operatorValue = fromValue / 72;
            document.getElementById('toValue').value = operatorValue.toFixed(6);
            document.getElementById('formula_text').innerHTML = "divide the length value by 72";
    }
    
    // INCHES INCHES INCHES INCHES INCHES INCHES INCHES INCHES

    // PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "px") {
            var operatorValue = fromValue * 3779.5280352161;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 3779.53";
    } 
    
    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "px" && dpiValue == 0) {
            document.getElementById('formula_text').innerHTML = "a DPI value is needed for this conversion, please input a value below";
            document.getElementById('toValue').value = 0;
    } else if (fromRadios[fi].value == "cm" && toRadios[ti].value == "px" && dpiValue > 0) {
            var operatorValue = fromValue * (dpiValue/2.54);    
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value to the quotient of the DPI and 2.54 or (length value * (DPI / 25.4))";    
    }
        
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "px" && dpiValue == 0) {
            document.getElementById('formula_text').innerHTML = "a DPI value is needed for this conversion, please input a value below";
            document.getElementById('toValue').value = 0;
    } else if (fromRadios[fi].value == "mm" && toRadios[ti].value == "px" && dpiValue > 0) {
            var operatorValue = (fromValue * dpiValue) / 25.4;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "divide the product of the length value and DPI to 25.4 or ((length value * DPI) / 25.4)";    
    }

    if (fromRadios[fi].value == "in" && toRadios[ti].value == "px" && dpiValue == 0) {
            document.getElementById('formula_text').innerHTML = "a DPI value is needed for this conversion, please input a value below";
            document.getElementById('toValue').value = 0;
    } else if (fromRadios[fi].value == "in" && toRadios[ti].value == "px" && dpiValue > 0) {
            var operatorValue = fromValue * dpiValue;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value to the DPI";    
    }
    
    if (fromRadios[fi].value == "px" && toRadios[ti].value == "px") {
            var operatorValue = fromValue;
            document.getElementById('toValue').value = operatorValue;
            document.getElementById('formula_text').innerHTML = "these are the same units";
    }
    
    if (fromRadios[fi].value == "p" && toRadios[ti].value == "px") {
            var operatorValue = fromValue * 16.00000200315;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 16";
    }
    
    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "px") {
            var operatorValue = fromValue * 1.333333;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 1.33";
    }
    
    // PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL PIXEL

    // PICA PICA PICA PICA PICA PICA PICA PICA PICA PICA PICA 

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "p") {
        var operatorValue = fromValue * 236;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 236";
    } 

    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "p") {
            var operatorValue = fromValue * 2.362;    
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 2.362";
    } 
    
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "p") {
            var operatorValue = fromValue / 4.233;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "divide the length value by 4.233";
    }

    if (fromRadios[fi].value == "in" && toRadios[ti].value == "p") {
            var operatorValue = fromValue * 6;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 6";
    }

    if (fromRadios[fi].value == "px" && toRadios[ti].value == "p") {
            var operatorValue = fromValue * 0.0625;
            document.getElementById('toValue').value = operatorValue.toFixed(4);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 0.0625";
    }

    if (fromRadios[fi].value == "p" && toRadios[ti].value == "p") {
            var operatorValue = fromValue;
            document.getElementById('toValue').value = operatorValue;
            document.getElementById('formula_text').innerHTML = "these are the same units";
    }

    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "p") {
            var operatorValue = fromValue / 12;
            document.getElementById('toValue').value = operatorValue.toFixed(4);
            document.getElementById('formula_text').innerHTML = "divide the length value by 12";
    }

// PICA PICA PICA PICA PICA PICA PICA PICA PICA PICA PICA

// POINT POINT POINT POINT POINT POINT POINT POINT POINT POINT

    if (fromRadios[fi].value == "m" && toRadios[ti].value == "pt") {
        var operatorValue = fromValue * 2835;
        document.getElementById('toValue').value = operatorValue.toFixed(2);
        document.getElementById('formula_text').innerHTML = "multiply the length value by 2835";
    } 

    if (fromRadios[fi].value == "cm" && toRadios[ti].value == "pt") {
            var operatorValue = fromValue * 28.346;    
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 28.346";
    } 
    
    if (fromRadios[fi].value == "mm" && toRadios[ti].value == "pt") {
            var operatorValue = fromValue * 2.835;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 2.835";
    }

    if (fromRadios[fi].value == "in" && toRadios[ti].value == "pt") {
            var operatorValue = fromValue * 72;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 72";
    }

    if (fromRadios[fi].value == "px" && toRadios[ti].value == "pt") {
            var operatorValue = fromValue * 0.75;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 0.75";
    }

    if (fromRadios[fi].value == "p" && toRadios[ti].value == "pt") {
            var operatorValue = fromValue * 12;
            document.getElementById('toValue').value = operatorValue.toFixed(2);
            document.getElementById('formula_text').innerHTML = "multiply the length value by 12";
    }

    if (fromRadios[fi].value == "pt" && toRadios[ti].value == "pt") {
            var operatorValue = fromValue;
            document.getElementById('toValue').value = operatorValue;
            document.getElementById('formula_text').innerHTML = "these are the same units";
    }

// POINT POINT POINT POINT POINT POINT POINT POINT POINT POINT

    // only one radio can be logically checked, don't check the rest
    ;}
}


    


console.log(METERgetSelected)
