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
    <div className="rumah">
      <HeaderDetail />
      <div className="sub-rumah">
        <FormAddProperty />
      </div>
    </div>
  );
};

export default AddProperty;
