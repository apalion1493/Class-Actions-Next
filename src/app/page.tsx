import "../app/styles/globals.scss";
import Header from "@/app/components/Header";
import BlogCard from "@/app/components/BlogCard";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <BlogCard/>
    </main>
  );
}
