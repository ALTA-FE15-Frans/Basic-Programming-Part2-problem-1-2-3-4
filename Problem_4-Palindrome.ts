function palindrome(string : string) : boolean {
    
    let reverse = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }

    return string === reverse;
  }
  
  
  console.log(palindrome("civic"))       // true
  console.log(palindrome("katak"))       // true
  console.log(palindrome("kasur rusak")) // true
  console.log(palindrome("kupu-kupu"))   // false
  console.log(palindrome("lion"))        // false