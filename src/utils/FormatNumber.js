export const formatNumber = (number) => {
  let formattedNumber;

  if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    formattedNumber = (number / 1000).toFixed(1) + "K";
  } else {
    formattedNumber = number;
  }

  return formattedNumber;
};
