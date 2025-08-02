function chenMang(mang1, mang2, viTri) {
  // Kiem tra vi tri co hop le khong
  if (viTri < 0 || viTri > mang1.length) {
    console.error("Vi tri khong hop le");
    return;
  }

  // Chen mang2 vao mang1 tai viTri
  const ketQua = [
    ...mang1.slice(0, viTri),
    ...mang2,
    ...mang1.slice(viTri)
  ];

  console.log(ketQua);
  return ketQua;
}
