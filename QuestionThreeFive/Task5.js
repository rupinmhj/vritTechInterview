// Task 5: You are given an integer array nums and you have to return a new counts array where counts[i] is the number of smaller elements to the right of nums[i].

function lesser(numbers){
    const counters=new Array(numbers.length).fill(0);

    for(let i=0;i<numbers.length;i++){
        let count=0;

        for(let j=i+1;j<numbers.length;j++){
            if(numbers[j]<numbers[i]){
                count++;
            }
        }
        counters[i]=count;
    }
    return counters;
}

// const numbers=[5, 3, 4, 1, 6, 2, 8, 9, 10, 15, 14, 12, 13]; ->Output: [4,2,2,0,1,0,0,0,0,3,2,0,0]
const numbers=[53,24,25,1,66,870,15,14];
result=lesser(numbers);
console.log(`The result array is [${result}]`);
