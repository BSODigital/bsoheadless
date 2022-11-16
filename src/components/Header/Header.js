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
  const phoneNumbersClasses = cn([styles.headerphonenumbers])
  const topBarMenuContainerClasses = cn([styles.headertopbarmenucontainer])

  return (
    <header className={headerClasses}>
      <SkipNavigationLink />
      <div className="greenbg">
        <div className="container container-header cf">

          <div className={phoneNumbersClasses}>
            <div className="inner-phone">
              <div className="number-area-1">
                <strong>PH FOR RHINOPLASTY:</strong>
                  <Link href="tel:1300264811">
                    <a title="phone number">1300 264 811</a>
                  </Link> 
                  or <strong>EAR NOSE AND THROAT:</strong> 
                  <Link href="tel:0390381630">
                    <a title="phone number 2">03 9038 1630</a>
                  </Link>
                  
                </div>
            </div>
          </div>

          <div className={topBarMenuContainerClasses}>
            <NavigationMenu
              id={styles['top-navigation']}
              className={navClasses}
              menuLocation={MENUS.TOP_LOCATION}
            >
            </NavigationMenu>
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
