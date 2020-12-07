1.- get 1 to 255
function newArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}

2.- get even 1000
var result = newArr();
console.log(result)

function getSum(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}
console.log(getSum())

3.- sum odd to 5000
function getSumOdd(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(getSumOdd());

4.- sum of elements inside an Array
function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
console.log(iterate([1,2,4]));

5.- find max Number
function findMax(numArr){
    var max = numArr[0];
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i] > max){
            max = numArr[i];
        }
    }
    return max;
}
console.log(findMax([-3,-5,-6,-2]));

6.- find average
function findAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
console.log(findAvg([1,3,5,7,20]));

7.- Array odd
function oddArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
console.log(oddArray());

8.- Greater than Y 
function greaterThanY(arr, y){
    var counter = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanY([1,3,5,7], 2));

9.- Squares 
function squares(arr){
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx]*arr[idx];
    }
}
console.log(squares([1, -2, 5, 10]));

10.- No negatives 
function noNegatives(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
noNegatives([-1,2,-5]);

11.- Max, Min and Avg 
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(maxMinAvg([2,10,-3,4]));

12.- Swap values
function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);

13.- Number to string 
function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
noNegativesDojo([-1,2,-5]);