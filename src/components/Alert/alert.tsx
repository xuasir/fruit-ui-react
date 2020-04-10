import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export type AlertType = "success" | "info" | "warning" | "error";

interface BaseProps {
  type: AlertType;
  title?: string;
  description: string;
  closeable?: boolean;
  showIcon?: boolean;
  closeText?: string;
}

const Alert: React.FC<BaseProps> = (props) => {
  let {
    type,
    title,
    description,
    closeable,
    showIcon,
    closeText,
    ...restPorps
  } = props;
  let wrapClasses = classNames("fx-alert", {
    [`fx-alert-${type}`]: type,
  });

  function renderCloseBtn(): React.ReactNode {
    return (
      <>
        {closeText ? (
          <span className="fx-alert-close_btn">{closeText}</span>
        ) : (
          <Icon className="fx-alert-close_btn" icon="close" />
        )}
      </>
    );
  }
  return (
    <div className={wrapClasses} {...restPorps}>
      {showIcon ? (
        <Icon
          className="fx-alert-icon"
          icon={type}
          size={title ? "2x" : "1x"}
        />
      ) : (
        ""
      )}
      <div className="fx-alert-content">
        {title ? <span className="fx-alert-title">{title}</span> : ""}
        <p className="fx-alert-description">{description}</p>
        {closeable ? renderCloseBtn() : ""}
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: "info",
  closeable: true,
  showIcon: false,
};

export default Alert;
