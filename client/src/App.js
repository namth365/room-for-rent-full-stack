import { Routes, Route } from 'react-router-dom';
import { Home, Homepage, Login, RentalApartment, RentalHouse, RentalRoom, RentalSpace } from './containers/Public';
import { path } from './utils/constant';

function App() {
  return (
    <div className="h-screen w-screen bg-primary border border-blue-500">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
          <Route path={path.LOGIN} element={<Login />} />
          <Route path='*' element={<Homepage />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
