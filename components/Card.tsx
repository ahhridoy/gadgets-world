"use client";
import Image from "next/image";
import Link from "next/link";

interface productItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  myLink: string;
}

export default function Card(item: productItem) {
  const { id, img, title, price } = item;
  return (
    <Link href={`/camera/${id}`}>
      <div className="flex justify-center items-center flex-col border-2 p-5 rounded-md">
        <Image
          src={img}
          alt="image"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <h1>{title}</h1>
        <p className="text-xl font-bold my-3">${price}</p>
        <button className="border-2 bg-red-400 text-white px-3 py-1">
          View Details
        </button>
      </div>
    </Link>
  );
}
