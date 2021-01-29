import Image from "next/image";
import Head from 'next/head'
import SEO_DATA from '../content/seo'
import CONTACT_DATA from '../content/contact'
export default function ContactPage() {
  return (
    <>
      <Head>
        <meta name="description" content={SEO_DATA.description}></meta>
        <meta property="og:url" content={SEO_DATA.url} key="ogurl" />
        <meta property="og:image" content={SEO_DATA.url+"/wawan-videograpy-brand.png"} key="ogimage" />
        <meta property="og:title" content={'Contact'} key="ogtitle" />
        <meta property="og:description" content={SEO_DATA.description} key="ogdesc" />
        <title>{SEO_DATA.title + ' - Contact'}</title>
      </Head>
      <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-16 md:mt-24">

        {
          CONTACT_DATA && CONTACT_DATA.image &&
          <Image
            alt="image"
            src={CONTACT_DATA.image.url}
            width={CONTACT_DATA.image.ratio.width}
            height={CONTACT_DATA.image.ratio.height}
          />
        }
        <div>
          <section className="mb-6">
            <h2 className="mb-6 text-3xl font-bold">{CONTACT_DATA && CONTACT_DATA.title}</h2>

            {
              CONTACT_DATA && CONTACT_DATA.list.map((l, idx) => {
                return (
                  <div className="flex flex-wrap justify-start items-center gap-2 mb-3" key={idx}>
                    {
                      l && l.icon &&
                      <Image
                        alt="image"
                        src={l.icon}
                        width={24}
                        height={24}
                      />
                    }
                    {
                      l && l.description &&
                      <a href={l.link} className="text-md">{l.description}</a>
                    }
                  </div>
                )
              })
            }
          </section>
        </div>

      </div>
    </>
  );
}
