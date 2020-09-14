import React from 'react';
import './InfoBox.css';
import { Card, Typography, CardContent } from '@material-ui/core';

function InfoBox({
  active,
  title,
  cases,
  isYellow,
  isGreen,
  isRed,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${
        isYellow && 'infoBox--yellow'
      }
      ${isGreen && 'infoBox--green'} ${isRed && 'infoBox--red'} `}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2
          className={` infoBox__cases 
          ${isRed && 'infoBox__cases--red'} ${
            isYellow && 'infoBox__cases--yellow'
          }`}
        >
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
