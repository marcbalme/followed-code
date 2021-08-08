import { ComponentStory, ComponentMeta } from '@storybook/react';
import H2 from '.';

export default {
  title: 'Example/title',
  component: H2,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = args => <H2 {...args}>Titre H2</H2>;

export const TitleH2 = Template.bind({});
