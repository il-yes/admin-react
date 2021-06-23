import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ResultTable({columns, results}) {
  const classes = useStyles();

  const date = (timestamp) => {
    const milliseconds = timestamp * 1000 // 1575909015000
    const dateObject = new Date(milliseconds)
    return dateObject.toLocaleString("en-US", {year: "numeric"}) 
  }

  return (
    <TableContainer component={Paper}>
    <Typography variant="h4" gutterBottom>
      Results
    </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
              {columns.map((col) => (
                  <TableCell align="right">{col}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
                {results.map((result) => (
            <TableRow key={result.id}>
                    <>
                      <TableCell align="right">{result.ca}</TableCell>
                      <TableCell align="right">{result.margin}</TableCell>
                      <TableCell align="right">{result.ebitda}</TableCell>
                      <TableCell align="right">{result.loss}</TableCell>
                      <TableCell align="right">{date(result.year.timestamp)}</TableCell>
                    </>             
            </TableRow>
                ))} 
        </TableBody>
      </Table>
    </TableContainer>   
  );
}
