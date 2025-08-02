function tronMangSapXep(m1, m2) {
  let i = 0, j = 0, kq = [];

  while (i < m1.length && j < m2.length) {
    if (m1[i] < m2[j]) {
      kq.push(m1[i++]);
    } else {
      kq.push(m2[j++]);
    }
  }

  return kq.concat(m1.slice(i)).concat(m2.slice(j));
}

const ketQua = tronMangSapXep([1, 2, 3, 5, 9], [4, 6, 7, 8]);
console.log(ketQua);
// Ket qua: [1, 2, 3, 4, 5, 6, 7, 8, 9]
