interface Disciplina {
    nome?: string;
    nota?: number
    hidden: boolean
}

function Disciplina({ nome, nota, hidden }: Disciplina) {

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

    return (
        !hidden ? (<div className="flex gap-5">
            <div className={`w-40 h-36 rounded-normal flex flex-col ${getDiv()} p-2`}>
                <p>{nome}</p>
                <p>Data</p>
                <label>{nota}</label>
            </div>
            <button className="w-1 h-1 bg-pint-text "></button>
        </div>) : (<div className="flex gap-5">
            <div className={`w-40 h-36 rounded-normal flex flex-col ${getDiv()} p-2`}>
                <p></p>
                <p></p>
                <label></label>
            </div>
            <button className="w-1 h-1 bg-pint-text" style={{ visibility: 'hidden' }}/>
        </div>))
}

export default Disciplina;
