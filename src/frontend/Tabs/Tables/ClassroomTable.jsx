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
import { url } from '../../constantsAndFunctions';
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

const ClassroomTable = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {getClasses()}, [])

  const getClasses = async () => {
    const response = await axios.get(url + 'classes/')
    setClasses(response.data)
  }

  return (
    <>
    {
      classes.length !== 0 ? (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="right">Номер класса</StyledTableCell>
            <StyledTableCell align="right">Классный руководитель</StyledTableCell>
            <StyledTableCell align="right">О классе</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index}
              </StyledTableCell>
              <StyledTableCell align="right">{row.class_name}</StyledTableCell>
              <StyledTableCell align="right">{row.teacher_name}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
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

export default ClassroomTable