import * as MENUS from 'constants/menus';

import { classNames as cn } from 'utils';
import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenu, SkipNavigationLink } from 'components';

import styles from './Header.module.scss';
/**
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header({ className }) {
  const [isNavShown, setIsNavShown] = useState(false);

  const headerClasses = cn([styles.header, className]);
  const navClasses = cn([
    styles['primary-navigation'],
    isNavShown ? styles['show'] : undefined,
  ]);

  return (
    <header className={headerClasses}>
      <SkipNavigationLink />
      <div class="greenbg">
        <div class="container cf">
          <div class="phone-numbers">
            <div class="inner-phone">
              <div class="number-area-1"><p><strong>PH FOR RHINOPLASTY:</strong>&nbsp;<a href="tel:1300264811">1300 264 811</a>&nbsp;or <strong>EAR NOSE AND THROAT:</strong>&nbsp;<a href="tel:0390381630">03 9038 1630</a></p></div>
            </div>
          </div>
          <div class="top-bar-menu-container">
            <NavigationMenu
              id={styles['primary-navigation']}
              className={navClasses}
              menuLocation={MENUS.TOP_LOCATION}
            >
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles['bar']}>
          <div className={styles['logo']}>
            <Link href="/">
              <a title="Home">
                <Image
                  src="/logo.jpg"
                  width={400}
                  height={80}
                  alt="Blueprint media logo"
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
          <button
            type="button"
            className={styles['nav-toggle']}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={styles['primary-navigation']}
            aria-expanded={isNavShown}
          >
            <FaBars />
          </button>
          <NavigationMenu
            id={styles['primary-navigation']}
            className={navClasses}
            menuLocation={MENUS.PRIMARY_LOCATION}
          >
            <li>
              <Link href="/search">
                <a>
                  <FaSearch title="Search" role="img" />
                </a>
              </Link>
            </li>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
