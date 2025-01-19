import Link from "next/link";

export default function Navbar() {
    return (
       <div>
        <nav className ="fixed top-0 left-0 right-0 text-creamy bg-iterationOfPurple p-6">
            <ul className = "flex space-x-32">
                <li className ="mr-20"> 
                    Carlos E. Lopez
                </li>
                <li className = "hover:underline">
                    <Link href="/">Home</Link>
                </li>
                <li className ="hover:underline">
                    <Link href="/experience">Experience</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/skills">Skills</Link> 
                </li>
                <li className="hover:underline">
                    <Link href="/CS_Resume.pdf">Resume</Link>
                    {/* text image instead of spelling out resume */}
                </li>
            </ul>
        </nav>
       </div> 
    );
}