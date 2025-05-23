import Link from "next/link";

type LinkArrowProps = {
    title: string,
    url: string
}

const LinkArrow = (props:LinkArrowProps) => {
    return (
        <Link className="w-fit text-blue100 text-body font-medium inline-flex items-center relative pr-6 hover:font-semibold transition-all group" href={props.url}>
            {props.title}
            <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"
                 fill="none">
                <path
                    d="M16.4174 0.993456C16.099 0.663478 15.5719 0.658758 15.2477 0.982982C14.9347 1.296 14.9267 1.80098 15.2296 2.12375L17.1649 4.18562L1.18373 4.18565C0.733922 4.18565 0.369279 4.5503 0.369279 5.00011C0.369279 5.44992 0.733925 5.81457 1.18374 5.81457L17.1649 5.81453L15.2296 7.87639C14.9267 8.19916 14.9347 8.70415 15.2477 9.01716C15.5719 9.34139 16.099 9.33667 16.4174 9.00669L19.6131 5.69441C19.9869 5.30698 19.9869 4.69317 19.6131 4.30574L16.4174 0.993456Z"
                    fill="#004ED5"/>
            </svg>
        </Link>
    )
}

export default LinkArrow