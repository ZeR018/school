import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { refactorDate, url } from '../constantsAndFunctions.js';
import { Typography } from '@mui/material';

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

const MarksTableTab = ({studentId}) => {

  const [marks, setMarks] = useState([])
  useEffect(() => {getMarks(studentId)}, [studentId])

  const getMarks = async (id) => {
    const response = await axios.get(url + `marks/${id}`);
    const res = response.data;
    res.forEach((e) => e.date = refactorDate(e.date))
    setMarks(response.data);
  }

  return (
    <>
      {
        marks.length !== 0 ? (
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Дата</StyledTableCell>
            <StyledTableCell align="right">Предмет&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Оценка&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Учитель&nbsp;</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {marks.map((row) => (
            <StyledTableRow
              key={`${row.mark_id}_${row.name}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.subject_name}</StyledTableCell>
              <StyledTableCell align="center">{row.mark}</StyledTableCell>
              <StyledTableCell align="right">{row.teacher_name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        ) : (<Typography>Оценки не найдены:(</Typography>)
      }
    </>
  );
}

MarksTableTab.propTypes = {
  studentId: PropTypes.number,
}

export default MarksTableTab