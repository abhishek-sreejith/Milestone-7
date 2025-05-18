import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify';

// Configure Amplify with your Cognito details
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ykasObV5g',
      userPoolClientId: '269vhpds53ig1dkj0v4uic12ao',
      loginWith: {
        email: true
      }
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)