import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-16 md:mt-24">

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
      <div>
        <section className="mb-6">
          <h2 className="mb-6 text-3xl font-bold">Contact</h2>

          <p className="text-xl mb-3" > Whatsapp: 081234567890 </p>
          <p className="text-xl mb-3" > Line: intan123 </p>
          <p className="text-xl mb-3" > Instagram: @wawanians </p>
          <p className="text-xl mb-3" > Telegram: Intan </p>
        </section>
      </div>

    </div>
  );
}
