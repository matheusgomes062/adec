import React from 'react'
import { StoryFn } from '@storybook/react'
import Sidebar from '../../components/sidebar' // Update the path accordingly

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

const Template: StoryFn = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  textToCopy: 'Hello, Storybook!',
}
