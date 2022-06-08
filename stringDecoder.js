function decoder(code)
{
    let letterArr = [];
    let word = [];

    for (let i = 0; i < code.length; i++)
    {
        letterArr.push(code.charAt(i))
    }

    let currIndex = 0;
    let currNum;
    while (currIndex < letterArr.length)
    {
        currNum = parseInt(letterArr[currIndex])
        word.push(letterArr[currIndex + currNum + 1])
        currIndex += (currNum + 2)
    }
    return word.join('')
}

console.log(decoder('0h2xce5ngbrdy'));