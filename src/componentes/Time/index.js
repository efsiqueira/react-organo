import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ corSecundaria, corPrimaria, nome, colaboradores, aoColaboradorExcluido }) => {
  const cssBackground = { backgroundColor: corSecundaria }
  const cssBorder = { borderColor: corPrimaria }

  return (
    (colaboradores.length > 0) ? <section className='time' style={cssBackground}>
      <h3 style={cssBorder}>{nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map( colaborador => <Colaborador aoColaboradorExcluido={aoColaboradorExcluido} corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
      </div>
    </section>
    : ''
  )
}

export default Time