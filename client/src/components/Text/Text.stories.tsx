import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '.';
import { appStyles } from '../../styles/appStyles';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => (
  <Text {...args}>test de stotybook</Text>
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  theme: appStyles.colors.orange
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  theme: appStyles.colors.orange,
  bold: true
};

export const BoldItalic = Template.bind({});
BoldItalic.args = {
  size: 'large',
  bold: true,
  italic: true
};
