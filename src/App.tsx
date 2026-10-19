import HomePage from '@/pages/HomePage'

import AdminPage from '@/pages/AdminPage'
import { useSearchParams } from 'react-router'

function App() {
  return (
    <AppRouter />
  )
}

function AppRouter() {
  const [params] = useSearchParams()
  if (params.get('admin') === 'xy2024') {
    return <AdminPage />
  }
  return <HomePage />
}

export default App
