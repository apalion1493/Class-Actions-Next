import Link from "next/link";

const BlogCard = () => {
    return (
        <div className="p-5 rounded-xl border border-LightGrey shadow-v1 transition-all hover:border-blue100 @@Style">
            <div className="rounded-lg overflow-hidden mb-5 flex items-center justify-center h-[143px]">
                {/*<img className="w-full h-full object-cover" src="img/Img-component-1.png" alt="What is Bankruptcy?"/>*/}
            </div>
            <div className="flex flex-col">
                <div className="mb-5 flex items-center justify-between gap-x-2">
                    <span>Category</span>
                    <time className="flex items-center gap-x-1 text-right" dateTime="2025-01-27">
                        <i></i>
                        Jan 27, 2025
                    </time>
                </div>
                <span className="text-Top3 font-medium tracking-04 block mb-2">Lorem ipsum dolor amet, consectetur adipiscing eli.</span>
                <p className="text-Grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                    enim in eros.</p>
                <Link href="#">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default BlogCard