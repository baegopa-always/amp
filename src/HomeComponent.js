import { Tabs,TabItem } from "@aws-amplify/ui-react";

export default function HomeComponent(){
    return(
      <Tabs justifyContent="center" spacing="equal">
  <TabItem title="Overview">1. 연동 로그인 구현
  2. 로그인 시 main컴포넌트로 이동 route? link?
  3. 로그인 인증 부분 설명 amplify deploy 설명, 로그인 녹화
  4. 탭 및 로그인 개선
  
  </TabItem>
  <TabItem title="Contact">Tab 2 Content</TabItem>
</Tabs>
    )
}