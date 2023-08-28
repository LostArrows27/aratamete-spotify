import { useRouter } from "next/navigation";

type HeadersProp = {
  children: React.ReactNode;
  className?: string;
};

function Headers({ children, className }: HeadersProp) {
  const router = useRouter();

  return <header className={className}>{children}</header>;
}

export default Headers;
