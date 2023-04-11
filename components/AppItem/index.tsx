import Box from "@mui/material/Box"

import Cmodx from "../../public/images/app_icons/Cmodx"
import MasterControl from "../../public/images/app_icons/MasterControl"
import Stormplay from "../../public/images/app_icons/Stormplay"

interface AppItemProps {
  appIcon: string
  appName: string
}

const appIconMapping = {
  Cmodx: Cmodx,
  MasterControl: MasterControl,
  Stormplay: Stormplay,
}

const AppItem: React.FC<AppItemProps> = ({ appIcon, appName }) => {
  const IconComponent = appIconMapping[appIcon]
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="rgba(255, 255, 255, 0.1)"
      borderRadius="20px"
      width="170px"
      height="162px"
    >
      <Box>
        <IconComponent />
      </Box>
      <Box fontSize="18px" color="#fff" mt="10px">
        {appName}
      </Box>
    </Box>
  )
}

export default AppItem
