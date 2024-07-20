import Header from '../../components/Header';
import Carrusel from '../../components/Carrusel';
import Categorias from '../categoria/Categoria';

function Home() {
    return(
        <div>
            <Header/>
            <Carrusel/>
            <Categorias/>
        </div>
    );
}

export default Home;