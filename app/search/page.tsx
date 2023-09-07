import getSongbyTitle from "@/actions/getSongbyTitle";
import SearchContent from "@/components/search/SearchContent";
import SearchInput from "@/components/search/SearchInput";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

async function Search({ searchParams }: SearchProps) {
  const songs = await getSongbyTitle(searchParams.title);
  return (
    <>
      <section className="gap-y-6 flex flex-col px-6 py-1 mb-2">
        <h1 className="text-3xl font-semibold text-white">Search</h1>
        <SearchInput />
      </section>
      <SearchContent songs={songs} />
    </>
  );
}

export const revalidate = 0;

export default Search;
