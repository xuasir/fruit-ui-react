import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";

function App() {
  return (
    <div className="App" style={{ padding: "10px" }}>
      <Button buttonType={ButtonType.Primary} size={ButtonSize.Large}>
        primary large
      </Button>
      <Button buttonType={ButtonType.Default}>default normal</Button>
      <Button buttonType={ButtonType.Default} disabled>
        default normal disabled
      </Button>
      <Button buttonType={ButtonType.Danger} size={ButtonSize.Small}>
        danger small
      </Button>
      <Button buttonType={ButtonType.Link} href="http://www.baidu.com">
        button link
      </Button>
      <Button buttonType={ButtonType.Link} href="http://www.baidu.com" disabled>
        button link disabled
      </Button>
    </div>
  );
}

export default App;
