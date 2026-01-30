
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import { Router } from './Router.jsx'
import { AuthProvider } from './components/Auth.jsx'

createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <Router />
    </AuthProvider>
  
    
  
)
