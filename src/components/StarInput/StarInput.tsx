import StarIcon from '@mui/icons-material/Stars';
import { IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import theme from '../../theme';

const StarInput = ({
  disabled,
  error,
  helperText,
  numberOfStars = 5,
  onChange,
  value = 0,
}: {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  numberOfStars?: number;
  onChange?: (nrOfSelected: number) => void;
  value?: number;
}) => {
  const [nrOfSelected, setNrOfSelected] = useState(value);
  useEffect(() => {
    onChange?.(nrOfSelected);
  }, [nrOfSelected]);

  /* eslint-disable @typescript-eslint/ban-ts-comment */
  return (
    <section>
      {/* Generate N number of Star buttons, each of them represents value of the star */}
      {Array.from(Array(numberOfStars).keys()).map((index) => (
        <IconButton
          // problem with material ui palette types
          // @ts-ignore
          style={{ color: index + 1 <= nrOfSelected ? theme.palette.success.main : undefined }}
          disabled={disabled}
          onClick={() => {
            setNrOfSelected(index + 1);
          }}
          aria-label={`Give ${index + 1} stars`}
          key={index}
        >
          <StarIcon />
        </IconButton>
      ))}
      <div style={{ marginLeft: '14px' }}>
        <Typography variant="caption" color={error ? 'error' : undefined}>
          {helperText}
        </Typography>
      </div>
    </section>
  );
};

export default StarInput;
