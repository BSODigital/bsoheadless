import * as MENUS from 'constants/menus';

// import appConfig from 'app.config';
import {
  FaFacebookF,
  // FaGithub,
  FaInstagram,
  FaLinkedinIn,
  // FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { NavigationMenu } from 'components';

import styles from './Footer.module.scss';

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <NavigationMenu
          className={styles.nav}
          menuLocation={MENUS.FOOTER_LOCATION}
        />

        <div className={styles.copyright}>
          <div className="left-part">
            &copy; {new Date().getFullYear()} - Dr Stephen Kleid FRACS. All Rights Reserved.
          </div>
          <div className="right-part">
            <a className="logo-footer" href="https://cocorubyplasticsurgery.com.au/" target="_blank" rel="noopener noreferrer">
              
            </a>
            <div className="social-links"> 
              <a href="https://www.facebook.com/drstephenkleid" target="_blank" rel="noopener noreferrer">
                <FaFacebookF
                  title="Facebook"
                  className={styles['social-icon']}
                />
              </a>
              <a href="https://www.instagram.com/drstephenkleid/" target="_blank" rel="noopener noreferrer">
                <FaInstagram 
                  title="Instagram"
                  className={styles['social-icon']}
                />
              </a>
              <a href="https://www.youtube.com/playlist?list=PL6Jjhwa1iz3XqL6kmz86i4ezFtaHIJTNq" target="_blank" rel="noopener noreferrer">
                <FaYoutube
                  title="YouTube"
                  className={styles['social-icon']}
                />
              </a>
              <a href="https://www.linkedin.com/in/stephen-kleid-06617038/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn
                  title="LinkedIn"
                  className={styles['social-icon']}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
