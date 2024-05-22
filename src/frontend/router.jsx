import ErrorPage from './ErrorPage.jsx'
import MarksTableTab from './Tabs/MarksTableTab.jsx'
import { Schedule } from '@mui/icons-material'
import HomeworkTab from './Tabs/HomeworkTab.jsx'
import OtherTab from './Tabs/OtherTab.jsx'
import AboutSchoolTab from './Tabs/AboutSchoolTab.jsx'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: '/marks',
            element: <MarksTableTab/>
          },
          {
            path: '/schedule',
            element: <Schedule/>
          },
          {
            path: '/homework',
            element: <HomeworkTab/>
          },
          {
            path: '/other',
            element: <OtherTab/>
          },
          {
            path: '/announcements',
            element: <AboutSchoolTab/>
          }
        ]
      },
    ])

export default router