//Validate if the inputted data has the correct format.
function validFormat(inputString){

    var regExp = /^\d+?x\d+? (\(\d+?, \d+?\))+$/g;

    return regExp.test(inputString) ? true:false
}

//Test if x and y of delivery points are within the dimensions of the inputted grid size.
function validDeliveryPoints(inputString){
    var regExp = /\d+/g; //Global search for all numbers.

    //String array returned from match() is converted to int array
    var data = inputString.match(regExp).map(function(currentValue){
        return parseInt(currentValue);
    });

    var max_x = data[0]; //Maximum dimension on x-axis.
    var max_y = data[1]; //Maximum dimension on y-axis.

    var error_flag = 0; //Error flag is set when delivery point(s) are invalid.

    //Checking if x and y points are are within maximum x-axis and y-axis ranges.
    for(var i = 2; i<data.length; i+=2){
        if(data[i] > max_x){
            console.log('The value of x at delivery point: (' 
            + data[i] +', '+ data[i+1] + ') is greater than the max x range: ' + max_x);
            error_flag = 1;
        }
        if(data[i+1] > max_y){
            console.log('The value of y at delivery point: (' 
            + data[i] +', '+ data[i+1] + ') is greater than the max y range: ' + max_y);
            error_flag = 1;
        }
    }

    return error_flag == 1 ? false:true;

}
module.exports = {validFormat, validDeliveryPoints};