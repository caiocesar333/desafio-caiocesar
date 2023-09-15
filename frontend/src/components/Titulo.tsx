import { useState } from 'react';
import Modal from './Modal/Modal';
import Plus from '../assets/Plus.svg'

interface Bimestre {
  num: number
}

function Titulo({ num }: Bimestre) {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='w-3/6 flex justify-between items-center mb-2'>
      <p>Bimestre {num}</p>
      <div onClick={() => setModalOpen(true)} className='bg-button-add text-background-primary 
      font-extrabold p-1 w-52 text-center rounded-[12px] flex justify-center items-center gap-5 cursor-pointer'>
        Lançar Nota
        <img  src={Plus}></img>
      </div>
      <Modal num={num} isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
    </div>
  )
}

export default Titulo
