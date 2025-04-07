import "../app/styles/globals.scss";
import Header from "@/app/components/Header";
import BlogCard from "@/app/components/BlogCard";
import MiniBlogCard from "@/app/components/MiniBlogCard";
import LinkArrow from "@/app/components/LinkArrow";
import Button from "@/app/components/Button";

export default function Home() {
    return (
        <main className="">
            <Header/>
            <br/>
            <section className="section">
                <div className="container">
                    <BlogCard/>
                    <br/>
                    <MiniBlogCard/>
                    <br/>
                    <LinkArrow title="Read more" url="#"/>
                    <br/>
                    <br/>
                    <Button title="Button" typeButton={"button"} ariaLabel={"Button"}/>
                    <br/>
                    <Button title="Button" typeButton={"button"} ariaLabel={"Button"} disabled={true}/>
                </div>
            </section>
        </main>
    );
}
