import React from "react";
import classnames from "classnames";

export type IconTheme =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "default";
export type IconCategory =
  | "chevron-down"
  | "close"
  | "loading"
  | "radio-on"
  | "radio-off";
export type IconSize = "1x" | "2x" | "3x" | "4x" | "5x";

export interface IconProps {
  theme?: IconTheme;
  className?: string;
  icon?: IconCategory;
  spin?: boolean;
  size?: IconSize;
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
