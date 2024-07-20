import Header from '../../components/Header';
import Carrusel from '../../components/Carrusel';
import Categorias from '../categoria/Categoria';
import PlacesList from '../lugar/PlacesList';

function Home() {
    return(
        <div>
            <Header/>
            <Carrusel/>
            <Categorias/>
            <PlacesList/>
        </div>
    );
}

export default Home;