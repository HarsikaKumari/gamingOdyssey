import {FaDiscord, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const links = [
    {href: 'https://discord.com', icon: <FaDiscord />},
    {href: 'https://twitter.com', icon: <FaTwitter />},
    {href: 'https://github.com', icon: <FaGithub />},
    {href: 'https://linkedIn.com', icon: <FaLinkedinIn />},
]

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-center text-sm md:text-left">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a key={link} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer
