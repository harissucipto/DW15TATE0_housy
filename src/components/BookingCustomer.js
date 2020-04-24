import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Grid,
} from "@material-ui/core";

const colorStatus = {
  cancel: "red",
  pending: "#F7941E",
  approve: "green",
};

const BookingCustomer = ({ status, tenants }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={styles.title}>No</TableCell>
            <TableCell style={styles.title}>Full Name</TableCell>
            <TableCell style={styles.title}>Gender</TableCell>
            <TableCell style={styles.title} colSpan={2}>
              Phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.map((customer, index) => (
            <TableRow key={customer.id}>
              <TableCell style={styles.content}>{index + 1}</TableCell>
              <TableCell style={styles.content}>{customer?.fullName}</TableCell>
              <TableCell style={styles.content}>{customer?.gender}</TableCell>
              <TableCell style={styles.content}>{customer?.phone}</TableCell>
              <TableCell style={styles.title}>
                <Grid container>
                  <Grid item md={6} style={styles.betweenText}>
                    <div>Long time rent </div>
                    <div>:</div>
                  </Grid>
                  <Grid item md={6}>
                    {customer.longTimeRent}
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4} />
            <TableCell style={styles.title}>
              <Grid container>
                <Grid item md={6} style={styles.betweenText}>
                  <div>Total</div>
                  <div>:</div>
                </Grid>
                <Grid
                  item
                  md={6}
                  style={{ color: colorStatus[status] || "red" }}
                >
                  {tenants.reduce((acc, value) => value.total + acc, 0)}
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

const styles = {
  betweenText: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "10px",
  },
  container: {
    marginBottom: "10px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  content: {
    fontSize: "20px",
    color: "grey",
  },
};

export default BookingCustomer;
