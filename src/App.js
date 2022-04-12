import { Amplify } from 'aws-amplify';
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {components,formFields} from './components';
import './lang';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator variation="modal" socialProviders={['facebook', 'google']} formFields={formFields} components={components}>
      {({ signOut, user }) => (
        <>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
  );
}

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}