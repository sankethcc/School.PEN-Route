import { Outlet } from 'react-router-dom'
import UserProfile from '../Components/ComponentsAssignUser/UserProfile/UserProfile'
import Menu from '../Components/Menu/Menu'
import { Box } from '@mui/system'
import UserSetting from '../Components/ComponentsAssignUser/UserProfile/UserSetting'

const UserPage = () => {
  return (
    <Box sx={{display:'flex', alignItems:'start'}}>
        <Menu  />
        <Outlet />

    </Box>
  )
}

export default UserPage
