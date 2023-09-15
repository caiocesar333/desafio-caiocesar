import Trash from '../assets/Trash.svg'
import Chart from '../assets/Chart.svg'
import ChartYellow from '../assets/ChartYellow.svg'
import ChartGreen from '../assets/ChartGreen.svg'

interface Disciplina {
    id?: string;
    nome?: string;
    nota: number;
    hidden: boolean;
    criadoEm?: string;
}

function DisciplinaMobile({ id, nome, nota, hidden, criadoEm }: Disciplina) {
    const getDiv = () => {
        switch (nome) {
            case 'Biologia':
                return 'bg-biologia';
            case 'Artes':
                return 'bg-artes';
            case 'Geografia':
                return 'bg-geografia';
            case 'Sociologia':
                return 'bg-sociologia';
            default:
                return 'bg-default';
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3333/resultados/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                console.log('Successfully deleted.');
                window.location.reload()
            } else {
                console.log('Failed to delete.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const textColor = ()=>{
        if(nota <= 6) { return ('text-pint-text')}
        if(6 < nota && nota < 8) return ('text-yellow-text')
        if(nota >= 8) return ('text-green-text')
    }
    const getSvgColor = () => {
        if (nota <= 6) return Chart;
        if (nota > 6 && nota < 8) return ChartYellow;
        if (nota >= 8) return ChartGreen;
    };


    return (
        !hidden ? (
            <div className="w-full h-36 flex gap-1 justify-start items-start mt-8 ">
                <div className={`w-36 h-32 rounded-normal flex flex-col ${getDiv()} gap-1 sm:w-32`}>
                    <p className='pl-2 mt-2'>{nome}</p>
                    <p className='text-xs pl-2 mb-4'>{criadoEm}</p>
                    <div className='flex gap-1 w-40 bg-background-primary opacity-80 pl-5 items-center py-1 '>
                        <img src={getSvgColor()}/>
                        <label className={`text-base  ${textColor()}`}  >{nota}</label>
                    </div>
                </div>
                <img className='w-8 hover:cursor-pointer sm:w-6' src={Trash} onClick={handleDelete} ></img>
            </div>
        ) : (
            <div className="">
                <div className={`${getDiv()}`}>
                    <p></p>
                    <p></p>
                    <label></label>
                </div>
                <img className='hover:cursor-pointer' src={Trash} style={{ visibility: 'hidden' }} />
            </div>
        )
    );
}

export default DisciplinaMobile;
