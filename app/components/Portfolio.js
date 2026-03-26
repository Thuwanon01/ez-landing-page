"use client"
import { useState } from "react"

const GAME_URL = "https://thuwanon01.github.io/ezforward-game-rn/login"
const BASE = "/ez-landing-page" // must match basePath in next.config.mjs

// Gameplay screenshots — files are in public/portfolio/
const SCREENSHOTS = [
    { src: `${BASE}/portfolio/screenshot-1.png`, alt: "หน้า Login EzRam" },
    { src: `${BASE}/portfolio/screenshot-2.png`, alt: "วิธีเล่น EzRam" },
    { src: `${BASE}/portfolio/screenshot-3.png`, alt: "เลือก Topic & Level" },
    { src: `${BASE}/portfolio/screenshot-4.png`, alt: "หน้าหลักเกม" },
    { src: `${BASE}/portfolio/screenshot-5.png`, alt: "ตอบถูก!" },
    { src: `${BASE}/portfolio/screenshot-6.png`, alt: "ตอบผิด" },
]

function GameModal({ onClose }) {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((c) => (c - 1 + SCREENSHOTS.length) % SCREENSHOTS.length)
    const next = () => setCurrent((c) => (c + 1) % SCREENSHOTS.length)

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Modal box */}
            <div
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
                style={{ width: '860px', maxWidth: '95vw' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition text-ez-dark font-bold text-lg"
                >
                    ✕
                </button>

                {/* Top: header */}
                <div className="px-10 pt-8 pb-4">
                    <p className="text-sm text-ez-dark/50 font-bold uppercase tracking-widest mb-1">EZFORWARD Portfolio</p>
                    <h3 className="text-3xl font-black uppercase text-ez-dark">
                        <span className="text-ez-orange">EZ</span>RAM
                    </h3>
                    <p className="text-ez-dark/60 text-sm mt-1">English Practice Game — โดย EZFORWARD Student รุ่น 1</p>
                </div>

                {/* Screenshot carousel */}
                <div className="relative mx-10 mb-6 rounded-2xl overflow-hidden bg-[#1a2f4a]" style={{ height: '420px' }}>
                    {/* Image */}
                    <div className="w-full h-full flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={SCREENSHOTS[current].src}
                            alt={SCREENSHOTS[current].alt}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Prev / Next */}
                    {SCREENSHOTS.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center text-white text-xl"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center text-white text-xl"
                            >
                                ›
                            </button>
                        </>
                    )}

                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                        {SCREENSHOTS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="px-10 mb-6">
                    <p className="text-ez-dark/70 text-sm leading-relaxed">
                        เราต้องการพัฒนาศักยภาพนักศึกษา โดยสร้างเกมการเรียนรู้ที่มี AI วิเคราะห์จุดอ่อนของคุณแบบเฉพาะบุคคล
                        เปลี่ยนการเรียนรู้ให้สนุกและตรงจุดมากขึ้น ยิ่งเล่น ระบบยิ่งรู้ว่าคุณควรโฟกัสอะไร
                        เพื่อพาไปสู่การเรียนที่เก่งขึ้นอย่างมีประสิทธิภาพ
                    </p>
                </div>

                {/* CTA */}
                <div className="px-10 pb-8">
                    <a
                        href={GAME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-ez-orange text-white font-bold px-10 py-3 rounded-full hover:bg-orange-600 transition"
                    >
                        เข้าไปเล่นเกม →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <section className="py-24 px-8">
            {/* Heading */}
            <h2 className="text-center text-3xl font-black uppercase tracking-wide mb-12">
                <span className="text-ez-orange">EZ</span>FORWARD PORTFOLIO
            </h2>

            {/* Card */}
            <div
                className="mx-auto rounded-3xl overflow-hidden"
                style={{ maxWidth: '1200px', background: '#fdf2ec' }}
            >
                <div className="flex min-h-[420px]">
                    {/* Left — game preview */}
                    <div
                        className="relative flex-1 flex items-center justify-center"
                        style={{ background: '#1a2f4a', minHeight: '420px' }}
                    >
                        {/* EzRam character as placeholder */}
                        <div className="text-center text-white/60 px-8">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://raw.githubusercontent.com/Thuwanon01/ezforward-game-rn/main/assets/images/PixVerse-V5-ram-happy.gif"
                                alt="EzRam character"
                                className="w-40 h-40 object-contain mx-auto mb-4"
                            />
                            <p className="text-2xl font-black text-white">EzRam</p>
                            <p className="text-white/60 text-sm mt-1">English Practice Game</p>
                        </div>
                    </div>

                    {/* Right — info */}
                    <div className="flex flex-col justify-center px-14 py-12" style={{ width: '460px' }}>
                        <h3 className="text-3xl font-black uppercase text-ez-dark mb-2">
                            <span className="text-ez-orange">EZ</span>RAM
                        </h3>
                        <p className="text-ez-dark/60 font-semibold mb-5">โดย EZFORWARD Student รุ่น 1</p>
                        <p className="text-ez-dark/70 text-sm leading-relaxed mb-8">
                            เราต้องการพัฒนาศักยภาพนักศึกษา โดยสร้างเกมการเรียนรู้ที่มี AI
                            วิเคราะห์จุดอ่อนของคุณแบบเฉพาะบุคคล เปลี่ยนการเรียนรู้ให้สนุกและตรงจุดมากขึ้น
                            ยิ่งเล่น ระบบยิ่งรู้ว่าคุณควรโฟกัสอะไร
                            เพื่อพาไปสู่การเรียนที่เก่งขึ้นอย่างมีประสิทธิภาพ
                        </p>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="text-ez-orange font-bold text-left hover:underline w-fit"
                        >
                            Preview &gt;
                        </button>
                    </div>
                </div>

                {/* Dot pagination */}
                <div className="flex justify-center gap-2 py-5">
                    <div className="w-2 h-2 rounded-full bg-ez-dark/20" />
                    <div className="w-4 h-2 rounded-full bg-ez-dark/60" />
                </div>
            </div>

            {/* Modal */}
            {modalOpen && <GameModal onClose={() => setModalOpen(false)} />}
        </section>
    )
}
