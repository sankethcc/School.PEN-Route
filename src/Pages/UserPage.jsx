import UserProfile from '../Components/ComponentsAssignUser/UserProfile/UserProfile'
import Menu from '../Components/Menu/Menu'
import { Box } from '@mui/system'

const UserPage = () => {
  return (
    <Box sx={{display:'flex', alignItems:'start'}}>
        <Menu  />
        <UserProfile />
    </Box>
  )
}

export default UserPage
