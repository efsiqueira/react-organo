import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' targe='_blank'>
              <img src='/imagens/fb.png' alt='' />
            </a>
          </li>
          <li>
            <a href='twitter.com' targe='_blank'>
              <img src='/imagens/tw.png' alt='' />
            </a>
          </li>
          <li>
            <a href='instagram.com' targe='_blank'>
              <img src='/imagens/ig.png' alt='' />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src='imagens/logo.png' alt='' />
      </section>
      <section>
        <p>
          Desenvolvido por Eduardo Siqueira.
        </p>
      </section>
    </footer>
  )
}

export default Rodape