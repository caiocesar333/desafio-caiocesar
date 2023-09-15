
interface Bimestre{
    num: number
}

function Titulo({num}:Bimestre) {

  return (
      <div className='w-3/6 flex justify-between items-center'>
        <p>Bimestre {num}</p>
        <button>Lançar Nota</button>
      </div>
  )
}

export default Titulo
