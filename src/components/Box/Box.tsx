import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px 0;
`;

const Hr = styled.hr`
  width: 50%;
`;

const Box = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Hr />
    </Wrapper>
  );
};

export default Box;
