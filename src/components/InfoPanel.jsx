import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoPanel() {

  const [globalCovidData, setglobalCovidData] = useState({})


  useEffect(() => {
    async function getData() {
      const response = await fetch('https://api.covid19api.com/summary')

      let data = await response.json()
      // console.log(data);
      // console.log(data.Global);
      setglobalCovidData(data.Global)
      console.log(globalCovidData);
    }
    getData()

  }, [])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {Object.keys(globalCovidData).map((key, index) => {
          return (

            <Grid key={index} item xs={12} sm={4}>
              <Paper
                className={classes.paper}
                elevation={3}>
                 
                <h3>{key}</h3>
                <h3>{globalCovidData[key]}</h3>
              </Paper>
            </Grid>
          )
          //dfdsfsdf
        })}



      </Grid>
    </div>
  );
}
