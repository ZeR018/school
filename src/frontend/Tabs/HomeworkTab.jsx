import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { refactorDate, url } from '../constantsAndFunctions.js';

const HomeworkTab = ({studentId}) => {
    const [expanded, setExpanded] = useState(false);

    const [homework, setHomework] = useState([])
    useEffect(() => {getHomework(studentId)}, [studentId])

    const getHomework = async (studentId) => {
        const response = await axios.get(url + `homework/${studentId}`);
        const res = response.data;
        res.forEach((e) => {e.deadline = refactorDate(e.deadline); 
                            e.add_homework_date = refactorDate(e.add_homework_date)})
        setHomework(res);
    }
    

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        {
          homework.length !== 0 ? (
              homework.map((h, index) => (
                  <Accordion sx={{ minWidth: 800 }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={`${index}`}>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                          {h.add_homework_date} - {h.deadline}
                      </Typography>
                      <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', paddingRight: '50px', flexWrap: 'wrap'}}>
                          <Typography style={{margin: '0 20px'}} sx={{ color: 'text.secondary' }}>{h.subject}</Typography>
                          <Typography sx={{ color: 'text.secondary'}} style={{textAlign: 'right'}}>{h.teacher}</Typography>
                      </div>
                      </AccordionSummary>
                      <AccordionDetails>
                      <Typography>{h.homework}</Typography>
                      </AccordionDetails>
                  </Accordion>
              ))
          ) : (<Typography>Домашнее задание не найдено:(</Typography>)
        }
      
    </div>
  );
}

HomeworkTab.propTypes = {
    studentId: PropTypes.number,
  }
  

export default HomeworkTab