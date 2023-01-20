import BackIcon from '@mui/icons-material/ChevronLeft';
import { Typography, Button } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

import { Page, RowContainer, HeadLine, Box, StarInput } from '../../components';
import { Comment } from '../../context/GlobalContext';
import { getComments } from '../../services/comment';
import theme from '../../theme';
import { getChartDataFromComment } from '../../utils/charts';

const Comments: NextPage<{ comments?: Comment[] }> = ({ comments }) => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const data = getChartDataFromComment(comments);

  const onGoBack = async () => {
    setLoading(true);

    try {
      await push('/');
    } finally {
      setLoading(false);
    }
  };
  const title = 'Feedback results:';

  return (
    comments && (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Page>
          <HeadLine
            label={title}
            right={
              <Button
                aria-label={loading ? 'Please wait' : 'Go back'}
                disabled={loading}
                variant="outlined"
                onClick={onGoBack}
                startIcon={<BackIcon />}
              >
                {loading ? 'Please wait' : 'Go back'}
              </Button>
            }
          />
          <>
            <ResponsiveContainer width="50%" minWidth={240} height={240}>
              <BarChart width={400} height={240} data={data}>
                {/* issue with material ui types */}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <Bar dataKey="total" fill={theme.palette.primary.main} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={false} />
              </BarChart>
            </ResponsiveContainer>
          </>
          {comments.length > 0 && (
            <>
              <Typography variant="h6">Latest comments:</Typography>
              <RowContainer>
                {comments.map((comment) => (
                  <Box key={comment.id}>
                    <Typography color="primary" variant="subtitle1">
                      {`${comment.name} (${comment.email})`}
                    </Typography>
                    {comment.createdAt && (
                      <Typography variant="subtitle2">
                        {new Date(comment.createdAt).toLocaleString('en-UK')}
                      </Typography>
                    )}
                    <StarInput value={comment.stars} disabled />
                    <Typography variant="subtitle1">{comment.content}</Typography>
                  </Box>
                ))}
              </RowContainer>
            </>
          )}
        </Page>
      </>
    )
  );
};

// fetch Comments page specific data here,
// so the other pages won't need to do the api call/
// our _app.tsx will handle this call and pass the props.

Comments.getInitialProps = async () => {
  const comments = await getComments();
  return {
    comments,
  };
};

export default Comments;
