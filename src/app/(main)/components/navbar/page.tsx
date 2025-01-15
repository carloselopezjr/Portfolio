import Link from "next/link";

export default function Navbar() {
    return (
       <div>
        <nav className ="mb-10 bg-red-800 p-4 border-b-8 border-red-400">
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
                {/* Add resume + linkedin later */}
            </ul>
        </nav>
       </div> 
    );
}