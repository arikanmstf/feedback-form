import { ComponentStory, ComponentMeta } from '@storybook/react';

import handlers from '../../mocks/handlers';

import Home from './Home';

export default {
  title: 'Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers,
  },
};
