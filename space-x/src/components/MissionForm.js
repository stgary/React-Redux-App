import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const MissionForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  console.log(props);
  return (
    <>
      {props.isFetchingData ? (
        <div>**We are fetching data**</div>
      ) : (
        <button onClick={handleGetData}>Get Data</button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(MissionForm);
