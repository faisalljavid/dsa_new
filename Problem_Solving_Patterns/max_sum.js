// Sliding Window:

// The sliding window technique is used to avoid recalculating 
// the sum of a subarray from scratch every time. 
// Instead, it "slides" the window by adjusting 
// the sum based on the previous window's result.



// make a function which should calculate the maximum sum of 'n' consecutive elements in the given array


function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 3, 1, 8, 5, 6, 3], 3));
