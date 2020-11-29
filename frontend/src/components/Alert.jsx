import React, { useEffect } from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    alerts &&
    alerts.map((alert) => (
      <div className={`alert  ${alert.alertType} alert-content`} role="alert">
        {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
