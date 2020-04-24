import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import FormAddProperty from "../components/FormAddProperty";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkIsOwner } from "../store/auth";
import { HOME } from "../constants/routes";

const AddProperty = () => {
  const isOwner = useSelector(checkIsOwner);
  if (!isOwner) return <Redirect to={HOME} />;

  return (
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <FormAddProperty />
      </div>
    </div>
  );
};

const styles = {
  container: { marginLeft: "4rem", marginBottom: "5rem" },
};

export default AddProperty;
