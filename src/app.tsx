import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button buttonType={ButtonType.Primary} size={ButtonSize.Large}>
        hi
      </Button>
    </div>
  );
}

export default App;
