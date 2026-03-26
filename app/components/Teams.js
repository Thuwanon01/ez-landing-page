"use client"
import { useRef, useState, useEffect } from "react"

const TEAM = [
    { id: 1, role: "MAIN INSTRUCTOR", roleColor: "bg-[#3b3fd8]", name: "TANIN T.", title: "Software Engineer & Co-founder", image: null },
    { id: 2, role: "MENTOR TEAM", roleColor: "bg-[#4caf72]", name: "JAMES T.", title: "Full Stack Developer", image: null },
    { id: 3, role: "MENTOR TEAM", roleColor: "bg-[#4caf72]", name: "PALM T.", title: "Frontend Engineer", image: null },
    { id: 4, role: "MENTOR TEAM", roleColor: "bg-[#4caf72]", name: "BRIGHT T.", title: "Backend Developer", image: null },
    { id: 5, role: "MENTOR TEAM", roleColor: "bg-[#4caf72]", name: "MINT T.", title: "AI & Data Engineer", image: null },
]

const CARD_W = 340
const GAP = 24
const VISIBLE = 3

export default function Teams() {
    const trackRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const maxIndex = TEAM.length - VISIBLE

    // Track scroll position → update active dot & button state
    useEffect(() => {
        const el = trackRef.current
        if (!el) return
        const onScroll = () => {
            const i = Math.round(el.scrollLeft / (CARD_W + GAP))
            setActiveIndex(Math.min(i, maxIndex))
        }
        el.addEventListener("scroll", onScroll, { passive: true })
        return () => el.removeEventListener("scroll", onScroll)
    }, [maxIndex])

    const scrollTo = (i) => {
        trackRef.current?.scrollTo({
            left: i * (CARD_W + GAP),
            behavior: "smooth",
        })
    }

    const prev = () => scrollTo(Math.max(0, activeIndex - 1))
    const next = () => scrollTo(Math.min(maxIndex, activeIndex + 1))

    return (
        <section className="py-24">
            {/* Heading */}
            <h2 className="text-center text-3xl font-black uppercase tracking-wide mb-14 px-8">
                MEET <span className="text-ez-orange">EZ</span>FORWARD TEAM
            </h2>

            {/* Carousel */}
            <div className="relative">

                {/* Left button */}
                <button
                    onClick={prev}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-ez-dark text-xl font-bold transition-opacity duration-200 cursor-pointer hover:bg-ez-bg ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >‹</button>

                {/* Scrollable track — browser handles all scroll natively */}
                <div
                    ref={trackRef}
                    className="flex overflow-x-auto pb-2"
                    style={{
                        gap: GAP,
                        paddingLeft: '3%',
                        paddingRight: '5%',
                        scrollPaddingLeft: '5%',
                        scrollSnapType: "x mandatory",
                        scrollBehavior: "smooth",
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {/* Hide scrollbar in Chrome/Safari */}
                    <style>{`.teams-track::-webkit-scrollbar { display: none; }`}</style>

                    {TEAM.map((member) => (
                        <div
                            key={member.id}
                            className="flex-shrink-0 rounded-3xl overflow-hidden relative "
                            style={{
                                width: CARD_W,
                                height: 520,
                                background: "#e8eef8",
                                scrollSnapAlign: "start",
                            }}
                        >
                            {/* Badge */}
                            <div className="absolute top-5 left-5 z-10">
                                <span className={`${member.roleColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide`}>
                                    {member.role}
                                </span>
                            </div>

                            {/* Photo / gradient placeholder */}
                            {member.image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-b from-[#e8eef8] to-[#d0daf0]" />
                            )}

                            {/* Name */}
                            <div className="absolute bottom-7 left-6 z-10">
                                <p className="text-ez-dark font-black text-lg uppercase tracking-wide">{member.name}</p>
                                <p className="text-ez-dark/50 text-sm">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right button */}
                <button
                    onClick={next}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-ez-dark text-xl font-bold transition-opacity duration-200 cursor-pointer hover:bg-ez-bg ${activeIndex >= maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >›</button>

            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {TEAM.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(Math.min(i, maxIndex))}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i >= activeIndex && i < activeIndex + VISIBLE ? 'w-5 bg-ez-dark' : 'w-2 bg-ez-dark/20'}`}
                    />
                ))}
            </div>
        </section>
    )
}
