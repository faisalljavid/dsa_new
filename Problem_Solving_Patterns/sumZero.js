// pair whose sum should be equal to 0 (in a sorted ascending array)

// using two pointers here

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 5, 4, 10]));
