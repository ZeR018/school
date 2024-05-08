import ClassroomTable from "./Tables/ClassroomTable"
import CallScheduleTable from "./Tables/CallScheduleTable"
import TeachersTable from "./Tables/TeachersTable"

const OtherTab = () => {
    return (
        <div style={{maxWidth: '1080px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TeachersTable/>
        <CallScheduleTable/>
        <ClassroomTable/>
        </div>
    )
}

export default OtherTab