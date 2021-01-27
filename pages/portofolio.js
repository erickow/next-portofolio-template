import ListPortofolio from '@components/list-portofolio'
import PORTOFOLIO_DATA from '../content/portofolio'

export default function PortofolioPage() {
  return (
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
  );
}
