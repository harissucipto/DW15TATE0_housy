import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import { RadioButtonUnchecked, RadioButtonChecked } from "@material-ui/icons";

import Logo from "../images/logo.PNG";
import BookingCustomer from "./BookingCustomer";
import Pay from "./Pay";
import StatusPayment from "./StatusPayment";
import ActionOwnerToTransaction from "./ActionOwnerToTransaction";

const BookingItem = ({
  property,
  date,
  checkIn,
  checkOut,
  invoiceImage,
  status = "cancel",
  invoiceNumber,
  dateInvoice,
  userStatus,
}) => {
  const isNotApprove = status !== "approve";
  const isOwner = userStatus === "owner";

  return (
    <Card variant="outlined" style={styles.container}>
      <CardContent>
        <div style={styles.containerContent}>
          <Grid container>
            <Grid item md={9} style={styles.containerLogo}>
              <img src={Logo} width={138} alt="logo" />
            </Grid>
            <Grid item md={3}>
              <div style={styles.logo}>
                <h1>{isNotApprove ? "Booking" : "INVOICE"}</h1>
                <h3>{isNotApprove ? date : dateInvoice}</h3>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={4}>
              <div>
                <h2>{property.name}</h2>
                <p>{property.address}</p>
              </div>

              <StatusPayment status={status} />
            </Grid>

            <Grid item md={5}>
              <Grid container spacing={2}>
                <Grid item xs={2} style={styles.unChecked}>
                  <RadioButtonUnchecked color="primary" />
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={styles.titleSub}>Check-in</span>
                      <br />
                      <span>{checkIn}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={styles.titleSub}>Amenities</span>
                      <br />
                      <span>{property.amenities.join(", ")}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} style={styles.unChecked}>
                  <RadioButtonChecked color="primary" />
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={styles.titleSub}>Check-out</span>
                      <br />
                      <span>{checkOut}</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={styles.titleSub}>Type of Rent</span>
                      <br />
                      <span>{property.typeOfRent}</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={3}>
              <Grid container>
                <Grid item xs={12} style={styles.buktiPembayaran}>
                  <div
                    style={{
                      ...styles.imagePembayaran,
                      backgroundImage: `url("${
                        isNotApprove ? "" : invoiceImage
                      }")`,
                    }}
                  />
                  {isNotApprove && <p>Upload Payment Proof</p>}
                  {!isNotApprove && <h2>{invoiceNumber}</h2>}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <BookingCustomer status={status} />
        <br />

        <Grid container>
          <Grid item md={8} />
          <Grid item md={4}>
            <Grid container>
              {status === "cancel" && !isOwner ? <Pay /> : null}
              {status !== "approve" && isOwner ? (
                <ActionOwnerToTransaction />
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const styles = {
  container: {
    marginBottom: "20px",
  },
  containerContent: {
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  containerLogo: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    textAlign: "center",
  },
  unChecked: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleSub: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  buktiPembayaran: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
    color: "grey",
  },
  imagePembayaran: {
    width: "139px",
    height: "139px",
    backgroundColor: "grey",
    backgroundSize: "cover",
  },
};

export default BookingItem;
