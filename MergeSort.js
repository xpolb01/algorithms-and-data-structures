let merge = (left, right) => {
  let resArr = [];
  while(left.length && right.length) {
    let next = left[0] > right[0] ? right.shift() : left.shift();
    resArr.push(next);
  }

  if(left.length) {
    resArr.push(...left);
  } else {
    resArr.push(...right);
  }

  return resArr;
};

let mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let middle = Math.floor( arr.length / 2 );
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};


mergeSort([1,2,4,6,5,7,8,9,3]);
