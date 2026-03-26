export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            {/* หัวข้อหลัก */}
            <h1 className="text-8xl font-bold uppercase tracking-widest">
                <span className="text-ez-orange">LEARN</span>
                <span>ing</span>
            </h1>

            {/* Sub heading */}
            <p className="text-6xl">on the job</p>

            {/* Subtitle */}
            <div className="mt-6 text-2xl uppercase tracking-wide">
                <p><span className="text-ez-orange">เรียนรู้</span>สู่เส้นทาง<span className="text-ez-orange">อาชีพ</span>ในสาย Tech และ AI</p>
                <p>ผ่านการทำงานจริง ไม่มีพื้นฐานก็เริ่มได้</p>
                <p>ฝึกทำงานกับคนในวงการตัวจริง</p>
            </div>

            {/* Bullet points */}
            <div className="mt-10 flex gap-12 text-left">
                {[
                    "เหมาะกับคนที่อยากสร้างเส้นทางอาชีพใหม่ในสาย Tech และ AI",
                    "คนอยากย้ายสายงานไปสาย Tech",
                    "คนอยากมีอาชีพที่ 2",
                ].map((text) => (
                    <div key={text} className="flex items-start gap-2 max-w-s">
                        <span className="text-ez-orange text-xl">✓</span>
                        <p className="uppercase text-sm">{text}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}