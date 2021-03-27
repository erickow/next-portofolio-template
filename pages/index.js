import Image from "next/image";
import Head from 'next/head'
import SEO_DATA from '../content/seo'
import HOMEPAGE_DATA from '../content/homepage'

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.link_image} key="ogimage" />
        <meta property="og:title" content={'Home'} key="ogtitle" />
        <title>{SEO_DATA.title + ' - Home'}</title>
      </Head>
      <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-16 md:mt-24">
        <div>
          <section className="mb-6">
            <h2 className="mb-6 text-3xl text-center font-bold">{HOMEPAGE_DATA.title}</h2>

            {
              HOMEPAGE_DATA && HOMEPAGE_DATA.description.map((i, idx) => {
                return (
                  <p className="mb-4" key={idx}>{i}</p>
                )
              })
            }
          </section>

        </div>
        {
          HOMEPAGE_DATA && HOMEPAGE_DATA.image &&
          <Image
            alt="image"
            src={HOMEPAGE_DATA.image.url}
            width={HOMEPAGE_DATA.image.ratio.width}
            height={HOMEPAGE_DATA.image.ratio.height}
            layout="responsive"
          />
        }

      </div>
    </>
  );
}
