import getSongbyTitle from "@/actions/getSongbyTitle";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

async function Search({ searchParams }: SearchProps) {
  const songs = await getSongbyTitle(searchParams.title);
  return <div>Search !</div>;
}

export default Search;
