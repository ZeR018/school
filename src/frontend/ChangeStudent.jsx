import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from './constantsAndFunctions.js';
import { Button, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types'

const ChangeStudent = ({setGlobalStudentId}) => {

  // id выбранного студента, хранится только в этой компоненте для изменения формы
  const [studentId, setStudentId] = useState(1)

  // выполняется только при рендере компонента, вызывает getStudents()
  useEffect(() => {getStudents()}, [])

  // список студентов, следит за изменением списка и при необходимости обновляет компонент
  const [students, setStudents] = useState([])
  
  // делает запрос на сервер, записывает полученный с сервера список студентов
  const getStudents = async () => {
    const response = await axios.get(url + 'students')
    const res = response.data
    setGlobalStudentId(res[0].student_id)
    setStudents(res)
  }

  return (
    <Box style={{display: "flex", flexDirection: "row"}}>
    {
      students.length !== 0 ? (
        <Autocomplete
      onChange={(event, newValue) => {
        newValue
        ? setStudentId(newValue.student_id)
        : setStudentId(students[0].student_id)
      }}
      id="change-student"
      sx={{ width: 300 }}
      options={students}
      autoHighlight
      getOptionLabel={(option) => {
        return `${option.last_name} ${option.first_name}`
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={`key_${option.student_id}_${option.first_name}`}>
          {option.class_name}, {option.last_name} {option.first_name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Выберите ученика"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            
          }}
        />
      )}
    />
      ) : (<CircularProgress/>)
    }
    <Button style={{marginLeft: 20}} variant="contained"
    onClick={() => setGlobalStudentId(studentId)}>Выбрать</Button>
    </Box>
  );
}

ChangeStudent.propTypes = {
  setGlobalStudentId: PropTypes.func,
}

export default ChangeStudent