import { useEffect, useState } from "react";
import IconMaple from "./icons/IconMaple";
import generateRandomNumber from "../utils/math";
import useMampleflakesStore from "../store/mapleflakes";
// import main2 from '../assets/main2.png';
//import SearchBar from '../components/SearchBar';

function Mapleflakes(props){

    const {count = 17} = props;
    const [mapleflake, setMapleflake] = useState([]);      
    const {isShow} = useMampleflakesStore();         //on off 기능

    useEffect(() => {
        const newMapleflake = Array.from({length:count}).map(() => {
            const fallDelay = generateRandomNumber(0, 15, {fixed:2});
            const shakeDelay = Math.min(
                generateRandomNumber(0, 10, {fixed:1}),
                Number.parseFloat((fallDelay - 0.07).toFixed(1))
            );
            return{
                left: generateRandomNumber(0, 100),
                fallDelay,
                shakeDelay,
                blur: generateRandomNumber(0.2, 0.5, {fixed:1}),
                opacity: generateRandomNumber(0.55, 0.95, {fixed:2}),
                size: generateRandomNumber(12, 18),
            };
        });
        setMapleflake(newMapleflake);
    }, []);


    return(
        <div className={`mapleflake ${ isShow && mapleflake.length ? "visible" : "hidden" }`} 
        aria-hidden="true" >
            {mapleflake.map((flake, index) => (
                <div
                    key={`flake-${index}`}
                    className="mapleflake"
                    style={{
                        left: `${flake.left}%`,
                        filter: `blur(${flake.blur}px)`,
                        opacity: `${flake.opacity}`,
                        animationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
                        WebkitAnimationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,

                    }}>
                     <IconMaple size={flake.size}/> 
                </div>
            ))}
            
        </div>
    )
}

export default Mapleflakes;