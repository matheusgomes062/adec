import React from 'react'
import { StoryFn } from '@storybook/react'
import CopyButton from '../../components/copy-button' // Update the path accordingly
import CopyButtonProps from '../../components/copy-button'

export default {
  title: 'Components/CopyButton',
  component: CopyButton,
}

const Template: StoryFn<typeof CopyButtonProps> = (args) => (
  <CopyButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  textToCopy: 'Hello, Storybook!',
}
