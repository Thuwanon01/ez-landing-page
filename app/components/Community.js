export default function Community() {
    const cards = [
        { emoji: "💬", text: "ถามได้ตลอด\n24 ชั่วโมง" },
        { emoji: "📚", text: "WORKSHOP และ\nSESSION เพิ่มเติม" },
        { emoji: "🤝", text: "NETWORK กับ\nALUMNI DEV" },
        { emoji: "🚀", text: "JOB BOARD\nเฉพาะสมาชิก" },
    ]

    return (
        <section className="py-24 px-8">
            <div
                className="mx-auto rounded-3xl px-12 py-16"
                style={{ maxWidth: "900px", background: "#fdf0e8" }}
            >
                {/* Heading */}
                <h2 className="text-center text-3xl font-black uppercase tracking-wide text-ez-dark mb-14">
                    COME JOIN{" "}
                    <span className="text-ez-orange">EZ</span>FORWARD COMMUNITY
                </h2>

                {/* Cards + CTA grid */}
                <div className="relative grid grid-cols-2 gap-x-40 gap-y-6">

                    {/* Top-left card */}
                    <div className="bg-white border-2 border-[#edd8c8] rounded-2xl px-6 py-5 flex items-center gap-4">
                        <span className="text-3xl">{cards[0].emoji}</span>
                        <p className="text-ez-dark font-bold text-sm leading-snug whitespace-pre-line">{cards[0].text}</p>
                    </div>

                    {/* Top-right card — shifted down */}
                    <div className="bg-white border-2 border-[#edd8c8] rounded-2xl px-6 py-5 flex items-center gap-4 mt-8">
                        <span className="text-3xl">{cards[1].emoji}</span>
                        <p className="text-ez-dark font-bold text-sm leading-snug whitespace-pre-line">{cards[1].text}</p>
                    </div>

                    {/* Bottom-left card */}
                    <div className="bg-white border-2 border-[#edd8c8] rounded-2xl px-6 py-5 flex items-center gap-4">
                        <span className="text-3xl">{cards[2].emoji}</span>
                        <p className="text-ez-dark font-bold text-sm leading-snug whitespace-pre-line">{cards[2].text}</p>
                    </div>

                    {/* Bottom-right card — shifted up */}
                    <div className="bg-white border-2 border-[#edd8c8] rounded-2xl px-6 py-5 flex items-center gap-4 -mt-8">
                        <span className="text-3xl">{cards[3].emoji}</span>
                        <p className="text-ez-dark font-bold text-sm leading-snug whitespace-pre-line">{cards[3].text}</p>
                    </div>

                    {/* Center CTA — absolutely centered over the grid */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <a
                            href="#"
                            className="pointer-events-auto flex flex-col items-center gap-2 group"
                        >
                            {/* Discord-style circle icon */}
                            <div className="w-16 h-16 rounded-full bg-ez-blue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963a.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                                </svg>
                            </div>
                            <span className="text-ez-blue font-black text-base tracking-wider group-hover:underline">
                                &gt;&gt; CLICK TO JOIN &lt;&lt;
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
