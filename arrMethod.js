
//slice

function mySlice(arr, start = null, end = null) {
    let sliceArr = []

    if (start != null && end != null) {
        for (let i = start; i < end; i++) {
            sliceArr.push(arr[i])
        }
    }
    else if (end === null && start < 0) {
        for (let i = arr.length + start; i < arr.length; i++) {
            sliceArr.push(arr[i])
        }
    }
    else
        return arr
    return sliceArr
}

let mySliceArr = ["t", "e", "s", "t"];
console.log(mySlice(mySliceArr, 1, 3));
console.log(mySlice(mySliceArr, -2));
console.log(mySlice(mySliceArr));

console.log("------------------------------");

// indexOf

function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++)
        if (arr[i] === item) return i
    return -1
}

let myIndexOfArr = ["t", "e", "s", "t", "m", "e", "s", "s", "a", "g", "e"];
console.log(myIndexOf(myIndexOfArr, "t", 1));
console.log(myIndexOf(myIndexOfArr, "t", 5));
console.log(myIndexOf(myIndexOfArr, "s"));
console.log(myIndexOf(myIndexOfArr, "z"));

console.log("------------------------------");

//includes

function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++)
        if (arr[i] === item)
            return true
    return false
}

let myIncludesArr = ["t", "e", "s", "t", "m", "e", "s", "s", "a", "g", "e"];
console.log(myIncludes(myIncludesArr, "t", 2));
console.log(myIncludes(myIncludesArr, "g"));
console.log(myIncludes(myIncludesArr, "r", 1));
