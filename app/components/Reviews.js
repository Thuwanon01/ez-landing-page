"use client"
import { useState } from "react"

const reviews = [
    { id: 1, text: "ได้รับโอกาสทำงานจริงกับทีม Software Engineer ตัวจริง ทำให้เข้าใจ workflow การทำงานใน industry จริงๆ ไม่ใช่แค่ทฤษฎีในห้องเรียน", name: "ปาล์ม T.", career: "อดีต พนักงานบัญชี - ปัจจุบัน Frontend Dev", featured: false },
    { id: 2, text: "หลักสูตรนี้เปลี่ยนชีวิตผมเลยครับ จากที่ไม่รู้ coding เลย ภายใน 6 เดือน ได้งานเป็น Developer จริงๆ Mentor ดูแลดีมากและ support ตลอด", name: "ไบร์ท T.", career: "อดีต พนักงาน Logistics - ปัจจุบัน Backend Dev", featured: true },
    { id: 3, text: "ชอบที่เรียนแบบ Learning on the job จริงๆ ได้ลงมือทำโปรเจกต์จริง มีคนให้คำแนะนำตลอด ทำให้พัฒนาได้เร็วมาก", name: "ฝน T.", career: "อดีต Teacher - ปัจจุบัน Full Stack Dev", featured: false },
    { id: 4, text: "EZForward ให้มากกว่า coding skill ได้ professional mindset และเข้าใจการทำงานในยุค AI อย่างแท้จริง แนะนำมากครับ", name: "เจมส์ T.", career: "อดีต Graphic Designer - ปัจจุบัน Frontend Dev", featured: true },
    { id: 5, text: "Mentor เก่งและใจดีมาก ตอบคำถามทุกข้อ ไม่เคยรู้สึกว่าถามมากเกินไป โปรแกรมออกแบบมาเพื่อคนอยากเปลี่ยนสายจริงๆ", name: "มิ้นท์ T.", career: "อดีต HR - ปัจจุบัน Full Stack Dev", featured: false },
    { id: 6, text: "ไม่มีพื้นฐาน coding เลยแต่ก็เริ่มได้ หลักสูตรออกแบบมาให้เรียนได้จริง ไม่ overwhelming มี structure ชัดเจน", name: "กาย T.", career: "อดีต Sale - ปัจจุบัน Backend Dev", featured: false },
    { id: 7, text: "การได้ intern กับทีม developer จริงๆ คือสิ่งที่มีค่ามาก ทำให้ resume แข็งแกร่งขึ้น และมีผลงานโชว์ได้จริง", name: "อาร์ม T.", career: "อดีต Marketing - ปัจจุบัน Full Stack Dev", featured: false },
    { id: 8, text: "6 เดือนที่ผ่านมาเปลี่ยนชีวิตผมไปมาก ตอนนี้มีอาชีพที่มั่นคงและรายได้ดีขึ้น ขอบคุณทีม EZForward มากครับ", name: "นิก T.", career: "อดีต Freelance - ปัจจุบัน Software Engineer", featured: true },
]

const CARD_W = 260
const GAP = 20

function ReviewCard({ review }) {
    const [isWiggling, setIsWiggling] = useState(false)

    return (
        <div
            onMouseEnter={() => { if (!isWiggling) setIsWiggling(true) }}
            onAnimationEnd={() => setIsWiggling(false)}
            style={{ width: CARD_W }}
            className={[
                'bg-white rounded-2xl p-6 cursor-default',
                'transition-shadow duration-300 hover:shadow-lg',
                review.featured ? 'border-2 border-ez-orange' : 'border-2 border-[#dce6f0]',
                isWiggling ? 'wiggle' : '',
            ].join(' ')}
        >
            <p className="text-ez-dark/75 text-sm leading-relaxed mb-5">{review.text}</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ez-bg flex-shrink-0" />
                <div>
                    <p className="text-ez-dark font-bold text-sm">{review.name}</p>
                    <p className="text-ez-dark/50 text-xs">{review.career}</p>
                </div>
            </div>
        </div>
    )
}

export default function Reviews() {
    const row1 = reviews.slice(0, 3)
    const row2 = reviews.slice(3, 5)
    const row3 = reviews.slice(5, 8)

    return (
        <section className="py-24 px-8">
            <h2 className="text-center text-3xl font-black uppercase tracking-wide mb-16">
                <span className="text-ez-orange">EZ</span>FORWARD STUDENT SAYS ...
            </h2>

            <div className="flex flex-col items-center gap-5">
                <div className="flex gap-5">
                    {row1.map(r => <ReviewCard key={r.id} review={r} />)}
                </div>
                <div className="flex gap-5" style={{ marginLeft: `${CARD_W + GAP}px` }}>
                    {row2.map(r => <ReviewCard key={r.id} review={r} />)}
                </div>
                <div className="flex gap-5">
                    {row3.map(r => <ReviewCard key={r.id} review={r} />)}
                </div>
            </div>
        </section>
    )
}
