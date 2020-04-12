import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@material-ui/core";
import { useStoreState, useStoreActions } from "easy-peasy";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";

import { HOME } from "../constants/routes";
import DetailTrx from "./DetailTrx";

const colorStatus = {
  approve: "green",
  cancel: "red",
  waitingPayment: "red",
  pending: "#F7941E",
};

const statusTrx = {
  waitingPayment: "waiting payment",
};

const IncomingTransaction = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);
  const { getMyIncomingTransaction } = useStoreActions(
    ({ myBooking }) => myBooking
  );
  const { user } = useStoreState(({ users }) => users);
  const { data } = useStoreState(({ myBooking }) => myBooking);

  useEffect(() => {
    if (user && user.id) {
      const respon = getMyIncomingTransaction(user.id);
      setData(respon);
      setLoading(false);
    }
  }, [user, getMyIncomingTransaction, data]);

  if (!Boolean(user)) return <Redirect to={HOME} />;

  return (
    <div>
      {!loading && !Boolean(listData.length) ? (
        <div>
          <h1>Incoming Transaction</h1>
          <hr />
          <h3>Tidak ada data</h3>
        </div>
      ) : null}
      {loading && <Loading />}

      {!loading && Boolean(listData.length) ? (
        <>
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
                {listData.map((trx, index) => (
                  <TableRow key={trx.id}>
                    <TableCell style={styles.content}>{index + 1}</TableCell>
                    <TableCell style={styles.content}>
                      {trx?.tenant.fullName}
                    </TableCell>
                    <TableCell style={styles.content}>
                      {trx?.property?.typeOfRent}
                    </TableCell>
                    <TableCell style={styles.content}>
                      {trx?.invoice?.buktiTransfer || "-"}
                    </TableCell>
                    <TableCell
                      style={{
                        ...styles.content,
                        color: colorStatus[trx?.status] || "yellow",
                      }}
                    >
                      {statusTrx[trx?.status] || trx?.status}
                    </TableCell>
                    <TableCell>
                      <DetailTrx
                        data={trx}
                        userStatus={user?.status}
                        id={trx.id}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
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
