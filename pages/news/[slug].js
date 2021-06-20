import Layout from "../../components/Layout";

export default function Article() {
    return (
        <Layout>
           <main className="px-2 py-2 md:py-8 dark:bg-black md:px-32 lg:px-64">
           <h1 className="font-extrabold text-4xl darks:text-white">Laws of Man</h1>
           <section className="flex items-center mt-8">
          <figure>
            <img
              className="rounded-full w-16 h-16 object-cover border-2 border-[#0E63F4]"
              src="https://picsum.photos/id/1/50/50"
            />
          </figure>
          <section className="ml-4 flex flex-col space-y-1">
            <p className="dark:text-white font-medium">Chika</p>
            <p className="font-light text-xs dark:text-white">Author</p>
            <p className="text-xs font-light dark:text-white">May 15, 5 min</p>
          </section>
        </section>
        <article
          className="stack mt-8"
        >
            <img src="https://picsum.photos/id/1/400/400"/>
          <h2>Love ain site</h2>
          <p>
            Elit <a>cjshjvhjks</a>aliqua ipsum deserunt Lorem est eu esse consectetur culpa
            officia nisi pariatur. Adipisicing incididunt occaecat labore qui
            labore nulla sint culpa consequat minim proident. Veniam ullamco
            pariatur nulla mollit Lorem officia ad non tempor pariatur. Enim
            officia proident incididunt ex ea magna officia laborum aliqua Lorem
            consequat nulla. Dolor nostrud irure culpa consequat magna. Do elit
            exercitation ullamco sunt exercitation. Duis esse deserunt amet
            veniam ex laboris occaecat pariatur duis officia reprehenderit
            cillum. Elit irure esse cupidatat dolore cillum cupidatat incididunt
            exercitation dolore laboris anim. Commodo eiusmod enim cupidatat
            esse consequat mollit sint duis et proident. Minim consectetur duis
            laboris enim.
          </p>
        </article>
           </main>
        </Layout>
    )
}