import CSection from "../components/CategorySection";
import Layout from "../components/Layout";
import TrendingSection from "../components/TrendingSection";

const scrollLeft = (catName = "") => {
  let id = catName.replace(" ", "-").toLowerCase().trim();
  let elm = document.querySelector(`#${id}`);
  if (elm) {
    let scrollOffset = window.innerWidth;
    elm.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  }
};

const scrollRight = (catName = "") => {
  let id = catName.replace(" ", "-").toLowerCase().trim();
  let elm = document.querySelector(`#${id}`);
  if (elm) {
    let scrollOffset = window.innerWidth;
    elm.scrollBy({
      top: 0,
      left: -scrollOffset,
      behavior: "smooth",
    });
  }
};

export default function Home({cats, mostViewed, latestPosts}) {
  return (
    <Layout>
      <CSection cats={cats}  title="Home" />
      <main className="px-2 dark:bg-black">
        <TrendingSection mostViewed={mostViewed} latestPosts={latestPosts} />
        {cats.map(c => (
          <section className="mt-10 px-8 md:px-12">
          <section className="flex justify-between">
          <h1 className="font-bold text-2xl dark:text-white">
            {c.name}
          </h1>

          <div className="flex space-x-2 top-0 right-2">
            <button
              onClick={(e) => {
                scrollRight(c.name);
              }}
              className="p-1 dark:text-purple-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                scrollLeft(c.name);
              }}
              className="p-1 dark:text-purple-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>
        
        <section
          id={c.name.replace(" ", "-").toLowerCase().trim()}
          style={{
            "scrollbar-width": "none",
          }}
          className="flex mt-2 catSection overflow-auto"
        >
          {c.articles.map((v) => (
            <div className="w-full flex-shrink-0 md:w-1/3 h-40">
              <a
                className="rounded w-full flex h-full py-2"
                href={`/news/${v.slug}`}
              >
                <img className="h-full w-2/5 bg-white flex-none bg-cover text-center overflow-hidden opacity-75" src={`${v.cover}`}/>
                
                <div className=" w-3/5 rounded pl-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div className="mt-3 md:mt-0  font-semibold text-base mb-2">
                      <p className="dark:text-white text-gray-700">
                        {v.title}
                      </p>
                    </div>
                    <p
                      style={{
                        maxLines: "2",
                      }}
                      className="text-gray-500 dark:text-white font-light text-sm"
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </section>

        ))}
              </main>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let articles = [{
    title: "Man U sell Ronaldo",
    cover: "https://picsum.photos/id/1/200/300",
    published_at: (new Date()).toString(),
    p_tag: "New Analysis",
    desc: "On wednesday Chelsea decided to sell somebody"
  }, {
    title: "Godzilla flies over Japan",
    published_at: (new Date()).toString(),
    cover: "https://picsum.photos/id/1/200/300",
    p_tag: "New Analysis",
    desc: "On wednesday Chelsea decided to sell somebody"
  },{
    title: "Independence Day",
    published_at: (new Date()).toString(),
    cover: "https://picsum.photos/id/1/200/300",
    p_tag: "New Analysis",
    desc: "On wednesday Chelsea decided to sell somebody"
  },{
    title: "Alaigbo Invents Drones",
    published_at: (new Date()).toString(),
    cover: "https://picsum.photos/id/1/200/300",
    p_tag: "New Analysis",
    desc: "On wednesday Chelsea decided to sell somebody"
  },
  {
    title: "We will never stop",
    published_at: (new Date()).toString(),
    cover: "https://picsum.photos/id/1/200/300",
    p_tag: "New Analysis",
    desc: "On wednesday Chelsea decided to sell somebody"
  },]
  return {
    props: {
      cats : [
        {name: "Politics", articles: articles},
        {name: "Sports", articles: articles},
        {name: "Health", articles: articles},
        {name: "Tech", articles: articles}
      ],

      mostViewed: articles,
      latestPosts: articles
    }
    
  }
}
