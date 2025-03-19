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
    <div className=" grid grid-cols-4">
      <div className="card-panel">
        <h2 className="card-title">lucky panel</h2>
        <div className="status-indicator">
          <div className={`light ${url ? 'green' : 'red'}`}></div>
        </div>
        <a href={url} className="link">点击访问{url}</a>
      </div>

    </div>
  );
}
