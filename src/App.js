import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './lang';
import awsExports from './aws-exports';
import Home from './Home';

Amplify.configure(awsExports);

export default function App() {
  return (<Home/>)
}

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}