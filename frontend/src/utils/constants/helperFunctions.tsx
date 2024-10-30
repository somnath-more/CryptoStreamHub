import { GraphDataPoint } from 'components/organisms/WishlistCard';

export const getProfitOrLossPercentage = (data: GraphDataPoint[]) => {
  const lowest = Math.min(...data.map((element) => element.amount));
  const first = data[0].amount;
  const last = data[data.length - 1].amount;
  const percentage = ((last - first) / first) * 100;
  return {
    lowest,
    percentage,
  };
};
export const convertToShortFormNumber = (number: number) => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number);
};
