import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function ListPortofolio({ item }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="title w-full bg-gray-700 px-4 py-2 mb-5">
        {item.title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          item.data.map((i, idx) => (
            <div
              className="border-2 border-gray-700 relative z-2"
              key={idx}>

              <Image
                alt="image"
                src={i.thumbnail}
                width={476}
                height={297.17}
              />

              <div className="absolute top-0 right-0 bg-gray-700 px-2 py-1 z-2">
                {i.type === 'image' ? 'gambar' : 'video'}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
