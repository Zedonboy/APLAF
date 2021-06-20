import React from "react";
import NewsSlider from "./NewsSlider";

export default function TrendingSection({ mostViewed = [], latestPosts = [] }) {
  return (
    <section className="flex flex-wrap pb-8 border-b">
      <article className="w-full md:w-1/3 flex flex-col px-2">
        <figure className="w-full block m-0 h-40 bg-purple-50 rounded">
          <img className="object-cover w-full h-full" src="https://picsum.photos/id/68/200/300"/>
        </figure>
        <section className="mt-2 ">
          <a className="px-2 py-1 text-xs font-medium text-white bg-red-700">
            {latestPosts[0]?.p_tag}
          </a>
          <span className="text-xs font-semibold text-gray-700 ml-4">
            {(function () {
              let d = new Date(latestPosts[0]?.published_at);
              let dstr = d.toDateString();
              let dlist = dstr.split(" ");
              dlist.pop();
              return dlist.join(" ");
            })()}
          </span>
        </section>
        <section className="mt-4">
          <h1 className="font-bold prose-xl dark:text-white text-gray-800">
            {latestPosts[0]?.name}
          </h1>
          <p
            style={{
              maxLines: "4",
            }}
            className=" overflow-hidden prose-sm p-2 dark:text-white text-gray-700"
          >
            {latestPosts[0]?.desc}
          </p>
          <a
            href={`/news/${latestPosts[0]?.slug}`}
            style={{
              textUnderlineOffset: "4px",
              textDecorationThickness: "2px",
              float: "right",
            }}
            className="text-sm dark:text-white dark:hover:text-purple-600 text-gray-500 underline hover:text-purple-600 mt-2 py-3 px-5 font-medium"
          >
            Continue reading
          </a>
        </section>
      </article>
      <section className="w-full md:w-1/3 px-2 border-l">
        <a
          style={{
            textDecorationThickness: "3px",
            textUnderlineOffset: "6px",
          }}
          href="latestpost"
          className="hover:underline dark:text-white dark:hover:text-purple-600 hover:text-purple-600 text-xl font-medium"
        >
          Latest News
        </a>
        <NewsSlider
          articles={latestPosts}
          className="relative min-h-[24rem]"
          onTemplate={(a, i) => (
            <article className="flex flex-col border-t py-2 px-2 pl-0">
              <section>
                <a className="px-2 py-1 text-xs font-medium text-white bg-red-700">
                  {a?.p_tag}
                </a>
                <span className="text-xs dark:text-white font-semibold text-gray-700 ml-4">
                  {(function () {
                    let d = new Date(a?.published_at);
                    let dstr = d.toDateString();
                    let dlist = dstr.split(" ");
                    dlist.pop();
                    return dlist.join(" ");
                  })()}
                </span>
              </section>
              <section className="mt-4">
                <h1 className="font-bold prose-xl dark:text-white text-gray-800">
                  {a?.title}
                </h1>

                <a
                  href={`/news/${a?.slug}`}
                  style={{
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "2px",
                  }}
                  className="text-sm pl-0 dark:text-white dark:hover:text-purple-600 text-gray-500 underline hover:text-purple-600 mt-2 py-3 px-5 font-medium"
                >
                  Continue reading
                </a>
              </section>
            </article>
          )}
        />
      </section>
      <section className="w-full md:w-1/3 px-2">
        <a
          style={{
            textDecorationThickness: "3px",
            textUnderlineOffset: "6px",
          }}
          href="latestpost"
          className="hover:underline dark:text-white dark:hover:text-purple-600 hover:text-purple-600 text-xl font-medium"
        >
          Most Read
        </a>
        <NewsSlider
          articles={mostViewed}
          className="relative min-h-[24rem]"
          interval={10000}
          onTemplate={(a, i) => (
            <a
              className="rounded w-full flex h-32 py-2"
              href="./blog-single-1.html"
            >
              <img
              src={`${a?.cover}`}
                className="h-full w-1/4 flex-none bg-cover text-center overflow-hidden opacity-75"
               
                title="deit is very important"
              />
              <div className=" w-3/4 rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0  font-semibold text-base mb-2">
                    <p className="dark:text-white text-gray-700">
                      {a?.title}
                    </p>
                  </div>
                  <p
                    style={{
                      maxLines: "2",
                    }}
                    className="text-gray-500 dark:text-white font-light text-sm"
                  >
                   {a?.desc}
                  </p>
                </div>
              </div>
            </a>
          )}
        />
      </section>
    </section>
  );
}
