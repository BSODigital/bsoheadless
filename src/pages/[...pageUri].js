import { getNextStaticProps, is404 } from '@faustjs/next';
import { client } from 'client';
import {
  Header,
  EntryHeader,
  ContentWrapper,
  Footer,
  Main,
  SEO,
} from 'components';
import Gallery from 'components/Gallery';
import { pageTitle } from 'utils';

export function PageComponent({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const galleryImages = page?.gallery?.galleryImages.map((galleryImage) => {
    return galleryImage.mediaItemUrl
  });

  return (
    <>
      <SEO
        title={pageTitle(
          generalSettings,
          page?.title(),
          generalSettings?.title
        )}
        imageUrl={page?.featuredImage?.node?.sourceUrl?.()}
      />

      <Header />

      <Main>
        <EntryHeader title={page?.title()} image={page?.featuredImage?.node} />
        <div className="container">
          {galleryImages != null && <Gallery images={galleryImages}/>}
          <ContentWrapper content={page?.content()} />
        </div>
      </Main>

      <Footer />
    </>
  );
}

export default function Page() {
  const { usePage } = client;
  const page = usePage();

  return <PageComponent page={page} />;
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
