import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import image from "../assets/wheelie.jpeg";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title, 
                slug, 
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen">
      <img src={image} alt="wheelie" className="absolute object-cover w-full h-full" />
      <section className="flex relative justify-center min-h-screen min-w-screen pt-12 lg:pt-64 px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData && postData.map((post, index) => (
          <article>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-600" key={index}>
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                className="w-full h-full rounded-r object-cover absolute"/>
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">{post.title}
                  </h3>
                </span>
              </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </main>
  );
}