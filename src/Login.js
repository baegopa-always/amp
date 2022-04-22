import {
    Authenticator,
    Button
  } from "@aws-amplify/ui-react";
import {components,formFields} from './LoginComponents';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';

export default function LoginButton() {
    return (<div className="outer">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography align='center'>시작하기(수정)</Typography>
        </AccordionSummary>
          <Typography>{Login()}
          </Typography>
      </Accordion></div>
    )}


function Login(){
  return (<div className="outer">
        <Authenticator socialProviders={['facebook', 'google']} formFields={formFields} components={components}>
            {({ signOut, user }) => (
              <main align="center">
                <h1>안녕하세요<br></br>{user.attributes.name}님</h1>
                <Button onClick={signOut} size="large">로그아웃</Button>
              </main>
            )}
          </Authenticator></div>
    )
}
