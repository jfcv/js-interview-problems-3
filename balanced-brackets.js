
function isBalanced(str) {

    let str1 = str.split('');

    let tempObj = {};
    let template = ['(',')','[',']','{','}']; //template array
    let arrLib = [];
    
    let freqs = {};

    template.forEach(element => { //O(n)
        tempObj[element] = true;
    });

    str1.forEach(element => { //O(n)
        if (tempObj[element]) {
            arrLib.push(element);
        }
    });
    
    //console.log(arrLib);

    let condition = true;
    
    arrLib.forEach((element,index) => { //O(n)
        if(element === '{') {
            if(arrLib[index+1] === ']' || arrLib[index+1] === ')') {
                condition = false;
            }
        }
        if(element === '(') {
            if(arrLib[index+1] === ']' || arrLib[index+1] === '}') {
                condition = false;
            }
        }
        if(element === '[') {
            if(arrLib[index+1] === ')' || arrLib[index+1] === '}') {
                condition = false;
            }
        }
    });

    arrLib.forEach(element => { //O(n)
        if (freqs[element] === undefined) {
            freqs[element] = 1;
        } else {
            freqs[element]++;
        }
    });

    //console.log(freqs);

    if(freqs['('] !== freqs[')'] || freqs['['] !== freqs[']'] || freqs['{'] !== freqs['}']) { //O(1)
        condition = false;
    }

    if(condition) { //O(1)
        return true;
    } else {
        return false;
    }

}

//Time Complexity: O(n)

//Space Complexity: O(n)

console.log(isBalanced('(x+y) - (4)'), //true
            isBalanced('(((10 ) ()) ((?)(:)))'), //true
            isBalanced('[{()}]'), //true
            isBalanced('(50)('), //false
            isBalanced('[{]}'), //false
            isBalanced('[]['), //false
            isBalanced('[][]'), //true
            isBalanced('()('), //false
            isBalanced('()()'), //true
            isBalanced('{}{'), //false
            isBalanced('{}{}'), //true
);