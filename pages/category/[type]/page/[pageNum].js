import CSection from "../../../../components/CategorySection";
import Layout from "../../../../components/Layout";

export default function PageWhat() {
    return (
        <Layout>
          <CSection title="Featured" />
          <main className="px-2 dark:bg-black">
            <section className="mt-4">
              <section className="flex justify-between">
                <h1 className="font-bold text-2xl dark:text-white">
                  Featured News
                </h1>
    
                <div className="flex space-x-2 top-0 right-2">
                  <button
                    onClick={(e) => {
                      scrollRight("featured");
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
                      scrollLeft("featured");
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
                id="featured"
                style={{
                  "scrollbar-width": "none",
                }}
                className="flex flex-wrap mt-2 overflow-auto"
              >
                {[2, 3, 4, 5, 6].map((v) => (
                  <div className="w-full flex-shrink-0 md:w-1/3 h-40">
                    <a
                      className="rounded w-full flex h-full py-2"
                      href="./blog-single-1.html"
                    >
                      <div
                        className="h-full w-1/4 bg-white flex-none bg-cover text-center overflow-hidden opacity-75"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")',
                        }}
                        title="deit is very important"
                      ></div>
                      <div className=" w-3/4 rounded px-4 flex flex-col justify-between leading-normal">
                        <div>
                          <div className="mt-3 md:mt-0  font-semibold text-base mb-2">
                            <p className="dark:text-white text-gray-700">
                              Aliquam venenatis nisl id purus rhoncus, in efficitur
                              sem hendrerit.
                            </p>
                          </div>
                          <p
                            style={{
                              maxLines: "2",
                            }}
                            className="text-gray-500 dark:text-white font-light text-sm"
                          >
                            Duis euismod est quis lacus elementum, eu laoreet dolor
                            consectetur.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </section>
            </section>
    
            <div className="flex mt-2 justify-center">
              <ul className="flex pl-0 list-none rounded my-2">
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </Layout>
      );
}