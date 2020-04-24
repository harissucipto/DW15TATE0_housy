import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateOrder, orderReceived } from "../store/orders";

const ActionOwnerToTransaction = ({ trxId, handleCloseDetailTrx }) => {
  const dispatch = useDispatch();

  const handleApprove = () => {
    const { type } = dispatch(updateOrder(trxId, { status: "approve" }));
    if (type === orderReceived.type) {
      handleCloseDetailTrx();
    }
  };
  const handleCancel = () => {
    const { type } = dispatch(updateOrder(trxId, { status: "cancel" }));
    if (type === orderReceived.type) {
      handleCloseDetailTrx();
    }
  };

  return (
    <div style={styles.container}>
      <Button
        style={styles.button1}
        variant="contained"
        color="secondary"
        onClick={handleCancel}
      >
        Cancel
      </Button>{" "}
      <Button variant="contained" color="primary" onClick={handleApprove}>
        Approve
      </Button>
    </div>
  );
};

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
