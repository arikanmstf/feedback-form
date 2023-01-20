import { waitFor, screen } from '@testing-library/react';
import { useEffect, useState } from 'react';

import { getComments } from '../../services/comment';
import renderWithProviders from '../../test/utils/render';

import Comments from './Comments';

const Template = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setComments(await getComments());
    };

    void fetch();
  }, []);

  return <Comments comments={comments} />;
};

describe('Comments', () => {
  it('should render correctly', async () => {
    const { container } = renderWithProviders(<Template />);
    await waitFor(() => {
      expect(screen.getByText('Tom (tom@gmail.com)')).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
