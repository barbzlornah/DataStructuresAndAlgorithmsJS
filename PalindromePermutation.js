// Given a string, determine if a permutation of the string could form a palindrome.

let palPerm = (s) => {
    // if string is even ,there must be two of every character
    // if string is odd, there must be one unique char
    // use a hashtable to store letters
    // if we see the same letter again, we delete from the hash table
    // check hash at the end: odd = one key left; even no key left
    //skip spaces

    let hash = {};//in js a hashtable is an object
    let charCount = 0; // to keep a count of all the non-space characters
    for(let i = 0; i < s.length; i++){
        let c = s[i]; // current character
        if(c === ' ') {
            continue;
        } //skip spaces
        if(hash[c]){
            delete hash[c];
        } 
        else{
            hash[c] = true;
        } 
        charCount++;
    }
    if(charCount % 2 === 0){
        return Object.keys(hash).length === 0;
    }
    else{
        return Object.keys(hash).length === 1;
    }

}
console.log(palPerm('taco cat') === true,
            palPerm('aabc') === false);