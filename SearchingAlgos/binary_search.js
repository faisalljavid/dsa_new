// works for sorted arrays only

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2, 3, 5, 6, 8, 14, 15, 18], 144));
