import { ComponentStory, ComponentMeta } from '@storybook/react';

import { comments } from '../../mocks/fixtures';

import Comments from './Comments';

export default {
  title: 'Comments',
  component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = () => {
  return <Comments comments={comments} />;
};

export const Default = Template.bind({});
