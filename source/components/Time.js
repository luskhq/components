import React from "react";
import PropTypes from "prop-types";

import c from "classnames";
import s from "../stylesheet";

import moment from "moment";

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selfUpdate: moment().diff(moment(this.props.dateTime), "weeks") < 1,
    };
  }

  componentDidMount() {
    if (this.state.selfUpdate) {
      this.interval = setInterval(() => this.forceUpdate(), 5 * 60 * 1000); // Update every 5 minutes
    }
  }

  componentWillUnmount() {
    if (this.state.selfUpdate) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { dateTime, ...otherProps } = this.props;
    const time = moment(dateTime);

    return (
      <time
        {...otherProps}
        dateTime={dateTime}
        title={time.format("dddd, MMMM Do YYYY, h:mm:ss a")}
        className={c(s.whiteSpace("nowrap"))}>
        {time.calendar(null, {
          sameDay: "[today at] h:mm a",
          nextDay: "[tomorrow]",
          nextWeek: "[next] dddd",
          lastDay: "[yesterday at] h:mm a",
          lastWeek: "[last] dddd",
          sameElse: "Do MMMM YYYY",
        })}
      </time>
    );
  }
}

Time.propTypes = {
  dateTime: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Time;
