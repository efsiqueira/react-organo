import BotaoCard from '../BotaoCard'
import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoColaboradorExcluido }) => {
  
  const aoExcluir = (evento) => {
    evento.preventDefault()
    aoColaboradorExcluido(nome)
  }
  
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <BotaoCard corDeFundo={corDeFundo} onClick={aoExcluir}>
          Excluir
        </BotaoCard>
      </div>
    </div>
  )
}

export default Colaborador