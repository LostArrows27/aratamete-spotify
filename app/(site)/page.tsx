import Headers from "@/components/headers/Headers";
import ListItem from "@/components/headers/ListItem";

export default function Home() {
  return (
    <div className="bg-neutral-900 relative w-full h-full overflow-hidden overflow-y-auto rounded-lg">
      <Headers>
        <section className="px-6 py-1 mb-2">
          <h1 className="text-3xl font-semibold text-white">Welcome Back</h1>
          <div className=" sm-grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid grid-cols-1 gap-3 mt-4">
            <ListItem name="Liked Songs" href="/" image="/image/liked.webp" />
          </div>
        </section>
      </Headers>
      <main className="mb-7 mt-7 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Newest Song</h2>
        </div>
        <div>List of songs !</div>
      </main>
    </div>
  );
}
