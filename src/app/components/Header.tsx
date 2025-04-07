import Link from "next/link";
import Image from 'next/image'

const Header = () => {
    return(
        <header className="py-4">
            <div className="container mx-auto">
                <div className="row">
                    <Link href="/">
                        <Image src="/next.svg" alt="Logo" width="100" height="100"/>
                    </Link>
                    <p className="text-green600 text-2xl font-bold">Tailwind</p>
                </div>
            </div>
        </header>
    )
}

export default Header