import { LogoFacebook, LogoX } from "../Icons";

export default function Footer() {
    return (
        <footer className="pb-[4rem] text-forground relative end-0">
            <ul className="flex items-center justify-center">
                <li className="flex flex-col items-center">
                    <LogoX className="w-4 h-4"/>
                    <p className="">Twitter</p>
                </li>
                <li className="flex flex-col items-center">
                    <LogoFacebook className="w-4 h-4"/>
                    <p className="">Facebook</p>
                </li>
            </ul>
        </footer>
    )
}