import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }

  & > *:not(:nth-child(1)) {
    margin: 0 0 0 48px;
  }

  @media screen and (max-width: 480px) {
    & {
      display: block;
    }

    & > * {
      margin: 24px 0 0 0 !important;
      width: 100%;
    }
  }
`;

const ColumnContainer = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

export default ColumnContainer;
