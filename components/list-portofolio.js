import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import Modal from '@components/modal'

function PortofolioItem({ item, open }) {
  return (
    <div
      onClick={() => open(item)}
      className="border-2 border-gray-700 relative z-2">

      <Image
        alt="image"
        src={item.thumbnail}
        width={476}
        height={297.17}
      />

      <div className="absolute top-0 right-0 bg-gray-700 px-1 py-1 z-2 text-sm">
        {item.type === 'image' ? 'gambar' : 'video'}
      </div>
    </div>
  )
}

export default function ListPortofolio({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function openModal(data) {
    setModalData(data)
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div className="title w-full bg-gray-700 px-4 py-2 mb-5">
        {item.title}
      </div>
      <div className={cn(
        "",
        item.description ? `flex flex-wrap` : `grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4`
      )}>

        {
          item.desc_position === 'left' &&
          <div className="w-full md:w-2/4 flex justify-center items-center">
            {item.description}
          </div>
        }

        {
          item.description ?
            <div className={cn(
              "w-full md:w-2/4 grid grid-cols-1",
              item.data && (item.data.length > 1) ? ` md:grid-cols-2` : ""
            )}>
              {
                item.data.map((i, idx) => (
                  <PortofolioItem item={i} key={idx} open={openModal} />
                ))
              }
            </div>
            :
            item.data.map((i, idx) => (
              <PortofolioItem item={i} key={idx} open={openModal} />
            ))
        }

        {
          item.desc_position === 'right' &&
          <div className="w-full md:w-2/4 flex justify-center items-center">
            {item.description}
          </div>
        }

      </div>
      <Modal active={modalIsOpen} data={modalData} close={closeModal} />
    </div>
  );
}
