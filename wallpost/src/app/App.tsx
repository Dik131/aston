import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/router.tsx';
import { MainLayout } from '../widgets/MainLayout/MainLayout.tsx';

const App = () => {

  return (
    
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
  )
}

export default App;

