import 스카니아 from '../assets/world/스카니아.png';
import 베라 from '../assets/world/베라.png';
import 루나 from '../assets/world/루나.png';
import 제니스 from '../assets/world/제니스.png';
import 크로아 from '../assets/world/크로아.png';
import 유니온 from '../assets/world/유니온.png';
import 엘리시움 from '../assets/world/엘리시움.png';
import 이노시스 from '../assets/world/이노시스.png';
import 레드 from '../assets/world/레드.png';
import 오로라 from '../assets/world/오로라.png';
import 아케인 from '../assets/world/아케인.png';
import 노바 from '../assets/world/노바.png';
import 리부트 from '../assets/world/리부트.png';

import Button from './Butten';

function ServeBar() {

    return (
       
            <div className="container-main">
                <div className="server">
                    <span><b>월드</b></span>
                </div>
                <div className="server-btn">
                    <Button><p className='p-world'>전체</p></Button>
                    <Button><span><img src={스카니아} /></span><p className='p-world'>스카니아</p></Button>
                    <Button><span><img src={베라} /></span><p className='p-world'>베라</p></Button>
                    <Button><span><img src={루나} /></span><p className='p-world'>루나</p></Button>
                    <Button><span><img src={제니스} /></span><p className='p-world'>제니스</p></Button>
                    <Button><span><img src={크로아} /></span><p className='p-world'>크로아</p></Button>
                    <Button><span><img src={유니온} /></span><p className='p-world'>유니온</p></Button>
                    <Button><span><img src={엘리시움} /></span><p className='p-world'>엘리시움</p></Button>
                    <Button><span><img src={이노시스} /></span><p className='p-world'>이노시스</p></Button>
                    <Button><span><img src={레드} /></span><p className='p-world'>레드</p></Button>
                    <Button><span><img src={오로라} /></span><p className='p-world'>오로라</p></Button>
                    <Button><span><img src={아케인} /></span><p className='p-world'>아케인</p></Button>
                    <Button><span><img src={노바} /></span><p className='p-world'>노바</p></Button>
                </div>
                <div className='server-btn'>
                    <Button><p className='p-world'>전체</p></Button>
                    <Button><span><img src={리부트} /></span><p className='p-world'>리부트</p></Button>
                    <Button><span><img src={리부트} /></span><p className='p-world'>리부트2</p></Button>
                </div>
            </div>
        
    )
}

export default ServeBar;