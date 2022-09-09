const almostSorted = (arr) => {
  let indexOutOfOrder = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  // console.log(sortedArr, arr);
  
  for(let i = 0; i < arr.length; i++) {
    if(sortedArr[i] !== arr[i]) {
      numsOutOfOrder.push(arr[i])
      indexOutOfOrder.push(i)
    }
  }
  // console.log(indexOutOfOrder);
  
  if(indexOutOfOrder.length === 0) {
    console.log('yes');
    return 'yes';
  } else if(indexOutOfOrder.length === 2) {
    console.log('yes');
    console.log('swap', indexOutOfOrder[0] + 1, indexOutOfOrder[1] + 1);
  } else {
    const firstIndex = indexOutOfOrder[0], lastIndex = indexOutOfOrder.pop();
    for(let i = firstIndex; i <= lastIndex; i++) {
      if(arr[i] !== sortedArr[lastIndex - i + firstIndex]) {
        console.log('no');
        return 'no'
      }
    }
    console.log('yes');
    console.log('reverse', firstIndex + 1, lastIndex + 1)
  }
}

//////////////////////////////////////////////////////////////
function almostSorted(arr) {
    const x = []
    const sorted = [...arr].sort((a, b) => a - b)
    arr.forEach((v, i) => v !== sorted[i] && x.push(i))
    if (!x.length) {
        console.log('yes')
    } else if (x.length === 2) {
        console.log('yes'), console.log('swap', x[0]+1, x[1]+1)
    } else {
        const a = x[0], b = x.pop()
        for (let i = a; i <= b; i++) {
          if (arr[i] !== sorted[b - i + a]) {
            return console.log('no')
          }
          console.log('yes'), console.log('reverse', a + 1, b + 1)
        }
    }
}
