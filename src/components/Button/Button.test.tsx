import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, {
  ButtonShape,
  ButtonSize,
  ButtonType,
  IButtonProps,
} from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: IButtonProps = {
  buttonType: ButtonType.Primary,
  size: ButtonSize.Large,
  shape: ButtonShape.Round,
  className: "fclass",
};

const disabledProps = {
  onClick: jest.fn(),
  disabled: true,
};

describe("test Button Compenent", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("fx-btn fx-btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(
      "fx-btn fx-btn-primary fx-btn-round-lg fx-btn-lg fclass"
    );
  });
  it("should render a link when buttonType equals link and href is provided", () => {
    const wrapper = render(
      <Button buttonType={ButtonType.Link} href="http://www.baidu.com">
        Nice
      </Button>
    );
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("fx-btn fx-btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("fx-btn");
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
