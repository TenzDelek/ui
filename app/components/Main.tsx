import Link from "next/link";
import posts from "../[slug]/posts";

export default () => (
  <main className="mt-8 flex min-h-[85vh] justify-between gap-x-2 overflow-x-scroll">
    <div className="w-1/3">
      <h2>
        <em>(Re)Creations</em>
      </h2>
      <ul className="mt-2 flex flex-col gap-y-1.5">
        {posts()
          .filter((post) => post.metadata.category === "creations")
          .map((post, index) => (
            <li key={index}>
              <Link href={`/${post.slug}`}>{post.metadata.title}</Link>
            </li>
          ))}
      </ul>
    </div>
    <div className="w-1/3">
      <h2>
        <em>Components</em>
      </h2>
      <ul className="mt-2 flex flex-col gap-y-1.5">
        {posts()
          .filter((post) => post.metadata.category === "components")
          .map((post, index) => (
            <li key={index}>
              <Link href={`/${post.slug}`}>{post.metadata.title}</Link>
            </li>
          ))}
      </ul>
    </div>
    <div className="w-1/3">
      <h2>
        <em>Miscellaneous</em>
      </h2>
      <ul className="mt-2 flex flex-col gap-y-1.5">
        {posts()
          .filter((post) => post.metadata.category === "misc")
          .map((post, index) => (
            <li key={index}>
              <Link href={`/${post.slug}`}>{post.metadata.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  </main>
);
