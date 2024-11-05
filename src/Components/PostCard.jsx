import React from "react";

const PostCard = ({ post }) => {
  const { title, body } = post;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.body}>{body}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "1.2em",
    color: "#333",
  },
  body: {
    margin: 0,
    color: "#555",
  },
};

export default PostCard;
