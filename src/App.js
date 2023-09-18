import Background from '../src/assets/images/grid-overlay.png';
import Useform from '../src/assets/images/useform.png';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="/">
            <img
              className={styles.logoHeader}
              src={Useform}
              alt="Useform-Logo"
            />
          </a>
          <ul className={styles.unorderedListHeader}>
            <li>
              <a href="/#">Pricing</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">How we're different</a>
            </li>
          </ul>
          <div className={styles.logInSectionHeader}>
            <a href="/#">Login</a>
            <a href="/#">Start for free</a>
          </div>
        </nav>
      </header>
      <section className={styles.sectionHero}>
        <img src={Background} className={styles.imageHero} alt="background" />
        <div className={styles.boxHero}>
          <div className={styles.spanSectionHero}>
            No-code forms, without the pain.
          </div>
          <h1 className={styles.headerSection}>
            The easiest way to <br /> create an
            <span> online form</span>
          </h1>
          <p>
            Build forms in <b>minutes</b> instead of hours. <br />
            The last form-builder you'll ever need.
          </p>
          <div>
            <a>Create my first form for free</a>
            <p>
              Free plan, no credit-card -<a>View pricing</a>
            </p>
            <div>
              <p>Trusted by agencies & freelancers</p>
              <div>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
