// nums = [1,2,1]
// output = [1,2,1,1,2,1]

function concatenation(nums) {
    // let ans = []
    // for (let i = 0; i < 2; i++) {
    //     for (let num of nums) {
    //         ans.push(num)
    //     }
    // }
    // return ans

    // or simply: (this method doesn't modify the original array)
    return nums.concat(nums);
}