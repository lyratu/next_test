// import Image from "next/image";
// import profilePic from '../../public/test.jpg'
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { hostname, origin } = window.location;
    const baseUrl = origin;
    fetch(`${baseUrl}/api/getStun`)
      .then((res) => res.json())
      .then((res) => {
        setUrl(`http://luck.${hostname}:${res.port}/lyratu`);
      });
  }, [url]);

  return (
    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 p-2">
      <div className="card-panel px-6 py-4">
        <h2 className="card-title flex items-center">
          <span>lucky panel</span>
          <div className={`light ${url ? 'green' : 'red'}`}></div>
        </h2>

        <a href={url} className="link">{url}</a>
      </div>

    </div>
  );
}
