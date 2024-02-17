const randomIndex = () => {
  return Math.floor(Math.random() * 6);
};

const renderPrice = (number: number) => {
  const absNumber = Math.abs(number);
  if (absNumber < 1000) {
    return `${number} nghìn`;
  } else if (absNumber >= 1000) {
    return `${number / 1000} triệu`;
  }
};

export { randomIndex, renderPrice };
