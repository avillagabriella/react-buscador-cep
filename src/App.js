import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
        <h1 className="title">Buscador CEP</h1>
        
        <div className="containerInput">
          <input
          type="text"
          placeholder="Didite seu CEP..."
          /> 

          <button className="buttonSearch">
            <FiSearch size={12} color="#FFF"/>
          </button>  
        </div>

        <main className="main">
          <h2>CEP: 22233344</h2>

          <span>Rua Teste algum</span>
          <span>Complemento: Algum complemento</span>
          <span>Vila Teste</span>
          <span>Teresina - PI</span>

        </main>
    </div>
  );
}

export default App;



// esse é o principal