import React from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Info = "info",
  Wraning = "wraning",
  Error = "error",
}

interface BaseProps {
  type: AlertType;
  title?: string;
  description: string;
  closeable?: boolean;
  showIcon?: boolean;
  closeText?: string;
}

const Alert: React.FC<BaseProps> = (props) => {
  let { type, title, description, closeable, showIcon } = props;
  let wrapClasses = classNames("fx-alert", {
    [`fx-alert-${type}`]: type,
  });
  return (
    <div className={wrapClasses}>
      {/* icon部分 */}
      <div className="fx-alert-content">
        {title ? <span className="fx-alert-title">{title}</span> : ""}
        <p className="fx-alert-description">{description}</p>
        {/* 关闭部分 */}
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: AlertType.Info,
  closeable: true,
  showIcon: false,
};

export default Alert;
