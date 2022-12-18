import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Pagina Contato</h1>
            <span>Contato da empresa(DDD) x-xxxx-xxxx</span><br/>
            <Link to="/">Pagina Home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Contato;