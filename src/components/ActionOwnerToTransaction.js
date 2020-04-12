import React from "react";
import { useStoreActions } from "easy-peasy";
import { Button } from "@material-ui/core";

const ActionOwnerToTransaction = ({ trxId, handleCloseDetailTrx }) => {
  const { updateTrxFromOwner } = useStoreActions(({ myBooking }) => myBooking);

  const handleApprove = () => {
    const resp = updateTrxFromOwner({
      trxId,
      status: "approve",
    });
    if (!Boolean(resp)) {
      console.log("gagal aksi");
      return;
    }
    handleCloseDetailTrx();
  };
  const handleCancel = () => {
    const resp = updateTrxFromOwner({
      trxId,
      status: "cancel",
    });

    if (!Boolean(resp)) {
      console.log("gagal aksi");
      return;
    }
    handleCloseDetailTrx();
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
