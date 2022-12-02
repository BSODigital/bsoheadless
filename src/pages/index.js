import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import Image from 'next/image';
import {
  Posts,
  Header,
  Footer,
  Main,
  SEO,
} from 'components';
import styles from 'styles/pages/_Home.module.scss';
import { pageTitle } from 'utils';

const postsPerPage = 3;

export default function Page() {
  const { useQuery, usePosts } = client;
  const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first: postsPerPage,
    where: {
      categoryName: 'uncategorized',
    },
  });
  const mainBanner = {
    sourceUrl: '/static/banner.jpeg',
    mediaDetails: { width: 1200, height: 600 },
    altText: 'Blog Banner',
  };

  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
        imageUrl={mainBanner?.sourceUrl}
      />

      <Header />

      <Main className={styles.home}>

        <section className={styles.banner}>
          <div className="container full-height">
            <div className="row row-center full-height">
              <div className="column column-50">
                <h1>Dr Stephen Kleid MBBS FRACS</h1>
                <div className={styles.subtitle}> A Top Melbourne Ear, Nose and Throat Expert</div>
                <div className={styles.bannercontent}>
                  <p className="secondary-font title-size">Rhinoplasty and Ear Nose and Throat Surgeon with over 2000 procedures spanning 15+ years.</p>
                  </div> 
                  <a className={[styles.buttonbanner+' button']} href="https://www.drstephenkleid.com.au/contact/">Make an Enquiry</a> 
                  <a className={[styles.buttonbanner+' button button-white']} href="https://www.drstephenkleid.com.au/about/">Learn More</a>
                </div>
              </div>
          </div>
        </section>

        <section className={styles.logoscontainer}>
          <div className="container">
            <div className="row">
              <div className="column">
                <ul className={styles.logos}>
                  <li>
                    <Image src="/static/logo-1.jpg" alt="Logo" width="150px" height="90px"/>
                  </li>
                  <li>
                    <Image src="/static/logo-2.jpg" alt="Logo" width={150} height={90} />
                  </li>
                  <li>
                    <Image src="/static/logo-3.jpg" alt="Logo" width={150} height={90} />
                  </li>
                  <li>
                    <Image src="/static/logo-4.jpg" alt="Logo" width={150} height={90} />
                  </li>
                  <li>
                    <Image src="/static/logo-5.jpg" alt="Logo" width={150} height={90} />
                  </li>
                  <li>
                    <Image src="/static/logo-6.jpg" alt="Logo" width={150} height={90} />
                  </li>
                </ul>
              </div>  
            </div>
          </div>
        </section>

        <section className={styles.procedures}>
          <div className="container">
            <div className="row row-content-center">
              <div className={styles.procedurescontent + ' column column-50'}>
                <h2>Procedures</h2>
                <div className={styles.proceduresarea}><p>Dr Stephen Kleid has a great passion for his profession as an ENT Surgeon and has delivered some of the very best in nose and throat surgery.</p><p>Dr Kleid and his team strive to do everything possible, not only for your surgery but the experience as a whole, including recovery ad aftercare. He wants you, our patients to have a smooth and successful journey from your first contact to well after surgery.</p><p>Dr Kleid’s main focus is Rhinoplasty Surgery, Ear Nose and Throat Surgery as well as any Issues and Concerns, Cancer Surgery and Non-Surgical Anti-Ageing Treatments.</p></div>
              </div>
            </div>

            <div className="row row-content-center">
              <div className={styles.procedureslist}>
                <ul>
                  <li>
                    <div className={styles.procedureicon}></div>
                    <h4>Rhinoplasty</h4>
                    <div className={styles.proceduretext}>Your nose is one of the most prominent features on your face, and if you&#39;re not happy with it, it can really affect your self-confidence. Dr Stephen Kleid is a highly experienced rhinoplasty surgeon who can help you achieve the look you&#39;re after. With over 20 years experience, Dr Kleid will be able to give you the results you&#39;re looking for.</div> 
                    <a className={styles.procedurebutton + ' button-center button button-grey'} href="https://www.drstephenkleid.com.au/nose-surgery/">Learn more</a>
                  </li>
                  <li>
                    <div className={styles.procedureicon}></div>
                    <h4>Ear Nose and Throat</h4>
                    <div className={styles.proceduretext}>Many people wait too long to see an ENT specialist which can lead to more serious problems and even surgery. Dr Stephen Kleid is an ENT specialist who can help diagnose and treat your disorder. Dr Kleid has years of experience in diagnosing and treating conditions affecting the ear, nose, throat, head and neck. Schedule an appointment today and get started on feeling better tomorrow.</div> 
                    <a className={styles.procedurebutton + ' button-center button button-grey'} href="https://www.drstephenkleid.com.au/nose-surgery/">Learn more</a>
                  </li>
                  <li>
                    <div className={styles.procedureicon}></div>
                    <h4>Cost of surgery</h4>
                    <div className={styles.proceduretext}>Gain a general understanding of the range of prices, fees and costs involved in your nose or ear nose and throat surgery.</div> 
                    <a className={styles.procedurebutton + ' button-center button button-grey'} href="https://www.drstephenkleid.com.au/nose-surgery/">Learn more</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className={styles.aboutsection + ' silverbg'}>
          <div className="pinkbox pinkbox2"></div>
          <div className="container">
            <div className="row ">
              <div className={styles.aboutleft + ' column column-50'}>
                <div className={styles.abouttop}>About</div>
                <h2>Dr Stephen Kleid – ENT and Rhinoplasty Surgeon in Hawthorn East, St Kilda East and East Melbourne, Victoria. MBBS FRACS.</h2>
                <div className={styles.aboutcontent}>Dr Kleid is committed to achieving the highest standards of excellence and the very best aesthetic results. Dr Kleid provides the most advanced techniques in surgery while maintaining a high standard of patient care and professional ethics. He offers comprehensive care for all stages of your surgical journey.</div> 
                <a className="button" href="https://www.drstephenkleid.com.au/about/">Read more</a>
              </div>
              <div className={styles.aboutright + ' column column-50'}>
                <Image src="/static/home-about-right.jpg" alt=""/>
              </div>
            </div>
          </div>
        </section>

        <div className="shaped-bg"></div>

        <section className={styles.services}>
          <div className={'container ' + styles.servicescontainer}>
            <div className="row row-center ">
              <div className={styles.servicesleft + ' column column-50'}>
                <ul>
                  <li>
                    <div className={styles.serviceicon}></div>
                    <h4>Before Your Surgery</h4>
                    <div className={styles.servicecontent}>Read google patient reviews and the FAQ&#39;s to learn more about Dr Stephen Kleid.</div>
                  </li>
                  <li>
                    <div className={styles.serviceicon}></div>
                    <h4>Download Your Surgery Guide</h4>
                    <div className={styles.servicecontent}>Helpful guides about nose surgery guides to help you prepare for your surgery.</div>
                  </li>
                  <li>
                    <div className={styles.serviceicon}></div>
                    <h4>After Your Surgery</h4>
                    <div className={styles.servicecontent}>Great tips and instructions for your recovery after Rhinoplasty or ENT Surgery.</div>
                  </li>
                </ul>
              </div>
              <div className={styles.servicesright + ' column column-50'}>
                <h2>Patient Journey</h2>
                <div className={styles.servicetext}>Useful patient resources to help you prepare for your surgical journey with Dr Kleid. Whether you’re looking into risks and potential complications, recovery after surgery or you want to know what to expect from your first consult this information will help.</div>
                <a className={styles.servicebutton+' button-grey button'} href="https://www.drstephenkleid.com.au/patient-resources/">View More</a>
              </div>
            </div>
          </div>
        </section>

        <div className="shaped-bg-top"></div>

        <section className={styles.gallery+ ' silverbg'}>

          <div className="pinkbox pinkbox2"></div>
          <div className='container'>
            <div className="row">
              <div className={styles.galleryleft + ' column column-50'}>
                <h2>Before and After Gallery</h2>
                <div className={styles.gallerytext}>Here you can view actual before and after surgery photographs of Dr Kleid&#39;s past patients.</div>
                <a className={styles.gallerybutton+' button'} href="/before-after-photos/">Gallery</a>
              </div>  
              <div className={styles.galleryright + ' column column-50'}>
                <Image src="/static/gallery.png" alt=""/>
              </div>  
            </div>
          </div>
        </section>

        <div className="shaped-bg"></div>

        <section className={styles.blog}>
          <div className={'container ' + styles.blogcontainer}>
            <div className="row row-center ">
              <div className='column'>
                <div className={styles.smallheading}>Blog</div>
                <h2>Read Articles</h2>

                <Posts posts={posts?.nodes} id="posts-list" />
              </div>  
            </div>
          </div>
        </section>

       
      </Main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client
  });
}
