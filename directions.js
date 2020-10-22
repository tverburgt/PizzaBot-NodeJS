function getDirections({delivery_points: points}) { //Destructing delivery_points array from map object.

    /*  Example of how the map object looks. It is defined in map.js
    {
        dimensions: { x: 5, y: 5 },
        delivery_points: [
            { x: 1, y: 3 },
            { x: 10, y: 3 }
        ]
    }
    */
   
    var current_x = 0;  //Start at the origin (0,0).
    var current_y = 0; 
    var path = '';

    points.forEach(function({x, y}){ //Destructuring objects from delivery_points ie {x: 1, y: 3}
    
        if(x >= current_x && y >= current_y){ // EN ++
            path += 'E'.repeat(x-current_x);
            path += 'N'.repeat(y-current_y);
            path += 'D';

            current_x = x;
            current_y = y;
        }
        else if(x >= current_x && y <= current_y){ // ES +-
            path += 'E'.repeat(x-current_x);
            path += 'S'.repeat(current_y-y);
            path += 'D';

            current_x = x;
            current_y = y;
        }
        else if(x <= current_x && y <= current_y){ // WS --
            path += 'W'.repeat(current_x-x);
            path += 'S'.repeat(current_y-y);
            path += 'D';

            current_x = x;
            current_y = y;
        }
        else if(x <= current_x && y >= current_y){ // WN -+
            path += 'W'.repeat(current_x-x);
            path += 'N'.repeat(y-current_y);
            path += 'D';

            current_x = x;
            current_y = y;
        }
        else if(x == current_x && y == current_y){ // D
            path += 'D';
        }
    });

    return path;
}
module.exports = {getDirections};