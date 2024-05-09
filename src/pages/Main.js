// import Card from 'react-bootstrap/Card';
import main2 from '../assets/main2.png';
import SearchBar from '../components/SearchBar';
import BackgroundImage from "../components/BackgroundImg";

function Main() {

  return (

    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
      style={{ backgroundImage: `url(${main2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} fluid>
         <BackgroundImage/>
         <main className="px-3">
                <SearchBar size='main' />
         </main>
      
    </div>
  );
};

export default Main;