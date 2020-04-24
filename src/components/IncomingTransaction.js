import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { HOME } from "../constants/routes";
import { getOrders, loadOrders } from "../store/orders";
import { checkIsOwner, getUser } from "../store/auth";
import Loading from "./Loading";
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
  const { list, loading, message } = useSelector(getOrders);
  const dispatch = useDispatch();
  const isOwner = useSelector(checkIsOwner);
  const { role } = useSelector(getUser);

  useEffect(() => {
    if (isOwner) {
      dispatch(loadOrders());
    }
  }, [dispatch, isOwner]);

  if (!isOwner) return <Redirect to={HOME} />;

  return (
    <div>
      {!loading && !list.length ? (
        <div>
          <h1>Incoming Transaction</h1>
          <hr />
          <h3>Tidak ada data</h3>
        </div>
      ) : null}
      {loading && <Loading />}

      {message && <h3>{message}</h3>}

      {!loading && list.length ? (
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
                {list.map((trx, index) => (
                  <TableRow key={trx.id}>
                    <TableCell style={styles.content}>{index + 1}</TableCell>
                    <TableCell style={styles.content}>
                      {trx?.User?.username}
                    </TableCell>
                    <TableCell style={styles.content}>
                      {trx?.House?.typeRent}
                    </TableCell>
                    <TableCell style={styles.content}>
                      {trx?.attachment || "-"}
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
                      <DetailTrx data={trx} userStatus={role} id={trx.id} />
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
