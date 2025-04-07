import Link from "next/link";

const MiniBlogCard = () => {
    return (
        <div
            className="p-5 flex gap-x-5 rounded-xl border border-LightGrey shadow-v1 transition-all hover:border-blue100 @@Style">
            <div
                className="rounded-lg overflow-hidden flex items-center justify-center min-h-full min-w-[121px] w-[121px]">
                {/*<img className="w-full h-full object-cover object-center" src="img/Img-component-1.png"*/}
                {/*     alt="What is Bankruptcy?"/>*/}

            </div>
            <div className="flex flex-col">
                <span>Category</span>
                <span
                    className="text-body font-medium tracking-04 block mb-2">Lorem ipsum dolor amet, consect eli.</span>
                <p className="text-Grey text-body2">Lorem ipsum dolor sit amet, consectetur.</p>
                <Link href="#">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default MiniBlogCard