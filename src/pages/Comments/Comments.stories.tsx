import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';

import handlers from '../../mocks/handlers';
import { getComments } from '../../services/comment';

import Comments from './Comments';

export default {
  title: 'Comments',
  component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setComments(await getComments());
    };

    void fetch();
  }, []);

  return <Comments comments={comments} />;
};

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers,
  },
};
