import { Tabs } from "@aws-amplify/ui-react";
import { Box, Tab } from "@mui/material";

export default function HomeComponent(){
    return(
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs aria-label="basic tabs example">
    <Tab label="Item One"/>
    <Tab label="Item Two"/>
  </Tabs>
</Box>
    )
}