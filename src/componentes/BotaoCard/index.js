import './BotaoCard.css'

const BotaoCard = (props) => {
  return (
    <button style={{ backgroundColor: props.corDeFundo }} onClick={props.onClick} className='botao-card'>
      {props.children}
    </button>
  )
}

export default BotaoCard