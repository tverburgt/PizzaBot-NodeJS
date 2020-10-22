var validate = require('./validate'); 
var directions = require('./directions');
var map = require('./map');

var user_input = process.argv[2];

//Check user input has valid format.
if(!validate.validFormat(user_input)){                 
    console.log('Invalid Format')
    console.log('Example format: "5x5 (1, 2)(3, 4)"')
    process.exit();
}    
//Check if delivery points are within the dimensions of map.
else if(!validate.validDeliveryPoints(user_input)){     
    console.log("Invalid delivery point(s)");
    process.exit();
}


var your_map = map.getMap(user_input);         //Returns a map object.
var path = directions.getDirections(your_map); //Get directions to delivery points using map object.
console.log('Your map: ');
console.log(your_map);
console.log(path);

