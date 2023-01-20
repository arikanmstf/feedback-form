import styled from 'styled-components';

const FlexWrapper = styled.div`
  background-color: #fff;
  padding: 24px;
  max-width: 800px;
  margin: 10px auto;
  border-radius: 16px;
`;

const Page = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

export default Page;
