import React from 'react'
import { StoryFn } from '@storybook/react'
import WatchThis from '../../components/watch-this' // Update the path accordingly

export default {
  title: 'Components/WatchThis',
  component: WatchThis,
}

const Template: StoryFn = (args) => <WatchThis {...args} />

export const Default = Template.bind({})
Default.args = {}
