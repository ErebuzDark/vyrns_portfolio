import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import '@/styles/globals.css'
import App from './App.jsx'

const antdTheme = {
  token: {
    colorPrimary: '#4a8f6c',
    colorSuccess: '#4a8f6c',
    borderRadius: 10,
    fontFamily: 'Inter, sans-serif',
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
