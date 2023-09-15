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
                className=""
                style={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    zIndex: 1001,
                }}
            >
                <div className="">
                    <div className="">
                        <p className="">Bimestre {num}</p>
                        <img className="" onClick={onClose}src={X}/>
                    </div>
                    <div className="">
                        <p>Disciplina</p>
                        <div className="">
                            <button onClick={() => handleDisciplinaClick('Biologia')} className="">Biologia</button>
                            <button onClick={() => handleDisciplinaClick('Artes')} className="">Artes</button>
                            <button onClick={() => handleDisciplinaClick('Geografia')} className="">Geografia</button>
                            <button onClick={() => handleDisciplinaClick('Sociologia')} className="">Sociologia</button>
                        </div>
                    </div>
                    <div className="">
                        <p className="">Nota</p>
                        <div className="">
                            <input onChange={handleInputChange} type="text" value={inputValue} className="" placeholder="6.0" />
                        </div>
                    </div>
                    <div className="">
                        <button onClick={handleSubmit} className=''>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMobile