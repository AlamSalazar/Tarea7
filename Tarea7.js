function merge(M, N) {
  const Z = [];
  let i = 0;
  let j = 0;
  while (i < M.length && j < N.length) {
    if (M[i] < N[j]) {
      Z.push(M[i]);
      i++;
    } else {
      Z.push(N[j]);
      j++;
    }
  }
  while (i < M.length) {
    Z.push(M[i]);
    i++;
  }
  while (j < N.length) {
    Z.push(N[j]);
    j++;
  }
  return Z;
}

const A = [3, 7, 11, 13];
const B = [2, 5, 6, 14, 15, 17];
const C = [2, 3, 5, 6, 7, 11, 13, 14, 15, 17];

console.log(merge(B, C));