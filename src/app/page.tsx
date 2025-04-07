import "../app/styles/globals.scss";
import Header from "@/app/components/Header";
import BlogCard from "@/app/components/BlogCard";
import MiniBlogCard from "@/app/components/MiniBlogCard";
import LinkArrow from "@/app/components/LinkArrow";

export default function Home() {
    return (
        <main className="">
            <Header/>
            <br/>
            <BlogCard/>
            <br/>
            <MiniBlogCard/>
            <LinkArrow title="Read more" url="#"/>
        </main>
    );
}
