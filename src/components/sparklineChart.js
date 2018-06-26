import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function avg(arrayData){
  return  _.round(_.sum(arrayData))/arrayData.length;
}

export default (props) => {
  return(
    <div>
    <Sparklines data={props.data} width={200} height={100} margin={5}>
     <SparklinesLine color={props.color} />
     <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{avg(props.data)}{props.units}</div>
    </div>
  );

}
