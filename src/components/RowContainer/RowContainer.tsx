import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    flex: 1;
  }

  & > *:not(:nth-child(1)) {
    margin: 16px 0 0 0;
  }
`;

const RowContainer = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

export default RowContainer;
