import { useEffect, useState } from 'react';
import Bimestre from './components/Bimestre';

interface FetchedData {
  bimestre: string;
  disciplina: string;
  nota: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

function App() {
  const [data, setData] = useState<FetchedData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/resultados")
      .then((response) => response.json())
      .then((allData) => {
        setData(allData);
        console.log(allData)
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className='w-screen h-screen flex justify-center flex-col'>
      {[1, 2, 3, 4].map(num => (
        <Bimestre key={num} num={num} data={data} />
      ))}
    </div>
  );
}

export default App;
