import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">
      <nav className="flex justify-between
      item-center w-full mb-5 pt-5">
        <img src={logo} alt="sumz_logo" 
        className="w-28 object-contain"/>

        <button
          type="button"
          onClick={() => window.open('https://github.com/yogeshk04/ai_summarizer')}
          className="black_btn"
        >GitHub</button>
      </nav>

      <h1 className='head_text'>
        Summarize Artical with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with AI summarizer, an open-source article Summarizer that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero