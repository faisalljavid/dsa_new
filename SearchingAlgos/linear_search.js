function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([11, 2, 4, 56, 7, 3, 1], 1));
