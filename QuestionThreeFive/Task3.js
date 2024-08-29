function findLongestConsecutiveSequence(arr) { // O(1) ->function defination
    const uniqueNumbers = new Set(arr); //O(n) -> Creating a set from the array, where n is the number fo the elements in arr
     let longestLength = 0; //  O(1)-> constant time for initialization
  
    for (const value of arr) { // O(n)-> his loop iterates through each element of the array once.
      if (!uniqueNumbers.has(value - 1)) { //O(1)->Checking if an element exists in a set is O(1) on average.
        let nextNum = value + 1;
        let currentLength = 1; // O(1)->constant time for initialization
  
        while (uniqueNumbers.has(nextNum)) { // O(m) in the worst case
          nextNum++;
          currentLength++; // O(1) -> constant time for incrementing
        }
  
        longestLength = Math.max(longestLength, currentLength); //o(1)-> constant time for comparison and assignment
      }
    }
  
    return longestLength; // O(1) -> for returning value
  }
  
  const inputArray = [5, 3, 4, 1, 6, 2, 8, 9, 10, 15, 14, 12, 13];
  const result = findLongestConsecutiveSequence(inputArray);
  console.log(result);

  // Thus, overall time complexity is the maximum so , total time complexity :O(n).

  //Space Complexity:
//   const uniqueNumbers = new Set(arr); The main contributor to space complexity is the setInterval, which in Object(n). The other varialbes contribute O(1).
//   Thus, the total space complexity: O(n);