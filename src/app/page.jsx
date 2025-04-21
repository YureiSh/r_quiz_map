'use client';
import Link from "next/link";

const Home = () => {
  return(
    <section className="w-full flex-center flex-col bg-blue-600 h-screen">
      <h1 className="head_text text-center cursor-default"> Time to play the Gameeee</h1>
      <br className="max-md:hidden" />
      <span className="blue-gradient text-center text-4xl cursor-default">Roadmap game i did</span>
      <br />
      <Link
        href="/play"
        className="px-6 py-2 bg-white text-blue-600 font-bold rounded cursor-pointer hover:bg-gray-200 transition"
      >
        Start Playing
      </Link>
    </section>
  )

}

export default Home