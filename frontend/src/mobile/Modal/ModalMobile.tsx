import { useState } from "react";
import X from '../../assets/X.svg'

interface Modal {
    isOpen: boolean;
    onClose: () => void;
    num: number;
}

function ModalMobile({ isOpen, onClose, num }: Modal) {

    const [inputValue, setInputValue] = useState('');
    const [selectedDisciplina, setSelectedDisciplina] = useState('');  // <-- New state variable

    const handleDisciplinaClick = (disciplina: string) => {
        setSelectedDisciplina(disciplina);
    };

    const handleSubmit = async () => {
        const bimestreMap: { [key: number]: string } = {
            1: 'PRIMEIRO',
            2: 'SEGUNDO',
            3: 'TERCEIRO',
            4: 'QUARTO',
        };
        const currentDate = new Date().toISOString();
        const payload = {
            bimestre: bimestreMap[num],
            disciplina: selectedDisciplina,
            nota: parseFloat(inputValue),
            criadoEm: currentDate,
            atualizadoEm: currentDate
        };
        try {
            // POST the data to create new grade or PUT to update existing one.
            // You would have logic here to decide whether to POST or PUT
            const response = await fetch('http://localhost:3333/resultados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                window.location.reload()
            } else {
                console.log('Failed:', response);
                alert("Something went wrong :(")
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        const regex = /^[0-9]*(\.[0-9]{0,1})?$/; // Regular expression to match numbers with one decimal place

        // Only update the state if the new value matches the regular expression
        if (regex.test(value) && parseFloat(value) <= 10) {
            setInputValue(value);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
            }}
        >
            <div
                className="flex justify-center items-center"
                style={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    zIndex: 1001,
                }}
            >
                <div className="w-500 flex flex-col bg-background-primary">
                    <div className="flex justify-between m-6">
                        <p className="text-2xl">Bimestre {num}</p>
                        <img className="hover:cursor-pointer" onClick={onClose} src={X} />
                    </div>
                    <div className="flex flex-col px-4">
                        <p className="p-2">Disciplina</p>
                        <div className=" grid grid-cols-2 grid-rows-2 gap-2 px-4">
                            <button onClick={() => handleDisciplinaClick('Biologia')} className="w-22 h-16 rounded-normal bg-biologia-modal">Biologia</button>
                            <button onClick={() => handleDisciplinaClick('Artes')} className="w-22 h-16 rounded-normal bg-artes-modal">Artes</button>
                            <button onClick={() => handleDisciplinaClick('Geografia')} className="w-22 h-16 rounded-normal bg-geografia-modal">Geografia</button>
                            <button onClick={() => handleDisciplinaClick('Sociologia')} className="w-22 h-16 rounded-normal bg-sociologia-modal">Sociologia</button>
                        </div>
                    </div>
                    <div className="flex flex-col mx-3 gap-5 p-4">
                        <p className="text-xs">Nota</p>
                        <div className="flex">
                            <input onChange={handleInputChange} type="text" value={inputValue} className="w-36 h-16 rounded-normal bg-transparent 
                            border border-background-primary text-center opacity-40" placeholder="6.0" />
                        </div>
                    </div>
                    <div className="flex justify-end m-5">
                        <button onClick={handleSubmit} className='bg-button-add text-background-primary font-bold py-3 px-4 w-22 text-center rounded'>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMobile