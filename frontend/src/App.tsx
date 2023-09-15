import { useEffect, useState } from 'react';
import Bimestre from './components/Bimestre';
import BimestreMobile from './mobile/BimestreMobile';

interface FetchedData {
  id: string;
  bimestre: string;
  disciplina: string;
  nota: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

function App() {
  const [data, setData] = useState<FetchedData[]>([]);
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 440

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    fetch("http://localhost:3333/resultados")
      .then((response) => response.json())
      .then((allData) => {
        setData(allData);
        console.log(allData)
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [])

  if (width > breakpoint) {
    return (
      <div className='w-screen h-screen flex justify-center flex-col'>
        {[1, 2, 3, 4].map(num => (
          <Bimestre key={num} num={num} data={data} />
        ))}
      </div>
    );
  }

  return (
    <div className='w-screen h-screen flex flex-col p-5'>
       {[1, 2, 3, 4].map(num => (
          <BimestreMobile key={num} num={num} data={data} />
        ))}
  </div>
  )
}

export default App;
