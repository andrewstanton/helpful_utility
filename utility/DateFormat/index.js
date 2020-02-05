import React, { Fragment } from "react";

import * as moment from "moment";

const formatDate = ({ children, format = "LL" }) =>
  children ? moment(children).format(format) : null;

export const DateFormat = props => <Fragment>{formatDate(props)}</Fragment>;
