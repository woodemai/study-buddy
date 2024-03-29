import { router } from "./providers/router-provider"
import StoreProvider from "./providers/store-provider"
import { ThemeProvider } from "./providers/theme-provider"
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
