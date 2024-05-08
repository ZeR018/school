import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../constantsAndFunctions.js';
import { CircularProgress } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CallScheduleTable = () => {
  const [calls, setCalls] = useState([]);
  useEffect(() => {getCalls()}, []);
  const getCalls = async () => {
    const response = await axios.get(url + 'calls_schedule/')
    setCalls(response.data)
  }
  return (
    <>
    {
      calls.length !== 0 ? (
        <TableContainer sx={{width: 700, m: 3}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Номер урока</StyledTableCell>
            <StyledTableCell align="center">Начало урока</StyledTableCell>
            <StyledTableCell align="center">Конец урока</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calls.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.index}
              </StyledTableCell>
              <StyledTableCell align="center">{row.start_time}</StyledTableCell>
              <StyledTableCell align="center">{row.end_time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      ) : (<CircularProgress/>)
    }
    </>
  );
}

export default CallScheduleTable