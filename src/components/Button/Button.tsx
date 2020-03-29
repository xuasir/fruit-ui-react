import React from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Default = "default",
  Primary = "primary",
  Danger = "danger",
  Link = "link",
  Dashed = "dashed",
}

export enum IconPosition {
  Right = "right",
  Left = "left",
}

export enum ButtonShape {
  Round = "round",
  Circle = "circle",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  buttonType?: ButtonType;
  href?: string;
  icon?: string;
  iconPosition?: IconPosition;
  children: React.ReactNode;
  block?: boolean;
  shape?: ButtonShape;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type IButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    disabled,
    buttonType,
    href,
    size,
    children,
    icon,
    iconPosition,
    block,
    shape,
    ...rest
  } = props;

  // class == fx-btn fx-btn-{size} fx-btn-{type}

  const classes = classNames(
    "fx-btn",
    {
      [`fx-btn-${size}`]: size,
      [`fx-btn-${buttonType}`]: buttonType,
      [`fx-btn-icon`]: icon,
      [`fx-btn-icon-${iconPosition}`]: icon && iconPosition,
      [`fx-btn-${shape}-${size ? size : "normal"}`]: shape,
      [`fx-btn-disabled`]: buttonType === ButtonType.Link && disabled,
      "fx-btn-block": block,
    },
    className
  );

  if (buttonType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  buttonType: ButtonType.Default,
  iconPosition: IconPosition.Left,
};

export default Button;
