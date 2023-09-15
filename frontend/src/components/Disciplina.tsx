
interface Disciplina {
    id?: string;
    nome?: string;
    nota?: number;
    hidden: boolean;
}

function Disciplina({ id, nome, nota, hidden }: Disciplina) {
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

    return (
        !hidden ? (
            <div className="flex gap-5">
                <div className={`w-40 h-36 rounded-normal flex flex-col ${getDiv()} p-2`}>
                    <p>{nome}</p>
                    <p>Data</p>
                    <label>{nota}</label>
                </div>
                <button onClick={handleDelete} className="w-1 h-1 bg-pint-text">Delete</button>
            </div>
        ) : (
            <div className="flex gap-5">
                <div className={`w-40 h-36 rounded-normal flex flex-col ${getDiv()} p-2`}>
                    <p></p>
                    <p></p>
                    <label></label>
                </div>
                <button className="w-1 h-1 bg-pint-text" style={{ visibility: 'hidden' }}/>
            </div>
        )
    );
}

export default Disciplina;
