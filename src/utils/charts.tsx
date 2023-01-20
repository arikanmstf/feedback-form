import { Comment, CommentAccumulation } from '../context/GlobalContext';

type GetChartDataFromComment = (comments?: Comment[]) => CommentAccumulation[];

export const getChartDataFromComment: GetChartDataFromComment = (
  comments = [],
): CommentAccumulation[] => {
  if (!comments) {
    return [];
  }
  // generate object contains total nr of stars as { [value of star]: [nr of stars voted] }
  const numberOfStars: Record<number, number> = comments.reduce(
    (previousValue: Record<number, number>, currentValue: Comment): Record<number, number> => {
      return {
        ...previousValue,
        [currentValue.stars]: (previousValue[currentValue.stars] || 0) + 1,
      };
    },
    {},
  );

  // create chart friendly array from data
  return Object.keys(numberOfStars)
    .map((keyOfStar) => ({
      name: `${keyOfStar} Stars`,
      total: numberOfStars[keyOfStar],
      stars: +keyOfStar,
    }))
    .sort((first, second) => first.stars - second.stars);
};
