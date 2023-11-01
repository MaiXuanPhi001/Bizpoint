export const formatStringToMoney = (str: number | string): string => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return isNaN(parseFloat(result)) ? '0 ' : result;
};
