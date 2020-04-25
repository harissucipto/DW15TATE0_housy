import React from "react";
import { Button } from "@material-ui/core";

const textStatus = {
  cancel: "cancel",
  pending: "Pending",
  approve: "Approve",
  "waiting payment": "Wating Payment",
};

const colorStatus = {
  cancel: "red",
  pending: "#F7941E",
  approve: "green",
  "waiting payment": "red",
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
