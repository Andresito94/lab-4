import React from "react";

const PostForm = ({ newPost, handleInputChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <h1>Post Form</h1>
        <label htmlFor="title" style={styles.label}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="body" style={styles.label}>
          Body:
        </label>
        <input
          type="body"
          id="body"
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
      </div>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: "24px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#808080",
  },
  formGroup: {
    marginBottom: "16px",
    color: "#fff",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1em",
    backgroundColor: "#A9A9A9",
  },
  textarea: {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1em",
    resize: "vertical",
    minHeight: "100px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#000000",
    color: "#fff",
    fontSize: "1em",
    cursor: "pointer",
  },
};

export default PostForm;
