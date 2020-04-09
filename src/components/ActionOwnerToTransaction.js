import React from "react";
import { Button } from "@material-ui/core";

function ActionOwnerToTransaction() {
  return (
    <div style={styles.container}>
      <Button style={styles.button1} variant="contained" color="secondary">
        Cancel
      </Button>{" "}
      <Button variant="contained" color="primary">
        Approve
      </Button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  button1: {
    marginRight: "12px",
  },
};

export default ActionOwnerToTransaction;
