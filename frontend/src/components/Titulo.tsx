import { useState } from 'react';
import Modal from './Modal/Modal';

interface Bimestre{
    num: number
}

function Titulo({num}:Bimestre) {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
      <div className='w-3/6 flex justify-between items-center mb-2'>
        <p>Bimestre {num}</p>
        <button onClick={() => setModalOpen(true)} className='bg-button-add text-background-primary font-bold p-2 w-44 text-center'>Lançar Nota</button>
        <Modal num={num} isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
      </div>
  )
}

export default Titulo
