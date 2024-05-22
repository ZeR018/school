import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChangeStudent from './ChangeStudent';
import MarksTableTab from './Tabs/MarksTableTab';
import ScheduleTab from './Tabs/ScheduleTab';
import HomeworkTab from './Tabs/HomeworkTab';
import AboutSchoolTab from './Tabs/AboutSchoolTab';
import OtherTab from './Tabs/OtherTab';
import { Link } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [globalStudentId, setGlobalStudentId] = React.useState(1)

  return (
    <Box component='section' alignItems="center" display="flex" flexDirection="column" my={4}>
      <Box my={4}>
        <ChangeStudent setGlobalStudentId={setGlobalStudentId}/>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<Link to={'marks'} >Оценки</Link>} {...a11yProps(0)} />
          <Tab label={<Link to={'schedule'} >Расписание</Link>} {...a11yProps(1)} />
          <Tab label={<Link to={'homework'} >Домашние задания</Link>}{...a11yProps(2)} />
          <Tab label={<Link to={'other'} >Дополнительно</Link>} {...a11yProps(3)} />
          <Tab label={<Link to={'announcements'} >О школе</Link>} {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MarksTableTab studentId={globalStudentId}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ScheduleTab studentId={globalStudentId}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <HomeworkTab studentId={globalStudentId}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <OtherTab/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <AboutSchoolTab/>
      </CustomTabPanel>
    </Box>
  )
}

export default App