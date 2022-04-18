import {
    Authenticator
  } from "@aws-amplify/ui-react";
import {components,formFields} from './LoginComponents';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';

export default function LoginButton() {
    return (<div className="outer">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography align='center'>시작하기(RESIZE)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {Login()}
          </Typography>
        </AccordionDetails>
      </Accordion></div>
    )}


function Login(){
    return (<div className="outer">
        <Authenticator socialProviders={['facebook', 'google']} formFields={formFields} components={components}>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator></div>
    )
}
