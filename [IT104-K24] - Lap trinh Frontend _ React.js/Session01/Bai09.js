function hopHaiMang(mang1, mang2) {
  // Vi mang da duoc sap tang dan, ta se gop thu cong
  let ketQua = [];
  let i = 0, j = 0;

  // Duyet tung phan tu cua hai mang
  while (i < mang1.length && j < mang2.length) {
    if (mang1[i] < mang2[j]) {
      ketQua.push(mang1[i]);
      i++;
    } else {
      ketQua.push(mang2[j]);
      j++;
    }
  }

  // Them cac phan tu con lai
  while (i < mang1.length) {
    ketQua.push(mang1[i]);
    i++;
  }

  while (j < mang2.length) {
    ketQua.push(mang2[j]);
    j++;
  }

  console.log(ketQua);
  return ketQua;
}
