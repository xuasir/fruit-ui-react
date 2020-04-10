import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

export type AnimationName =
  | "zoom-in-top"
  | "zoom-in-bottom"
  | "zoom-in-left"
  | "zoom-in-right";

interface BaseProps {
  animation?: AnimationName;
}

export type TransitionProps = BaseProps & CSSTransitionProps;

const Transition: React.FC<TransitionProps> = (props) => {
  let { children, animation, classNames, ...restProps } = props;
  return (
    <CSSTransition
      classNames={animation ? animation : classNames}
      {...restProps}
    >
      {children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  appear: true,
  unmountOnExit: true,
};

export default Transition;
