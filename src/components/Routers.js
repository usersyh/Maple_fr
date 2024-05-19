import {Router, Route, Routes} from 'react-router-dom';
import Main from '../pages/Main';
import TotalRanking from '../pages/TotalRanking';
import MulungRanking from '../pages/MulungRanking';
import Catalist from '../pages/Catalist';

function Routers() {
    return(
            <Routes>
                <Route path='/home' element={<Main/>} />
                <Route path='/totalRanking' element={<TotalRanking/>} />
                <Route path='/mulungRanking' element={<MulungRanking/>} />
                <Route path='/catalist' element={<Catalist/>} />
            </Routes>
    );
}

export default Routers;