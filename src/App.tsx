import { useState, useEffect } from 'react';
import api from './api';

export interface SlipProps {
  id: number;
  advice: string;
}

export interface SlipResponseProps {
  slip: SlipProps
}

function App() {
  const [slip, setSlip] = useState<SlipProps | null>(null);
  
  useEffect(() => {
    const fetchSlip = async () => {
      const { data } = await api.get<SlipResponseProps>('https://api.adviceslip.com/advice');
      
      setSlip(data.slip)
    }

    fetchSlip();
  }, []);

  return (
    <>
      <h1 style={{color: '#000'}}>{slip?.advice}</h1>
    </>
  )
}

export default App
