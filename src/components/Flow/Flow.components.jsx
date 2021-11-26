import React from "react";

import { ReactComponent as FlowSVG } from '../../assets/flow.svg';

import './Flow.styles.scss';

function Flow() {
  return (
    <div className='flow-wrapper'>
      <FlowSVG />
    </div>
  );
}

export default Flow;