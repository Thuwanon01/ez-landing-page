export default function Journey() {

    const steps = [
        {
            number: "1",
            title: "BOOTCAMP",
            subtitle: "(ONSITE 2 DAYS)",
            desc: "ปูพื้นฐานความรู้ Developer และแนวคิดการเรียนรู้ในยุค AI อย่างยั่งยืน",
            special: null,
        },
        {
            number: "2",
            title: "FOLLOW UP & ASSIGNMENTS",
            subtitle: "(ONLINE 14 DAYS)",
            desc: "เรียนรู้สิ่งที่งานต้องใช้ วันละ 1 ชม. พร้อมโจทย์ Assignment หลังเรียน",
            special: null,
        },
        {
            number: "3",
            title: "INTERN",
            subtitle: null,
            desc: "เรียนรู้ผ่านการทำงาน Part Time ร่วมกับทีม Software Engineer 4-6 เดือน",
            special: "learn",
        },
        {
            number: "4",
            title: "BUILD SOMETHING",
            subtitle: null,
            desc: null,
            special: "proud",
        },
    ];

    return (
        <section className="relative py-40 overflow-hidden">

            {/* Blob */}
            <div className="absolute inset-y-0 -left-15 -right-15 flex items-center">
                <svg viewBox="0 0 1529 491" className="w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1528.13 203.665C1528.13 571.499 1074.11 460.09 525.957 466.999C-22.199 473.908 0.126661 571.726 0.126661 313.499C0.126661 55.2725 341.547 114.805 769.078 94.6706C1196.61 74.5362 1528.13 -164.169 1528.13 203.665Z" fill="#FFDCB9" fillOpacity="0.5" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-8">

                {/* Heading */}
                <h2 className="text-4xl font-bold uppercase">
                    Code to Developer <span className="text-ez-orange">Journey</span>
                </h2>
                <p className="mt-2 text-2xl">
                    <span className="text-ez-orange">เส้นทาง</span>เข้าสู่อาชีพ Developer
                </p>

                {/* Steps */}
                <div className="mt-16 grid grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className={`flex flex-col gap-3 items-center text-center`}
                        >
                            {/* STEP label */}
                            <span className="text-xs uppercase tracking-widest text-ez-dark self-center">STEP</span>

                            {/* Circle */}
                            <div className="relative w-12 h-12 flex items-center justify-center self-center">
                                <img src="/step-circle.svg" className="absolute inset-0 w-full h-full" alt="" />
                                <span className="relative z-10 text-lg font-bold text-ez-dark">{step.number}</span>
                            </div>

                            {/* Title */}
                            <p className="font-bold uppercase text-sm">{step.title}</p>

                            {/* Subtitle */}
                            {step.subtitle && (
                                <p className="font-bold uppercase text-sm">{step.subtitle}</p>
                            )}

                            {/* Desc */}
                            {step.desc && (
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            )}

                            {/* Special: learn */}
                            {step.special === "learn" && (
                                <div>
                                    <p className="text-ez-orange text-2xl font-bold italic leading-none">
                                        LEARN{" "}
                                        <span className="text-ez-dark text-xs font-bold not-italic">
                                            on the job<br />from real experience
                                        </span>
                                    </p>
                                    <ul className="mt-3 space-y-2 tems-start text-left">
                                        <li className="text-sm flex gap-2">
                                            <span className="text-ez-orange mt-0.5">●</span>
                                            <span><strong>Short Course Training</strong><br />เสริมความรู้ทักษะเฉพาะทาง 1-2 วัน</span>
                                        </li>
                                        <li className="text-sm flex gap-2">
                                            <span className="text-ez-orange mt-0.5">●</span>
                                            <span><strong>Learn from the Internet</strong><br />เรียนรู้จาก online ตามช่องทางที่แนะนำ</span>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {/* Special: proud */}
                            {step.special === "proud" && (
                                <p className="text-ez-orange text-3xl font-black uppercase italic leading-tight">
                                    YOU PROUD OF
                                </p>
                            )}

                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}