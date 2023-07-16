import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>Navbar</div>
      <div className="navbar--linksContainer flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/top-games">Top Games</Link>
        <Link href="/new-releases">New Releases</Link>
        <Link href="/browse">Browse</Link>
      </div>
    </nav>
  );
}
