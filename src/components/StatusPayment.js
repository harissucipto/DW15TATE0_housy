import React from "react";
import { Button } from "@material-ui/core";

const textStatus = {
  notYet: "Waiting Payment",
  approve: "Waiting Approve",
  approved: "Approve",
};

const colorStatus = {
  notYet: "secondary",
  approve: "inherit",
  approved: "primary",
};

const StatusPayment = ({ status = "notYet" }) => {
  return (
    <Button
      variant="outlined"
      color={colorStatus[status] || "secondary"}
      size="small"
    >
      {textStatus[status] || status}
    </Button>
  );
};

export default StatusPayment;
