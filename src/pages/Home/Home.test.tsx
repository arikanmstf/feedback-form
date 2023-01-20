import renderWithProviders from '../../test/utils/render';

import Home from './Home';

describe('Home', () => {
  it('should render correctly', () => {
    const { container } = renderWithProviders(<Home />);
    expect(container).toMatchSnapshot();
  });
});
