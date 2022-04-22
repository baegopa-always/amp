import { useAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

export function Main() {

  return (
    <main>
      <h1>Hello {user}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
