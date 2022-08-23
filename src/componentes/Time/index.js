import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
  const cssBackground = { backgroundColor: props.corSecundaria }
  const cssBorder = { borderColor: props.corPrimaria }

  return (
    (props.colaboradores.length > 0) ? <section className='time' style={cssBackground}>
      <h3 style={cssBorder}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
      </div>
    </section>
    : ''
  )
}

export default Time