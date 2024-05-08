import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';
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

const DatesTableRow = styled(TableRow)(({ theme}) => ({
    '&' : {
        backgroundColor: theme.palette.action.hover,
    }
}));

const StyledTableRow = styled(TableRow)(() => ({
//   // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  }
}));

const divideRowsByDates = (arr) => {
    // Массив объектов, где каждый объект это: date - дата в расписании, daySchedule - массив с расписанием в этот день
    
    let res = []

    arr.forEach((el, index)=> {
      if (index == 0 || res.at(-1).date !== el.date) {
        res.push({
          date: el.date,
          daySchedule: []
        })
      }

      res.at(-1).daySchedule.push({
        scheduleId: el.schedule_id,
        scheduleNum: el.scheduleNum,
        subject: el.subject,
        classroom: el.classroom_num,
        teacher: el.teacher
      })
    })

    return res
}

const ScheduleTab = ({studentId}) => {

  const [schedule, setSchedule] = useState([])
  useEffect(() => {getHomework(studentId)}, [studentId])

  const getHomework = async (studentId) => {
      const response = await axios.get(url + `schedule/${studentId}`);
      const res = response.data;
      res.forEach((e) => {e.date = refactorDate(e.date)})
      
      setSchedule(divideRowsByDates(res))
  }

  return (
    <>
    {
      schedule.length !== 0 ? (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Дата</StyledTableCell>
            <StyledTableCell align="right">Номер урока</StyledTableCell>
            <StyledTableCell align="center">Предмет&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Кабинет&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Учитель&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row, index) => (
                <Fragment key={`${index}_day_box_${row.date}`}>
                <DatesTableRow>
                    <StyledTableCell component="th" scope="row">
                        {row.date}
                    </StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                </DatesTableRow>
                {
                    row.daySchedule.map((lesson, index) => (
                        <StyledTableRow key={`${index}_lesson_${lesson.scheduleNum}`}>
                            <StyledTableCell component="th" scope="row">
                                
                            </StyledTableCell>
                            <StyledTableCell align="center">{lesson.scheduleNum}</StyledTableCell>
                            <StyledTableCell align="right">{lesson.subject}</StyledTableCell>
                            <StyledTableCell align="center">{lesson.classroom}</StyledTableCell>
                            <StyledTableCell align="right">{lesson.teacher}</StyledTableCell>
                        </StyledTableRow>
                    ))
                }
                </Fragment>
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>
      ) : (<Typography>Расписание не найдено:(</Typography>)
    }
    </>
  );
}

ScheduleTab.propTypes = {
  studentId: PropTypes.number,
}

export default ScheduleTab