const longestPalindrome = (s) => {
    
    if(s.length < 0 || s.length === null) return ""; //edgecases
    
    let longest = ""; // we need to keep track of the longest palindrome as we go through the string
    
    for(let i = 0; i < s.length; i++){
        let oddPalindrome = expandFromCenter(s,i,i);
        let evenPalindrome = expandFromCenter(s,i-1,i);
        
        if(oddPalindrome.length > longest.length){
            longest = oddPalindrome;
        }
        if(evenPalindrome.length > longest.length){
            longest = evenPalindrome;
        }
    }
    return longest;
    
    
}
const expandFromCenter = (s,left,right) => {
    let i = 0;
    while(s[left-i]&& s[left-i] === s[right+i]){
        i++;
    }
    i--;
    
    return s.slice(left-i,right + i + 1);
    
}
console.log(longestPalindrome('babad'));