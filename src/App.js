import Useform from '../src/assets/images/useform.png';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className="App">
      <section>
        <header>
          <nav>
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
          </nav>
        </header>
      </section>
    </div>
  );
}
