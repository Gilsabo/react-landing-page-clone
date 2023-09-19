import SatisfactionForm from '../src/assets/images/dashboard-satisfaction-form.png';
import FieldsOverView from '../src/assets/images/fields-overview.png';
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
      <section className={`${styles.sectionHero} ${styles.container}`}>
        <img src={Background} className={styles.imageHero} alt="background" />
        <div className={styles.boxHero}>
          <div className={styles.spanSectionHero}>
            No-code forms, without the pain.
          </div>
          <h1 className={styles.headerSectionHero}>
            The easiest way to <br /> create an
            <span> online form</span>
          </h1>
          <p>
            Build forms in <b>minutes</b> instead of hours. <br />
            The last form-builder you'll ever need.
          </p>
          <div className={styles.sectionHeroLastButton}>
            <a href="/#">Create my first form for free</a>
            <p>
              Free plan, no credit-card -
              <a>
                <bold>
                  <u>View pricing</u>
                </bold>
              </a>
            </p>
            <div className={styles.sectionHeroRating}>
              <p>Trusted by agencies & freelancers</p>
              <div>
                <span>
                  <svg height="16" width="16">
                    <polygon
                      points="7.92,0 9.9,5.4 15.84,6.36 11.88,10.44 12.96,16 7.92,13.2 2.88,16 3.96,10.44 0,6.36 5.94,5.4"
                      fill="#eab308"
                    />
                  </svg>
                </span>
                <span>
                  <svg height="16" width="16">
                    <polygon
                      points="7.92,0 9.9,5.4 15.84,6.36 11.88,10.44 12.96,16 7.92,13.2 2.88,16 3.96,10.44 0,6.36 5.94,5.4"
                      fill="#eab308"
                    />
                  </svg>
                </span>
                <span>
                  <svg height="16" width="16">
                    <polygon
                      points="7.92,0 9.9,5.4 15.84,6.36 11.88,10.44 12.96,16 7.92,13.2 2.88,16 3.96,10.44 0,6.36 5.94,5.4"
                      fill="#eab308"
                    />
                  </svg>
                </span>
                <span>
                  <svg height="16" width="16">
                    <polygon
                      points="7.92,0 9.9,5.4 15.84,6.36 11.88,10.44 12.96,16 7.92,13.2 2.88,16 3.96,10.44 0,6.36 5.94,5.4"
                      fill="#eab308"
                    />
                  </svg>
                </span>
                <span>
                  <svg height="16" width="16">
                    <polygon
                      points="7.92,0 9.9,5.4 15.84,6.36 11.88,10.44 12.96,16 7.92,13.2 2.88,16 3.96,10.44 0,6.36 5.94,5.4"
                      fill="#eab308"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionHeroLastImage}>
          <img src={SatisfactionForm} alt="satisfaction form" />
        </div>
      </section>
      <section className={`${styles.container} ${styles.sectionEasyToUse}`}>
        <div className={styles.sectionEasyTouseLeftBox}>
          <span>Easy to use</span>
          <h2>Create stunning forms in minutes, without code.</h2>
          <p>
            Create an embeddable or hosted form, for any website, in minutes.
          </p>
          <hr />
          <ul>
            <li>
              <span>+</span>
              <p>Drag & drop form-builder optimized for busy people.</p>
            </li>
            <li>
              <span>10+ different types of fields.</span>
              <p>+</p>
            </li>
            <li>
              <span>+</span>
              <p>Powerful and flexible to meet your needs.</p>
            </li>
          </ul>
        </div>
        <div className={styles.sectionEasyTouseImageConainer}>
          <img src={FieldsOverView} alt="files overview" />
        </div>
      </section>
    </div>
  );
}
