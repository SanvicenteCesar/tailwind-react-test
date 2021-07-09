import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'


export default function Home() {
  // Router
  const router = useRouter()

  // Function onClick event button
  const handleClick = (e) => {
    e.preventDefault()
    router.push('carrousel')
  };

return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
  <Head>
    <title>React-Tailwind Test</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className="welcome">
    <h3 className="font-bold text-center">Welcome!</h3>
    <div className="width-full text-center mt-5">
      <button
        onClick={handleClick}
        className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
      >
        Discover the rivers
      </button>
    </div>
  </div>
</div>
  );
}