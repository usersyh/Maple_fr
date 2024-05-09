import React, { useState } from 'react';

function Job() {
    const options = [
        {value:"total", name:"전체"},
        {value:"warrior", name:"전사"},
        {value:"archer", name:"궁수"},
        {value:"thief", name:"도적"},
        {value:"wizard", name:"마법사"},
        {value:"pirate", name:"해적"},
        {value:"cygnus", name:"시그너스"},
        {value:"rd", name:"레지스탕스/데몬"},
        {value:"remain", name:"그외"}
    ];

    const [firstOption, setFirstOption] = useState(options[0].value);

    const optionsForSecondDropdown = firstOption === 'total'? ['전체직업'] :
                                    firstOption === 'warrior'? ['히어로','팔라딘','다크나이트'] :
                                    firstOption === 'archer'? ['보우마스터','신궁','패스파인더'] :
                                    firstOption === 'thief'? ['나이트로드','새도어','듀얼블레이드'] :
                                    firstOption === 'wizard'? ['아크메이지(불,독)','아크메이지(썬,콜)','비숍'] :
                                    firstOption === 'pirate'? ['바이퍼','캡틴','캐논슈터'] :
                                    firstOption === 'cygnus'? ['소울마스터','플레임위자드','원드브레이커','나이트워커',
                                    '스트라이커','미하일'] :
                                    firstOption === 'rd'? ['블래스터','배틀메이지','와일드헌터','메카닉','데몬슬레이어','제논','데몬어벤져'] :
                                    firstOption === 'remain'? ['아란','에반','메르세데스','팬텀','은월','루미너스','카이저','카인',
                                    '카데나','엔젤릭버스터','아델','일리움','칼리','아크','라라','호영','제로','키네시스'] :
                                    [];

    return(
        <>
            <div className="container-main">
               <div className="server">
                 <span><b>직업</b></span> 
               </div>     
                <div className='container-drop'>
                    <select className='first-option' value={firstOption} onChange={(e) => setFirstOption(e.target.value)}>
                        {options.map(function(option){
                            return <option key={option.value} value={option.value}>{option.name}</option>
                        })}
                    </select>
                    <select className='first-option'>
                        {optionsForSecondDropdown.map(function(option){
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>
                </div>
            </div>        
        </>
    )
}

export default Job;