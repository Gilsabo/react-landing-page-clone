import SatisfactionForm from '../src/assets/images/dashboard-satisfaction-form.png';
import EmbedeFuture from '../src/assets/images/embed-feature.png';
import FieldsOverView from '../src/assets/images/fields-overview.png';
import FileUpload from '../src/assets/images/file-upload.png';
import FormStyling from '../src/assets/images/form-styling.png';
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
        <div className={styles.sectionLeftBox}>
          <span className={styles.badgeSection}>Easy to use</span>
          <h2 className={styles.headerSection}>
            Create stunning forms in minutes, without code.
          </h2>
          <p className={styles.paragraphSection}>
            Create an embeddable or hosted form, for any website, in minutes.
          </p>
          <div className={styles.breakLine} />
          <ul className={styles.unorderedList}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Drag & drop form-builder optimized for busy people.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>10+ different types of fields.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Powerful and flexible to meet your needs.</p>
            </li>
          </ul>
        </div>
        <div className={styles.sectionImageConainer}>
          <img src={FieldsOverView} alt="files overview" />
        </div>
      </section>
      <section
        className={`${styles.container} ${styles.sectionIntegrationMadeSimple}`}
      >
        <div className={styles.sectionImageConainer}>
          <img src={EmbedeFuture} alt="files overview" />
        </div>
        <div className={styles.sectionRightBox}>
          <span className={styles.badgeSection}>Integration made simple</span>
          <h2 className={styles.headerSection}>
            Embed into your website, or use our hosted form.
          </h2>
          <p className={styles.paragraphSection}>
            Make it personal and embed it into your website (HTML, Framer, etc).
            Or use the hosted form, and share the link with your audience.
          </p>
          <div className={styles.breakLine} />
          <ul className={styles.unorderedList}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Easy HTML embed, 3 lines of code.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Integrate with many platforms.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Hosted form with shareable link.</p>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`${styles.container} ${styles.sectionStylingAndBranding}`}
      >
        <div className={styles.sectionLeftBox}>
          <span className={styles.badgeSection}>Styling & branding</span>
          <h2 className={styles.headerSection}>
            Your brand will shine, not ours.
          </h2>
          <p className={styles.paragraphSection}>
            It's important for us to make sure your forms reflect your branding
            or client branding. We took styling further than any other form
            builder.
          </p>
          <div className={styles.breakLine} />
          <ul className={styles.unorderedList}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>30+ different styling options.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Styling works on both embed & hosted forms.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Inject custom CSS on your forms (soon).</p>
            </li>
          </ul>
        </div>
        <div className={styles.sectionImageConainer}>
          <img src={FormStyling} alt="files overview" />
        </div>
      </section>
      <section className={`${styles.container} ${styles.sectionFileUploading}`}>
        <div className={styles.sectionImageConainer}>
          <img src={FileUpload} alt="files overview" />
        </div>
        <div className={styles.sectionRightBox}>
          <span className={styles.badgeSection}>File uploading</span>
          <h2 className={styles.headerSection}>
            Receive files and images through your forms
          </h2>
          <p className={styles.paragraphSection}>
            Building file uploading is a pain. We made it easy for you to
            receive any type of files through your forms.
          </p>
          <div className={styles.breakLine} />
          <ul className={styles.unorderedList}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Receive files and images through your forms.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Restrict file types.</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3b82f6"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Allow one or multiple files per upload.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
