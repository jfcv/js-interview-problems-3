
function search(array,value) {

    let startIndex = 0;
    let endIndex = array.length-1;

    //initial testing for verifying the value is contained within the array max & min
    if (value > array[endIndex] || value < array[startIndex]) {
        return -1;
    }

    while(1) {
        
        if (array[endIndex] === value) {
            return endIndex;
        }

        if (array[startIndex] === value) {
            return startIndex;
        }

        if(endIndex-startIndex <= 1) {
            return -1;
        }

        let middleIndex = Math.floor((startIndex+endIndex)/2);

        if (value > array[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if(value < array[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
    

}

//Time Complexity: O(log(n))

//Space Complexity: O(1) 

console.log(search([1,3,6,13,17],1));
console.log(search([1,3,6,13,17],18));