export const converMoneyString = (num: string) => {
  var a = [
    '',
    'một ',
    'hai ',
    'ba ',
    'bốn ',
    'năm ',
    'sáu ',
    'bảy ',
    'tám ',
    'chín ',
    'mười ',
    'mười một ',
    'mười hai ',
    'mười ba ',
    'mười bốn ',
    'mười lăm ',
    'mười sáu ',
    'mười bảy ',
    'mười tám ',
    'mười chín ',
  ];
  var b = ['', '', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];

  if ((num = num.toString()).length > 9) return 'overflow';
  const n: any = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = '';
  str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'đơn vị ' : '';
  str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'chục ' : '';
  str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'nghìn ' : '';
  str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'trăm ' : '';
  str += n[5] != 0 ? (str != '' ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
  return str;
};
