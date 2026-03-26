"use client"
import { useState, useEffect, useRef } from "react"

export default function Program() {
    const [phase, setPhase] = useState(0)
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current
            if (!section) return
            const rect = section.getBoundingClientRect()
            const scrolled = -rect.top
            const sectionHeight = section.offsetHeight - window.innerHeight
            const progress = scrolled / sectionHeight

            if (progress < 0.33) setPhase(0)
            else if (progress < 0.66) setPhase(1)
            else setPhase(2)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section ref={sectionRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Heading */}
                <h2 className="relative z-20 text-2xl font-bold uppercase tracking-wide mb-8">
                    <span className="text-ez-orange">EZ</span>FORWARD PROGRAM
                </h2>

                {/* Venn diagram — fixed-size container so circles stay whole */}
                <div className="relative mx-auto" style={{ width: '820px', height: '500px' }}>

                    {/* Left circle — peach */}
                    <div
                        className="absolute rounded-full bg-[#f8d5b5]/70"
                        style={{ width: '470px', height: '470px', left: '0', top: '15px' }}
                    />

                    {/* Right circle — blue */}
                    <div
                        className="absolute rounded-full bg-[#c8d9ea]/70"
                        style={{ width: '470px', height: '470px', right: '0', top: '15px' }}
                    />

                    {/* Front End content */}
                    <div
                        className={`absolute z-10 text-center transition-all duration-700 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                        style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', width: '270px' }}
                    >
                        <p className="text-ez-orange font-bold text-lg mb-4 leading-snug">
                            Front End Developer Program
                        </p>
                        <p className="text-sm text-ez-dark leading-relaxed mb-6">
                            พัฒนาความคิดแบบ Developer<br />
                            ในยุค AI พร้อมฝึกทักษะ Front-End<br />
                            (JavaScript / TypeScript / React / HTML<br />
                            / CSS) ผ่านการเรียนที่สนุก<br />
                            ใช้งานได้จริงและประยุกต์ต่อยอดได้เอง
                        </p>
                        <button className="bg-ez-orange text-white font-bold px-8 py-2.5 rounded-full text-sm cursor-pointer">
                            course outline
                        </button>
                    </div>

                    {/* Back End content */}
                    <div
                        className={`absolute z-10 text-center transition-all duration-700 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                        style={{ right: '20px', top: '50%', transform: 'translateY(-50%)', width: '270px' }}
                    >
                        <p className="text-ez-blue font-bold text-lg mb-4 leading-snug">
                            Back End Developer Program
                        </p>
                        <p className="text-sm text-ez-dark leading-relaxed mb-6">
                            พัฒนาความคิดแบบ Back-End Developer<br />
                            พร้อมฝึกทักษะ (Python / SQL)<br />
                            ผ่านการลงมือทำจริง<br />
                            เรียนรู้เป็นระบบและสามารถต่อยอด<br />
                            เรียนรู้ด้วยตัวเองในยุค AI ได้อย่างยั่งยืน
                        </p>
                        <button className="border-2 border-ez-blue text-ez-blue font-bold px-8 py-2.5 rounded-full text-sm cursor-pointer">
                            course outline
                        </button>
                    </div>

                    {/* FULL STACK DEVELOPER — center overlap */}
                    <div
                        className="absolute z-10 text-center"
                        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        <p className="text-2xl font-black uppercase text-ez-dark leading-tight">
                            FULL STACK<br />DEVELOPER
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
