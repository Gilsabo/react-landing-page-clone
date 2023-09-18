import Useform from '../src/assets/images/useform.png';

export default function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div>
            <a>
              <img src={Useform} alt="Useform-Logo" />
            </a>
            <ul>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>How we're different</a>
              </li>
            </ul>
            <div>
              <a>Login</a>
              <a>Start for free</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
