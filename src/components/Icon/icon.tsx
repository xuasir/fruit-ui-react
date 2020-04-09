import React from "react";
import classnames from "classnames";

export type Theme =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "default";
export type Icon =
  | "chevron-down"
  | "close"
  | "loading"
  | "radio-on"
  | "radio-off";
export type Size = "1x" | "2x" | "3x" | "4x" | "5x";

export interface IconProps {
  theme?: Theme;
  className?: string;
  icon?: Icon;
  spin?: boolean;
  size?: Size;
}

const Icon: React.FC<IconProps> = (props) => {
  let { theme, className, icon, spin, size, ...restProps } = props;

  const classes = classnames(
    "fruit-icons",
    {
      [`fx-icon-${icon}`]: icon,
      [`fx-icon-${theme}`]: theme,
      "fx-icon-spin": spin,
      [`fx-icon-${size}`]: size,
    },
    className
  );

  return <i className={classes} {...restProps}></i>;
};

Icon.defaultProps = {
  theme: "default",
  icon: "loading",
  spin: false,
  size: "1x",
};

export default Icon;
