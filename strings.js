let str = "lorem Ipsum is simply dummy text of the printing and typesetting industry."

function uppercaseFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1)
}

console.log(uppercaseFirstLetter(str));
console.log("----------------");



function lineBreak(str, len){
    if(str.length <= len) return str;

    let words = str.split(" ")
    let shortStr = '';
    let count = 0
    let punctuation = ",.!?:;"
    
    for(let word of words){
        if(word.length + count <= len-3){
            count += word.length+1
            shortStr += word + ' '
        }else{
            shortStr = shortStr.trim()
            let lastChar = shortStr[shortStr.length-1]
            if(punctuation.includes(lastChar)){
                shortStr = shortStr.substring(0, shortStr.length-1)
            }
            shortStr +="..."
            break
        }
    }

    return shortStr
}

console.log(lineBreak("Another example! Let's see how it handles this.", 19));
console.log(lineBreak(str, 40));
console.log(lineBreak("Another example.", 40));
console.log("----------------");


function twoSubstring(str1, str2){
    if(str1.includes(str2)) return true
    if(str2.includes(str1)) return true
    return false
}

console.log(twoSubstring(str, "dummy text"));
console.log(twoSubstring(str, "joke"));
console.log(twoSubstring("joke", str));
console.log(twoSubstring("dummy", str));
