"use client";
import CountUp from "react-countup";

const monthsSince = (startDate) => {
  const now = new Date();
  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  months += (now.getDate() - 1) / daysInMonth;
  return Number(Math.max(0, months).toFixed(0));
};

const stats = [
  {
    num: 2,
    text: "Months Internship at Samsung Research Delhi (Summer 2024)",
  },
  {
    num: monthsSince(new Date(2025, 6, 1)),
    text: "Months Full-time at Samsung Research Delhi (Since July 2025)",
  },
  {
    num: 1641,
    text: "CodeForces Expert, 800+ Problems Solved",
  },
  {
    num: 1.5,
    text: "Years of Experience through Internships, Full-time, and Freelancing",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl-max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={3}
                  delay={2}
                  decimal="."
                  decimals={item.num % 1 === 0 ? 0 : 1}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`leading-snug text-white/80 text-sm max-w-[180px]`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
