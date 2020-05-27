import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface WeatherCardProps {
    day: string,
    high: number,
    low: number,
    rain: number
}

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    // change the color below to a cream
    backgroundColor: "#FFFEF2",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
});

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.day}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.high}° / {props.low}°
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.rain}
          </Typography>
        </CardContent>
      </Card>
    );
}


export default WeatherCard;