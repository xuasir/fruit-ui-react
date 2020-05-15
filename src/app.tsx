import React from 'react'
import Button, {
  ButtonSize,
  ButtonType,
  ButtonShape
} from './components/Button'

function App() {
  return (
    <div className="App" style={{ padding: '10px' }}>
      <Button
        shape={ButtonShape.Round}
        block
        buttonType={ButtonType.Primary}
        size={ButtonSize.Large}>
        primary large
      </Button>
      <Button shape={ButtonShape.Round} buttonType={ButtonType.Default}>
        default normal
      </Button>
      <Button buttonType={ButtonType.Dashed}>default normal</Button>
      <Button buttonType={ButtonType.Danger} size={ButtonSize.Small}>
        danger small
      </Button>
      <Button buttonType={ButtonType.Link} href="http://www.baidu.com">
        button link
      </Button>
      <Button buttonType={ButtonType.Link} href="http://www.baidu.com" disabled>
        button link disabled
      </Button>
      <Button.group size={ButtonSize.Large}>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Button.group>
    </div>
  )
}

export default App
