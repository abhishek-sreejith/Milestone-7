import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify';

// Configure Amplify with your Cognito details and S3 storage
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ykasObV5g',
      userPoolClientId: '269vhpds53ig1dkj0v4uic12ao',
      identityPoolId: 'us-east-1:c9abd6a3-c18e-4bdf-8bf3-89087c652182', // Add your actual Identity Pool ID here
      loginWith: {
        email: true
      }
    },
  },
  Storage: {
    S3: {
      bucket: 'u-uploadtos3',
      region: 'us-east-1'
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)