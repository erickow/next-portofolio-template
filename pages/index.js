import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-16 md:mt-24">
      <div>
        <section className="mb-6">
          <h2 className="mb-6 text-3xl text-center font-bold">MEET INTAN KURNIAWAN</h2>

          <p className="mb-4">
            I'm a wedding filmmaker based out of Salt Lake City, and I love my job. About 3 years ago I was asked to film my first wedding, and I fell in love with it right away. I loved capturing the emotion, the details, and the love portrayed the entire day of each special couple.
          </p>
          <p className="mb-4">
          My career has taken me all over the world, capturing love in every form. I consider my career to be one of the most rewarding careers; giving me the opportunity to film Love as it happens in real time.
          </p>
          <p className="mb-4">
          Your wedding is incredibly important, obviously - and my goal as your videographer is to capture it in it's best light. In other words, my job is to make your wedding look even BETTER on film.
          </p>
        </section>

      </div>

      <Image
        alt="image"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
