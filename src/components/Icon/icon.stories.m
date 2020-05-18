import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';
import Icon from './icon'

<Meta title='基础/Icon' component={Icon} />

# 图标演示

* #### 不同主题色的Icon

<Preview>
  <Story name="不同主题色的Icon" height="100px" >
    <>
      <Icon icon="loading" />
      <Icon theme="primary" icon="loading" spin size="2x" />
      <Icon theme="secondary" icon="close" />
      <Icon theme="success" icon="radio-off" />
      <Icon theme="info" icon="radio-on" />
      <Icon theme="warning" icon="chevron-down" />
      <Icon theme="dark" icon="loading" />
      <Icon theme="light" icon="loading" />
      <Icon theme="danger" icon="loading" />
    </>
  </Story>
</Preview>

## Props

<Props of={Icon} />