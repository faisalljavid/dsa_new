// This pattern involves dividing a dataset into 
// smaller chunks and then repeating a process with a subset of data

// basically Binary Search => O(log N)

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 8));
