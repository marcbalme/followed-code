import { ComponentStory, ComponentMeta } from '@storybook/react';
import H1 from '.';

export default {
  title: 'Example/H1',
  component: H1,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = args => <H1 {...args}>Titre H1</H1>;

export const Title = Template.bind({});
