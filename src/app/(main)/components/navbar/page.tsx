import Link from "next/link";

export default function Navbar() {
    return (
       <div>
        <nav className ="fixed top-0 left-0 right-0 text-creamy bg-iterationOfPurple p-6">
            <ul className = "flex space-x-56">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/experience">Experience</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/skills">Skills</Link> 
                </li>
                <li>
                    <Link href="/CS_Resume.pdf">Resume</Link>
                </li>
                {/* Add resume + linkedin later */}
            </ul>
        </nav>
       </div> 
    );
}