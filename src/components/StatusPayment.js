import React from "react";
import { Button } from "@material-ui/core";

const textStatus = {
  cancel: "Waiting Payment",
  pending: "Waiting Approve",
  approve: "Approve",
};

const colorStatus = {
  cancel: "red",
  pending: "#F7941E",
  approve: "green",
};

const StatusPayment = ({ status = "notYet" }) => {
  return (
    <div style={{ color: colorStatus[status] }}>
      <Button variant="outlined" color="inherit" size="small">
        {textStatus[status] || status}
      </Button>
    </div>
  );
};

export default StatusPayment;
