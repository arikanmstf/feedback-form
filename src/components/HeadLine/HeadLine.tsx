import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const HeadLine = ({ label, right: Right }: { label: string; right?: ReactNode }) => {
  return (
    <Wrapper>
      <Typography aria-label={label} variant="h4">
        {label}
      </Typography>
      {Right}
    </Wrapper>
  );
};

export default HeadLine;
