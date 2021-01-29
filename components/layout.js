import Head from 'next/head'
import Header from "./header";
import Footer from "./footer";
import SEO_DATA from '../content/seo'

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content={SEO_DATA.site_name} key="ogsitename" />
        <meta property="og:description" content={SEO_DATA.description} key="ogdesc" />
        <meta name="description" content={SEO_DATA.description}></meta>
        <meta name="Description" content={SEO_DATA.description}></meta>
      </Head>
      <div className="flex flex-col min-h-screen text-white bg-black">
        <Header />

        <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
          {props.children}
        </main>

        <Footer />
      </div>
    </>
  );
}
