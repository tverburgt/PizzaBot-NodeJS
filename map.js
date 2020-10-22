function getMap(inputString){
    var regExp = /\d+/g;  //Global search for all numbers.

    //String array returned from match() is converted to int array.
    var data = inputString.match(regExp).map(function(currentValue){
        return parseInt(currentValue);
    });

    //map object
    var map = {
        dimensions: {x: data[0], y: data[1]},
        delivery_points: []
    };
    
    //Initialise map object with input data.
    for(let i = 2; i<data.length-1; i+=2){
        map.delivery_points.push({
            x: data[i],
            y: data[i+1] 
        });
    }

    return map;
}
module.exports = {getMap};