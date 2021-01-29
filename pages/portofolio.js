import Head from 'next/head'
import SEO_DATA from '../content/seo'
import ListPortofolio from '@components/list-portofolio'
import PORTOFOLIO_DATA from '../content/portofolio'

export default function PortofolioPage() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.url+"/wawan-videograpy-brand.png"} key="ogimage" />
        <meta property="og:title" content={'Portofolio'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Portofolio'}</title>
      </Head>
      <div className="grid grid-cols-1 mt-16 md:mt-24">
        <div>
          {
            PORTOFOLIO_DATA.map((i, idx) => (
              <section className="mb-7" key={idx}>
                <ListPortofolio item={i} />
              </section>
            ))
          }
        </div>
      </div>
    </>
  );
}
