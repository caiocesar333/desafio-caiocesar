import { useState } from 'react';
import Modal from './Modal/ModalMobile';
import Plus from '../assets/Plus.svg'

interface Bimestre {
  num: number
}

function TituloMobile({ num }: Bimestre) {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='w-full flex justify-between items-center mt-4'>
      <p>Bimestre {num}</p>
      <div onClick={() => setModalOpen(true)} className='bg-button-add text-background-primary 
      font-extrabold rounded-[12px] flex justify-center items-center  cursor-pointer px-4 py-2 mr-12'>
        <img  src={Plus}></img>
      </div>
      <Modal num={num} isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
    </div>
  )
}

export default TituloMobile
