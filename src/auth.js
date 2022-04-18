import { Amplify } from 'aws-amplify';
import { Authenticator,Flex,Divider,Text} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {components,formFields,backGr} from './LoginComponents';
import './lang';
import awsExports from './aws-exports';

export default function auth() {
    Amplify.configure(awsExports);
  return (
  <div class="split right">
    <Authenticator variation="modal" socialProviders={['facebook', 'google']} formFields={formFields} components={components}>
      {({ signOut, user }) => (
        <>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator></div>
  );
}