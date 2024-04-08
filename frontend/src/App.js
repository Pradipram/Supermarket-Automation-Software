import './App.css';
import AllItems from './components/AllItems';
import SignInSide from './components/Login';

import MainArea from './components/MainArea';
// import ImageUpload from './components/imageUpload';
import {Routes,Route} from 'react-router-dom'
import SignUpSide from './components/SignUp';
import CreateBill from './components/CreateBill';
import { SnackbarProvider } from './components/SnackbarContext';
function App() {
  return (
    <div>
      {/* <ImageUpload/> */}
      <SnackbarProvider>
        <Routes>
          <Route path='/app' element={<MainArea/>}>
            <Route path='all-items' element={<AllItems/>} />
            <Route path='generate-bill' element={<CreateBill/>} />
          </Route>
          <Route path='/login' element={<SignInSide/>} />
          <Route path='/signup' element={<SignUpSide/>} />
        </Routes>
      </SnackbarProvider>

    </div>
  );
}

export default App;
