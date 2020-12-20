

function search(array,value) {

    for (let i = 0; i < array.length; i++) { //O(n)
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}

//Time Complexity: O(n)

//Space Complexity: O(1) -> just stores 'i' in the memory 

console.log(search([1,3,6,13,17],17));
console.log(search([1,3,6,13,17],12));