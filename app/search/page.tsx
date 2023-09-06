import getSongbyTitle from "@/actions/getSongbyTitle";
import Headers from "@/components/headers/Headers";
import SearchInput from "@/components/search/SearchInput";
import SearchContent from "./SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

async function Search({ searchParams }: SearchProps) {
  const songs = await getSongbyTitle(searchParams.title);
  return (
    <div className="bg-neutral-900 over rounded-y-auto w-full h-full overflow-hidden rounded-lg">
      <Headers className="from-bg-neutral-900">
        <section className="gap-y-6 flex flex-col px-6 py-1 mb-2">
          <h1 className="text-3xl font-semibold text-white">Search</h1>
          <SearchInput />
        </section>
      </Headers>
      <SearchContent songs={songs} />
    </div>
  );
}

export default Search;
