import React from "react";
import ReactDOM from "react-dom/client";

import stylesComment from "./Comment.module.css";

export function Comment() {
  return (
    <div className={stylesComment.Content}>
      <div className={stylesComment.ContentDiv}>
        <input type="radio" name="radio" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>
    </div>
  );
}
