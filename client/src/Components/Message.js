import React from "react";
import Styles from "./message.module.scss";

const getStyle = (props) => {
  let base = "";
  if (props.message.msgError) {
    base = Styles.mine;
  } else {
    base = Styles.yours;
  }
  return base;
};
const Message = (props) => {
  return (
    <div className={getStyle(props)} role="alert">
      {props.message.msgBody}
    </div>
  );
};

export default Message;
