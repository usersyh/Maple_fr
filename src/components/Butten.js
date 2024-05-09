// import styled from 'styled-components';

// const button = styled.button`
//   display: flex;
//   align-items: center;
//   /* 여기에 필요한 다른 스타일을 추가하세요 */
// `;
import '../styles/button.css';

function Button({ children}){

    return(
        <button className="btn-world">{children}</button>
    )
}

export default Button;