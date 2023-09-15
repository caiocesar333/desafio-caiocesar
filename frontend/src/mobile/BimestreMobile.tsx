import Disciplina from './DisciplinaMobile';
import Titulo from './TituloMobile';
import { format } from 'date-fns';

interface BimestreProps {
    num: number;
    data: FetchedData[];
}

interface FetchedData {
    id: string;
    bimestre: string;
    disciplina: string;
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
}

function BimestreMobile({ num, data }: BimestreProps) {
    const numToBimestre: { [key: number]: string } = {
        1: 'PRIMEIRO',
        2: 'SEGUNDO',
        3: 'TERCEIRO',
        4: 'QUARTO',
    };

    const filteredData = data.filter(item => item.bimestre === numToBimestre[num]);

    // Create a list to maintain the order of disciplines
    const disciplineOrder = ['Biologia', 'Artes', 'Geografia', 'Sociologia'];
    if (filteredData.length > 0) {
        return (
            <div className=''>
                <Titulo num={num} />
                <div className='grid grid-rows-2 grid-cols-2'>
                    {disciplineOrder.map((discipline, index) => {
                        const item = filteredData.find(d => d.disciplina === discipline);
                        if (item) {
                            return (
                                <Disciplina
                                    key={index}
                                    id={item.id}  // Pass down the id
                                    nome={item.disciplina}
                                    nota={item.nota}
                                    hidden={false}
                                    criadoEm={format(new Date(item.criadoEm), 'MM/dd/yyyy')} 
                                />
                            );
                        } else {
                            return <Disciplina key={index} hidden={true} nota={0}/>;
                        }
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className='w-screen h-screen flex justify-center flex-col items-center gap-4'>
            <Titulo num={num} />
        </div>
    )
}
export default BimestreMobile;
