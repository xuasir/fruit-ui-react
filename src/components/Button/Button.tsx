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
}

export enum IconPosition {
  Right = "right",
  Left = "left",
}

export interface IButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  buttonType?: ButtonType;
  href?: string;
  icon?: string;
  iconPosition?: IconPosition;
  children: React.ReactNode;
}

const FXButton: React.FC<IButtonProps> = (props) => {
  const {
    className,
    disabled,
    buttonType,
    href,
    size,
    children,
    icon,
    iconPosition,
  } = props;

  // class == fx-btn fx-btn-{size} fx-btn-{type}

  const classes = classNames(
    "fx-btn",
    {
      [`fx-btn-${size}`]: size,
      [`fx-btn-${buttonType}`]: buttonType,
      [`fx-btn-icon`]: icon,
      [`fx-btn-icon-${iconPosition}`]: iconPosition,
      [`fx-btn-disabled`]: disabled,
    },
    className
  );

  if (buttonType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

FXButton.defaultProps = {
  disabled: false,
  buttonType: ButtonType.Default,
  iconPosition: IconPosition.Left,
};

export default FXButton;
