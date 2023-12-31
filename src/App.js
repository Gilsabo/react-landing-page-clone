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
      <section className={styles.sectionPackedWithFeatures}>
        <h2 className={styles.sectionPackedWithFeaturesHeader}>
          Packed with features to help you succeed.
        </h2>
        <p className={styles.sectionPackedWithFeaturesparagraph}>
          Useform makes it easy to create forms for any use-case, without code.
        </p>
        <div className={styles.sectionPackedWithFeaturesmainContainer}>
          <div className={styles.box}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="rgb(36, 99, 235)"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                />
              </svg>
            </span>
            <h3>Easy to use</h3>
            <p>
              An intuitive drag-and-drop form-builder for every use-case which
              you’ll love using.
            </p>
          </div>
          <div className={styles.box}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="rgb(36, 99, 235)"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.620m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
            </span>
            <h3>Customize your forms</h3>
            <p>
              We make it easy to customize your forms to fit your company or
              client branding, without code.
            </p>
          </div>
          <div className={styles.box}>
            <span>
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="rgb(36, 99, 235)" // Set the color to rgb(36, 99, 235)
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <h3>Save time & money</h3>
            <p>
              Stop spending time & money on the development of forms, focus on
              what matters the most.
            </p>
          </div>
          <div className={styles.box}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="rgb(36, 99, 235)" // Set the color to rgb(36, 99, 235)
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                />
              </svg>
            </span>
            <h3>High Delivery</h3>
            <p>
              We guarantee an high deliverability and uptime, thanks to our
              scalable infrastructure.
            </p>
          </div>
          <div className={styles.box}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="rgb(36, 99, 235)" // Set the color to rgb(36, 99, 235)
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </span>
            <h3>Integrate with your tools</h3>
            <p>
              Never miss a submission, connect your forms to your favorite tools
              without disrupting your workflow.
            </p>
          </div>
          <div className={styles.box}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="rgb(36, 99, 235)" // Set the color to rgb(36, 99, 235)
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </span>
            <h3>Easily handle file uploads</h3>
            <p>
              Allow file uploads on your submissions with ease, no extra setup
              required.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sectionIntegrateWithplatforms}>
        <h2>Integrate with popular platforms</h2>
        <p>
          Useform can integrate with many platforms, including Framer, Webflow,
          Carrd, and more.
        </p>
        <a>View all platforms</a>
      </section>
      <section className={styles.sectionBlack}>
        <h2>
          Ditch your bloated form builder and
          <br /> focus on what matters the most.
        </h2>
        <p>
          Create a form, embed it into your website
          <br /> and share it with your clients, in minutes.
        </p>
        <a>Get started for free</a>
      </section>
    </div>
  );
}
