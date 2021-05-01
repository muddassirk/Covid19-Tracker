import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


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
    total: {
        color: '#3f51b5'
    },
    table: {
        minWidth: 700,
    },
}));

export default function AllCountries() {

    const [globalCovidData, setglobalCovidData] = useState([{}])
    //   console.log(currentScreen);


    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.covid19api.com/summary')

            let data = await response.json()
            // console.log(data);
            console.log(data.Countries);
            setglobalCovidData(data.Countries)
            //   setglobalCovidData(Object.values(data.Countries))
            console.log(globalCovidData[1]);
        }
        getData()

    }, [])


    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Grid container spacing={3}> */}

            {/* {
                    globalCovidData.map((val, index) => {
                        // console.log(val.Country)
                        return (
                            <Grid key={index} item xs={12} sm={4}>
                                <Paper
                                    className={classes.paper}
                                    elevation={3}>

                                    <h3 
                                        className={classes.total}
                                    >
                                        Country: <br />{val.Country}  <br />
                                        Total Confirmed:<br /> {val.TotalConfirmed}  <br />
                                        Total Deaths: <br />{val.TotalDeaths}  <br />
                                        Total Recovered: <br />{val.TotalRecovered}  <br />
                                    </h3>
                                </Paper>
                            </Grid>
                        )
                    })
                } */}



            {/* </Grid> */}


            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Country</StyledTableCell>
                            <StyledTableCell align="right">TotalConfirmed</StyledTableCell>
                            <StyledTableCell align="right">TotalDeaths</StyledTableCell>
                            <StyledTableCell align="right">TotalRecovered</StyledTableCell>
                            <StyledTableCell align="right">NewConfirmed</StyledTableCell>
                            <StyledTableCell align="right">NewDeaths</StyledTableCell>
                            <StyledTableCell align="right">NewRecovered</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {globalCovidData.map((val, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {val.Country}
                                </StyledTableCell>
                                <StyledTableCell align="right">{val.TotalConfirmed}</StyledTableCell>
                                <StyledTableCell align="right">{val.TotalDeaths}</StyledTableCell>
                                <StyledTableCell align="right">{val.TotalRecovered}</StyledTableCell>
                                <StyledTableCell align="right">{val.NewConfirmed}</StyledTableCell>
                                <StyledTableCell align="right">{val.NewDeaths}</StyledTableCell>
                                <StyledTableCell align="right">{val.NewRecovered}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
