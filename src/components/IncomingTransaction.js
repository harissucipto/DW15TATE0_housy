import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const colorStatus = {
  approve: "green",
  cancel: "red",
  pending: "#F7941E",
};

const users = [
  {
    user: "Haris Sucipto",
    typeOfRent: "Year",
    buktiTransfer: "bca.jpg",
    statusPayment: "approve",
  },
  {
    user: "Haris Sucipto",
    typeOfRent: "Year",
    buktiTransfer: "bni.jpg",
    statusPayment: "cancel",
  },
  {
    user: "Haris Sucipto",
    typeOfRent: "Year",
    buktiTransfer: "bptn.jpg",
    statusPayment: "pending",
  },
];

const IncomingTransaction = ({ status }) => {
  return (
    <div>
      <h1>Incoming Transaction</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.title}>No</TableCell>
              <TableCell style={styles.title}>Users</TableCell>
              <TableCell style={styles.title}>Type of Rent</TableCell>
              <TableCell style={styles.title}>Bukti Transfer</TableCell>
              <TableCell style={styles.title}>Status Payment</TableCell>
              <TableCell style={styles.title}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell style={styles.content}>{index + 1}</TableCell>
                <TableCell style={styles.content}>{user.user}</TableCell>

                <TableCell style={styles.content}>{user.typeOfRent}</TableCell>
                <TableCell style={styles.content}>
                  {user.buktiTransfer}
                </TableCell>
                <TableCell
                  style={{
                    ...styles.content,
                    color: colorStatus[user.statusPayment] || "yellow",
                  }}
                >
                  {user.statusPayment}
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Search color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const styles = {
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  content: {
    fontSize: "17px",
    color: "black",
  },
};

export default IncomingTransaction;
