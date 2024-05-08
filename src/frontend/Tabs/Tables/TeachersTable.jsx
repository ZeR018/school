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
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
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

const TeachersTable = () => {
  useEffect(() => {getTeachers()}, [])
  const [teachers, setTeachers] = useState([])

  const getTeachers = async () => {
    const response = await axios.get(url + 'teachers/')
    setTeachers(response.data)
  }

  return (
    <>
    {
      teachers.length !== 0 ? (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center' colSpan={5}>Список учителей</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="right">Фамилия</StyledTableCell>
            <StyledTableCell align="right">Имя</StyledTableCell>
            <StyledTableCell align="right">Отчество</StyledTableCell>
            <StyledTableCell align="right">Профиль</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((row, index) => {
            const fullName = row.full_name.split(' ')
            return (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index}
                </StyledTableCell>
                <StyledTableCell align="right">{fullName[0]}</StyledTableCell>
                <StyledTableCell align="right">{fullName[1]}</StyledTableCell>
                <StyledTableCell align="right">{fullName[2]}</StyledTableCell>
                <StyledTableCell align="right">{row.specialization}</StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
      ) : (<CircularProgress/>)
    }
    </>
  );
}

export default TeachersTable