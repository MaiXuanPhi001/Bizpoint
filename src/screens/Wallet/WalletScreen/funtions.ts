export const welcome = () => {
  const time = new Date().getHours();
  if (time < 12) {
    return 'Chào buổi sáng';
  } else if (time < 18) {
    return 'Chào buổi chiều';
  } else {
    return 'Chào buổi tối';
  }
};
