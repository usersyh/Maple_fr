import React, { useState } from "react";
import 소멸의여로 from "../assets/arcane/소멸의 여로.png";
import 츄츄아일랜드 from "../assets/arcane/츄츄 아일랜드.png";
import 레헬른 from "../assets/arcane/레헬른.png";
import 아르카나 from "../assets/arcane/아르카나.png";
import 모라스 from "../assets/arcane/모라스.png";
import 에스페라 from "../assets/arcane/에스페라.png";
import 도원경 from "../assets/authentic/도원경.png";
import 세르니움 from "../assets/authentic/세르니움.png";
import 아르크스 from "../assets/authentic/아르크스.png";
import 아르테리아 from "../assets/authentic/아르테리아.png";
import 오디움 from "../assets/authentic/오디움.png";
import 카르시온 from "../assets/authentic/카르시온.png";





function Catalist() {

    const imgs = [
        {value:"arcane", name:"소멸의 여로", src:소멸의여로},
        {value:"arcane", name:"츄츄 아일랜드", src:츄츄아일랜드},
        {value:"arcane", name:"레헬른", src:레헬른},
        {value:"arcane", name:"아르카나", src:아르카나},
        {value:"arcane", name:"모라스", src:모라스},
        {value:"arcane", name:"에스페라", src:에스페라},
        {value:"authentic", name:"도원경", src:도원경},
        {value:"authentic", name:"세르니움", src:세르니움},
        {value:"authentic", name:"아르크스", src:아르크스},
        {value:"authentic", name:"아르테리아", src:아르테리아},
        {value:"authentic", name:"오디움", src:오디움},
        {value:"authentic", name:"카르시온", src:카르시온}
    ];

    const [symbol, setSymbol] = useState('아케인 심볼');
    const [newImg, setNewImg] = useState(imgs.filter(img => img.value === 'arcane'));
    const [isClass, setIsClass] = useState('dispaly-none');
    

    const handleButtonClick = (value) => {
        
        setSymbol(value === 'arcane' ? '아케인 심볼' : '어센틱 심볼');

        setNewImg(imgs.filter(img => img.value === value));

        setIsClass('dispaly-none');
        
        
    //    console.log(newImg);
    //    setImg(newImg);
        // setImg(newImg);
        // if(newImg){s
        //     setImg(newImg);
        // }a
    };


    const calculateButtonClick = (value)  => {
        setIsClass(value === true ? 'dispaly-on' : 'dispaly-none');
    }



    return (
        <>
           

                <div className="symbol-head">
                    <button className="symbol-btn" value="arcane" onClick={() => handleButtonClick('arcane')}>아케인 심볼</button>
                    <button className="symbol-btn" value="authentic" onClick={() => handleButtonClick('authentic')}>어센틱 심볼</button>
                </div>

        <div className="display-flex">

            <div className="container-catalist">
                <table className="custom-table">
                    <thead>
                    <tr>
                        <th className="th-border">{symbol}</th>
                        <th className="th-border">심볼레벨</th>
                        <th className="th-border">성장치</th>
                        <th className="th-border">레벨</th>
                        <th className="th-border">성장치</th>
                        {/* <th className={isClass} style={{ backgroundColor: '#B90000', color: 'white'}}>결과값</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {newImg.map(function(img,index){
                        
                        return(
                        <tr key={index}>
                            <td className="table-td"><img src={img.src} alt={img.name}/><span className="symbol-text">{img.name}</span></td>
                            <td><input className="catalist-input" type="number" min={0}/></td>
                            <td><input className="catalist-input" type="number" min={0}/></td>
                            <td><input className="catalist-input" type="number" min={0}/></td>
                            <td><input className="catalist-input" type="number" min={0}/></td>
                            {/* <td className={isClass}><span>0</span></td> */}
                        </tr>
                        )
                        
                    })}
                   
                    </tbody>
                </table>

                <div>
                    <button className="calculate-btn" onClick={() => calculateButtonClick(true)}>계산</button>
                </div>

            </div>

            {/* ------------- 결과창 ----------------------- */}

            <div className={`arrow-icon ${isClass}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1200 1200">
                <path fill="currentColor" d="M1200 600L496.875 131.25v252.539H0v432.422h496.875v252.539z"/>
            </svg>
            </div>

            <div className={`container-catalist ${isClass}`}>
                <table className="custom-table">
                    <thead>
                    <tr>
                        <th className="th-border">{symbol}</th>
                        <th className="th-border">레벨</th>
                        <th className="th-border">심볼갯수</th>
                        <th className="th-border">메소</th>
                    </tr>
                    </thead>
                    <tbody>
                    {newImg.map(function(img,index){
                        
                        return(
                        <tr key={index}>
                            <td className="table-td"><img src={img.src} alt={img.name}/><span className="symbol-text">{img.name}</span></td>
                            <td className="td-width"><span>32</span></td>
                            <td><span>22</span></td>
                            <td><span>999,999,999</span></td>
                        </tr>
                        )
                        
                    })}
                   
                    </tbody>
                </table>

                <div>
                    <button className={`calculate-btn ${isClass}`} onClick={() => calculateButtonClick(false)}>초기화</button>
                </div>

            </div>
        
        </div>

                
                
                
            
        </>
    )
}

export default Catalist;