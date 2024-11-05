import React from "react";
import FakeApiApp from "./Components/FakeApiApp";

const App = () => {
  return (
    <div style={styles.container}>
      <FakeApiApp />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eef2f3",
    minHeight: "100vh",
  },
};

export default App;
