import { Comment } from '../context/GlobalContext';
import { comments as commentsFixture } from '../mocks/fixtures';

import { getChartDataFromComment } from './charts';

describe('chart utils', () => {
  describe('getChartDataFromComment', () => {
    const cases = [
      ['empty array', [], []],
      ['undefined', undefined, []],
      ['null', null, []],
      [
        'array of comments',
        commentsFixture,
        [
          { name: '1 Stars', stars: 1, total: 1 },
          { name: '2 Stars', stars: 2, total: 2 },
          { name: '3 Stars', stars: 3, total: 3 },
          { name: '4 Stars', stars: 4, total: 6 },
          { name: '5 Stars', stars: 5, total: 2 },
        ],
      ],
    ];

    test.each(cases)(
      'given %s, should return correctly',
      (testName: string, comments: Comment[], expected) => {
        expect(getChartDataFromComment(comments)).toStrictEqual(expected);
      },
    );
  });
});
