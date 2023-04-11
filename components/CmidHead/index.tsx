import Box from "@mui/material/Box"

import Cmid from "../../public/images/app_icons/Cmid"

interface CmidHeadProps {}

const CmidHead: React.FC<CmidHeadProps> = () => {
  return (
    <Box display="flex" gap="16px">
      <Box>
        <Cmid />
      </Box>
      <Box fontFamily="Teko" color="#fff" fontSize="40px">
        Cooler Master ID
      </Box>
    </Box>
  )
}

export default CmidHead
