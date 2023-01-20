import { render } from '@testing-library/react';
import { useEffect } from 'react';

import { globalContextState } from '../../mocks/context';

import GlobalContextProvider, { useGlobalContext } from './GlobalContext';

const Consumer = ({ onMount }) => {
  const state = useGlobalContext();
  useEffect(() => {
    onMount(state);
  }, []);
  return <>Consumer</>;
};

describe(GlobalContextProvider, () => {
  it('should throw error when props are invalid', () => {
    const testFn = () =>
      render(<GlobalContextProvider initialState={null}>Children</GlobalContextProvider>);
    expect(testFn).toThrow();
  });

  it('should render correctly when props are valid', () => {
    const onMount = jest.fn();
    render(
      <GlobalContextProvider initialState={globalContextState}>
        <Consumer onMount={onMount} />
      </GlobalContextProvider>,
    );
    expect(onMount).toHaveBeenCalledWith(globalContextState);
  });
});
