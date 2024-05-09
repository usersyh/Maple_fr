import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchBar({size}) {

    // 검색 컴포넌트 헤더, 메인으로 구분하여 id값 지정
   let inputGroupId = 'input-group';
   let buttonId = 'button-addon2';

   if(size === 'main'){
    inputGroupId = 'main-input-group';
    buttonId = 'main-button-addon2';
   }

    return (
        <>
            <InputGroup className="mb-3" id={inputGroupId}>
                <Form.Control
                    placeholder="닉네임 입력"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id={buttonId}>
                    검색
                </Button>
            </InputGroup>
            
        </>
    );
};

export default SearchBar;