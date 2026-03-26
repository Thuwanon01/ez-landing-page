

export default function Navbar() {
    return (
        <nav className="px-6 pt-4">
            <div className="flex items-center justify-between bg-[#c3def9]/50 rounded-full px-6 py-3">

                {/* ซ้าย: Logo */}
                <div className="flex items-center gap-4">
                    <img src="/ez-landing-page/logo.png" alt="EZForward" className="h-10" />

                    {/* Nav link */}
                    <a href="#" className="font-bold uppercase text-sm tracking-wide">
                        Course Outline
                    </a>
                </div>

                {/* ขวา: CTA */}
                <a href="#" className="font-bold uppercase text-sm">
                    ลงทะเบียน
                </a>

            </div>
        </nav>
    );
}