import Box from "@mui/material/Box"

import AppItem from "../AppItem"

interface AppsListProps {}

const AppsList: React.FC<AppsListProps> = () => {
  return (
    <Box
      mt="200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="61.2vw"
      fontFamily="open sans"
    >
      <Box fontSize="30px" color="#fff">
        Access Anywhere With Cooler Master ID
      </Box>
      <Box fontSize="20px" color="#C0C0C0" mt="6px">
        One account is all you need. Start your virtual adventure.
      </Box>
      <Box display="flex" gap="40px" mt="48px">
        <AppItem appIcon="MasterControl" appName="Master Control" />
        <AppItem appIcon="Stormplay" appName="Stormplay" />
        <AppItem appIcon="Cmodx" appName="CMODX" />
      </Box>
    </Box>
  )
}

export default AppsList
