import { useState } from 'react';

export const useSearchGifs = () => {

  const [valorInput, setValorInput] = useState('');
  //
    const onChange = (evento) => {
      const valor = evento.target.value;
      setValorInput(valor)
    }
  
    const [gifs, setGifs] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);
  
    const getGifs = async (query) => {
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=8jIkTa8SZlkXZWH5xJcqFRpgJNx9uhIf&q=${query}`;
      setEstaCargando(true);
      const response = await fetch(url);
      const data = await response.json();
      setEstaCargando(false);
      return data.data;
      console.log(data)
    }
  
    const onSubmit = async (evento) => {
      evento.preventDefault()
      const gifs = await getGifs(valorInput)
      setGifs(gifs)
    }


  return {
    onSubmit,
    onChange,
    valorInput,
    gifs,
    estaCargando
  }

}
