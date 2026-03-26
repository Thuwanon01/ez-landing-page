export default function Footer() {
    const links = [
        { label: "เกี่ยวกับเรา", href: "#" },
        { label: "FRONTEND PROGRAM", href: "#" },
        { label: "BACKEND PROGRAM", href: "#" },
        { label: "ติดต่อเรา", href: "#" },
    ]

    return (
        <footer className="bg-white border-t border-gray-100 px-12 py-8">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <img src="/ez-landing-page/logo.png" alt="EZForward" className="h-10" />

                {/* Right: Nav links */}
                <nav className="flex flex-col items-end gap-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-ez-dark transition-colors duration-150 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Bottom line */}
            <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-300">© 2025 EZForward. All rights reserved.</p>
            </div>
        </footer>
    )
}
