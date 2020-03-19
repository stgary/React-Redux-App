import React from "react";
import { connect } from "react-redux";

const MissionList = props => {
  return (
    <>
      {props.error ? (
      <div>{props.error}</div> 
      ) : ( props.missions.map(mission => (
        <div>{mission.mission_name}</div>
      )))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    missions: state.missions,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(MissionList);
