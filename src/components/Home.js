import React from "react";
import image from "../horseshoe.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="horse" className="absolute object-cover w-full h-full" />
      <section className="flex relative justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="greet text-6xl text-indigo-100 font-bold cursive leading-none lg:leading-snug home-name">HI. MY NAME IS CHARLIE<br/>
        Shí éí Charlie yinishyé<br/>
        Ako si Charlie<br/>
        </h1>
      </section>
    </main>
  )
}