import SendIcon from '@mui/icons-material/ChevronRight';
import { Button, TextField } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Page,
  ColumnContainer,
  RowContainer,
  RightAlignedContainer,
  StarInput,
} from '../../components';
import HeadLine from '../../components/HeadLine';
import { createComment } from '../../services/comment';
import { validateEmail } from '../../utils/validation';

const Home = () => {
  // hooks
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      content: '',
      stars: 0,
    },
  });
  const { push } = useRouter();

  // callbacks
  const onPost = async (data) => {
    setLoading(true);
    try {
      await createComment(data);
      await push('/comments');
    } catch (e) {
      // tools like rollbar automatically reports console.error
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  const title = 'Share your feedback with us!';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Page>
        <HeadLine label={title} />
        <ColumnContainer>
          <RowContainer>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!formErrors.name}
                  onChange={onChange}
                  value={value}
                  required
                  id="name"
                  label="Name"
                  helperText={formErrors.name ? 'Please enter your name' : undefined}
                />
              )}
              name="name"
            />

            <Controller
              control={control}
              rules={{ required: true, validate: validateEmail }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!formErrors.email}
                  onChange={onChange}
                  value={value}
                  required
                  id="email"
                  label="Email"
                  helperText={formErrors.email ? 'Please enter a valid email address' : undefined}
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              rules={{ required: true, validate: (nr) => +nr > 0 }}
              render={({ field: { onChange, value } }) => (
                <StarInput
                  onChange={onChange}
                  value={value}
                  error={!!formErrors.stars}
                  helperText={formErrors.stars ? 'Please select some stars' : undefined}
                />
              )}
              name="stars"
            />
          </RowContainer>

          <RowContainer>
            <div>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    error={!!formErrors.content}
                    style={{ alignSelf: 'stretch', width: '100%' }}
                    required
                    multiline
                    id="content"
                    rows={6}
                    label="Your comment"
                    helperText={formErrors.content ? 'Please enter your comment' : undefined}
                  />
                )}
                name="content"
              />
            </div>
          </RowContainer>
        </ColumnContainer>
        <RightAlignedContainer>
          <Button
            aria-label={loading ? 'Posting' : 'Post'}
            onClick={handleSubmit(onPost)}
            disabled={loading}
            endIcon={<SendIcon />}
            style={{ minWidth: 128 }}
            variant="contained"
          >
            {loading ? 'Posting' : 'Post'}
          </Button>
        </RightAlignedContainer>
      </Page>
    </>
  );
};

export default Home;
