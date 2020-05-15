import React from 'react'
import { render } from '@testing-library/react'
import Buttton from './index'

describe('test button group component', () => {
  it('should render the button-group', () => {
    const wrapper = render(
      <Buttton.group>
        <Buttton>button1</Buttton>
        <Buttton>button2</Buttton>
        <Buttton>button3</Buttton>
      </Buttton.group>
    )
    console.log(wrapper)
  })
})
