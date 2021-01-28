
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

export default function Modal({ active, data, close }) {
  const [modalHeight, setModalHeight] = useState()
  if (active) return (
    <div className="fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style={{ background: "rgba(0,0,0,.7)" }}>
      <div
        className={cn(
          "border border-teal-500 shadow-lg modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto",
          (data.type === 'image') ? `w-auto h-auto` : `w-full h-auto md:w-10/12`
        )}>
        <div className="modal-content py-1 text-left px-1 relative">

          <div className="absolute top-2 right-2 cursor-pointer z-50" onClick={close}>
            <svg className="fill-current text-black bg-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>

          {
            data && (data.type === 'image') &&
            <Image
              alt="image"
              src={data.url}
              layout="intrinsic"
              width={700}
              height={475}
            />
          }

          {
            data && (data.type === 'video') &&
            <div style={{
              position: "relative",
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
              paddingBottom: "56.25%"
            }}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                width="720"
                src={data.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

              </iframe>
            </div>

          }

        </div>
      </div>
    </div >
  )
  return (<></>)
}