import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

export default function Navbar() {
    return (
       <div>
        <nav className ="text-lg font-semibold fixed top-0 left-0 right-0 z-50 text-creamy bg-purp p-6">
            <ul className = "flex space-x-8"> {/* Make it so that when someone clicks on a different page, it remains underlined */}
                <li className ="mr-auto hover:animate-pulse duration-300"> 
                    <Link href="/">Carlos E. Lopez</Link>
                </li>
                
                <li className = "hover:opacity-70  transition-all duration-300">
                    <Link href="/">Home</Link>
                </li>
                <li className ="hover:animate-pulse duration-300">
                    <Link href="/assignments">Resume, Cover Letter, Mini-Interview </Link>
                </li>
                <li className="hover:opacity-70  transition-all duration-300">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className ="hover:opacity-70  transition-all duration-300">
                    <Link href="/experience">Experience</Link>
                </li>
                <li className="hover:opacity-70  transition-all duration-300">
                    <Link href="/skills">Skills</Link> 
                </li>
                <li className="hover:opacity-60 transition-all duration-300">
                    <Link href="/CS_Resume.pdf"><DynamicIcon name="file-text"/></Link>
                </li>
                <li className="hover:opacity-70  transition-all duration-300">
                    <Link href="https://github.com/carloselopezjr"><DynamicIcon name="github" /></Link>
                </li>
                <li className="hover:opacity-70 transition-all duration-300">
                    <Link href="https://www.linkedin.com/in/carloselopezjr/"><DynamicIcon name="linkedin" /></Link>
                </li>
            </ul>
        </nav>
       </div> 
    );
}