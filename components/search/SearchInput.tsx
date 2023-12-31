"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";
import Input from "../uploadModal/Input";

function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div>
      <Input
        placeholder="What do you want to listen to ?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        error={undefined}
      />
    </div>
  );
}

export default SearchInput;
