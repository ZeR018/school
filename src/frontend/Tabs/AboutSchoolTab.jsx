import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../constantsAndFunctions.js';
import { CircularProgress } from '@mui/material';

const AboutSchoolTab = () => {
    const [announcements, setAnnouncements] = useState([])

    useEffect(() => {getAnnouncements()}, [])

    const getAnnouncements = async () => {
        const response = await axios.get(url + 'announcements/')
        setAnnouncements(response.data)
    }

    return (
        <div style={{maxWidth: '1080px'}}>
        {
            announcements.map((item, index) => {
                let de = false;
                index == 0 ? de = true : de = false;
                return (
                    <Fragment key={index}>
                    {announcements.length !== 0 ? (
                        <Accordion defaultExpanded={de} key={`${index}_${item.announcement_id}`}>
                        
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            {item.announcement}
                            </Typography>
                        </AccordionDetails>
                        </Accordion>
                    ) : (<CircularProgress/>)
                }
                    </Fragment>
                )
            })
        }
      </div>
    )}

export default AboutSchoolTab