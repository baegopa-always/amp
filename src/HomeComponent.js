import { Tabs,TabItem } from "@aws-amplify/ui-react";

export default function HomeComponent(){
    return(
      <Tabs justifyContent="center" spacing="equal">
  <TabItem title="Overview">
    내용 추가 1
  
  </TabItem>
  <TabItem title="Contact">
    내용 추가 2
  </TabItem>
</Tabs>
    )
}