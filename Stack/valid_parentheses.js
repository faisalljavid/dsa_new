function isStack(s) {
    const stack = []  // Create an empty stack to store opening brackets

    // Mapping of closing brackets to their corresponding opening brackets
    const closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    // Loop through each character in the input string
    for (let c of s) {
        if (closeToOpen[c]) {  // If the character is a closing bracket
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                stack.pop()  // Remove the last opening bracket (it matches)
            } else {
                return false  // If no match, return false
            }
        } else {
            stack.push(c)  // If it's an opening bracket, push it onto the stack
        }
    }

    return stack.length === 0  // If the stack is empty, it's valid; otherwise, it's invalid
}

console.log(isStack("({[]})")); 
