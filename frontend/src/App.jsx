import Counter from './Counter';
import { Buscador } from './Buscador';
import { GridGifs } from './GridGifs';
import { useSearchGifs } from './useSearchGifs';

function App() {

  //const [num, setNum] = useState(1);
//
  //const sumar = () => {
  //  setNum(num+1);
  //}

  const { valorInput, onChange, onSubmit, gifs, estaCargando } = useSearchGifs()
  
  return (
    //<div className="App">
    //  <button onClick={sumar}>+1</button>
    //  <p>{num}</p>
    //  <input type="text" />
    //</div>

    <div className='App'>
      <Buscador 
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {
        estaCargando ? (<h2>Cargando...</h2>) :
        (
          <GridGifs 
          gifs={gifs}
          />
        )
      }
    </div>
  )
}

export default App
