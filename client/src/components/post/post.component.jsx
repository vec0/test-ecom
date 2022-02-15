import React from "react";
import "./post.styles.scss";
const Card = ({ children }) => <div className="card">{children}</div>;

export default function Post({ postId }) {
  return (
    <div>
      <Card></Card>
    </div>
  );
}
