import React from "react";
import * as moment from "moment";

import { reduceOrEmptyState, bool } from "../commonFunctions";

class Form extends React.Component {
  state = {};

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    const { state } = this.props;
    this.setState({
      ...state
    });
  };

  handleChange = e => {
    const val = e.target.type == "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: val });
  };

  updateState = ({ key, value }) => {
    this.setState({
      [key]: value
    });
  };

  isInvalid = () => {
    const { required, isInvalid } = this.props;
    const empty = required.some(
      id =>
        this.state[id] === "" ||
        this.state[id] === null ||
        typeof this.state[id] === "undefined"
    );

    if (empty) {
      return true;
    }

    const customValidation = isInvalid({ state: this.state });
    if (customValidation) {
      return true;
    }

    return false;
  };

  castFields = ({ values }) => {
    const { dates, bools, ints } = this.props;

    dates.forEach(dt => {
      if (dt in values) {
        values[dt] = moment(values[dt]).format("YYYY-MM-DD HH:mm:ss");
      }
    });

    ints.forEach(int => {
      if (int in values) {
        values[int] = parseInt(values[int]);
      }
    });

    bools.forEach(b => {
      if (b in values) {
        values[b] = bool(values[b]) ? true : false;
      }
    });

    return values;
  };

  submitForm = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const returnVal = this.gatherValues();
    onSubmit(returnVal);
  };

  gatherValues = () => {
    const reduce = this.props.reduceState;
    let values = reduceOrEmptyState({ reduce, state: this.state });
    values = this.castFields({ values });
    return {
      values,
      resetState: this.resetState
    };
  };

  render() {
    const { children } = this.props;
    return (
      <form className="form" onSubmit={this.submitForm}>
        {children({
          handleChange: this.handleChange,
          setState: this.updateState,
          state: this.state,
          isInvalid: this.isInvalid(),
          gatherValues: this.gatherValues
        })}
      </form>
    );
  }
}

Form.defaultProps = {
  state: [],
  dates: [],
  ints: [],
  bools: [],
  required: [],
  reduceState: true,
  isInvalid: () => {},
  onSubmit: () => {},
  isLoading: false
};

export default Form;
