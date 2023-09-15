import Disciplina from './Disciplina';
import Titulo from './Titulo';

interface BimestreProps {
    num: number;
    data: FetchedData[];
}

interface FetchedData {
    bimestre: string;
    disciplina: string;
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
}

function Bimestre({ num, data }: BimestreProps) {
    const numToBimestre: { [key: number]: string } = {
        1: 'PRIMEIRO',
        2: 'SEGUNDO',
        3: 'TERCEIRO',
        4: 'QUARTO',
    };

    const filteredData = data.filter(item => item.bimestre === numToBimestre[num]);

    // Create a list to maintain the order of disciplines
    const disciplineOrder = ['Biologia', 'Artes', 'Geografia', 'Sociologia'];

    return (
        <div className='w-screen h-screen flex justify-center flex-col items-center gap-4'>
            <Titulo num={num} />
            <div className='w-3/6 flex gap-10'>
                {disciplineOrder.map((discipline, index) => {
                    // Find the corresponding data for this discipline
                    const item = filteredData.find(d => d.disciplina === discipline);
                    if (item) {
                        return <Disciplina key={index} nome={item.disciplina} nota={item.nota} hidden={false}/>;
                    } else {
                        // If no data for this discipline, display "N/A" or some other placeholder
                        return <Disciplina key={index} hidden={true}/>;
                    }
                })}
            </div>
        </div>
    );
}


export default Bimestre;
