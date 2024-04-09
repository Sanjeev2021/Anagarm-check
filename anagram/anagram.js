function areAnagram(word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
  
    if (n1 != n2) return false;
  
    // Convert strings to character arrays for sorting
    const word1Arr = word1.split("");
    const word2Arr = word2.split("");
  
    word1Arr.sort();
    word2Arr.sort();
  
    for (let i = 0; i < n1; i++) {
      if (word1Arr[i] != word2Arr[i]) return false;
    }
  
    return true;
  }

const result = areAnagram("apple","play")
console.log(result)



