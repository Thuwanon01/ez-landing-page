"use client"
import { useState, useEffect, useRef } from "react"

export default function WhyEZFWD() {

    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current
            if (!section) return

            // 1. section อยู่ที่ไหนบนหน้าจอ?
            const rect = section.getBoundingClientRect()

            // 2. scroll ลงมาแล้วเท่าไหร่ใน section นี้?
            const scrolled = -rect.top

            // 3. section สูงทั้งหมดเท่าไหร่?
            const sectionHeight = section.offsetHeight - window.innerHeight

            // 4. คำนวณว่าอยู่ slide ที่เท่าไหร่
            const progress = scrolled / sectionHeight  // 0.0 → 1.0
            const index = Math.floor(progress * slides.length)
            const clamped = Math.min(Math.max(index, 0), slides.length - 1)

            setActiveIndex(clamped)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const slides = [
        { text: "เรียนเป็นขั้นตอนจากพื้นฐาน", bg: "/why-bg-1.png" },
        { text: "มี MENTOR ดูแลตลอดเส้นทาง", bg: "/why-bg-2.png" },
        { text: "สร้างผลงานเองได้จริง", bg: "/why-bg-3.png" },
        { text: "ฝึกทำงานกับคนทำงานจริง", bg: "/why-bg-4.png" },
    ]

    return (
        <section ref={sectionRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Background images — ซ้อนกันทุกรูป แต่แสดงแค่ active */}
                {slides.map((slide, i) => (
                    <img
                        key={i}
                        src={slide.bg}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === activeIndex ? "opacity-100" : "opacity-0"
                            }`}
                        alt=""
                    />
                ))}

                {/* Text overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">

                    {/* หัวข้อเล็กด้านบน */}
                    <p className="text-ez-dark font-bold mb-8">
                        ทำไมต้อง <span className="text-ez-orange">EZFORWARD</span>
                    </p>

                    {/* ข้อความสะสม — แสดงทุก slide ที่ผ่านมาแล้ว */}
                    <div className="flex flex-col gap-4">
                        {slides.map((slide, i) => (
                            <p
                                key={i}
                                className={`text-ez-orange text-3xl font-bold transition-all duration-500 ${i <= activeIndex
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                    }`}
                            >
                                {slide.text}
                            </p>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}