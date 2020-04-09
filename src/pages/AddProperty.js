import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import FormAddProperty from "../components/FormAddProperty";

const AddProperty = () => {
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
