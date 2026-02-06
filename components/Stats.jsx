"use client";
import { useEffect, useState } from "react";
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

const Stats = () => {
  const [cfRating, setCfRating] = useState(1641);
  const [cfMaxRating, setCfMaxRating] = useState(1641);
  const [cfSolved, setCfSolved] = useState(800);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const [infoResponse, statusResponse] = await Promise.all([
          fetch(
            "https://codeforces.com/api/user.info?handles=__Shubham__Jaiswal__",
          ),
          fetch(
            "https://codeforces.com/api/user.status?handle=__Shubham__Jaiswal__",
          ),
        ]);

        const infoData = await infoResponse.json();
        const statusData = await statusResponse.json();

        const user = infoData?.result?.[0];
        if (infoData?.status === "OK" && user?.rating) {
          setCfRating(user.rating);
          setCfMaxRating(user.maxRating ?? user.rating);
        }

        if (statusData?.status === "OK" && Array.isArray(statusData.result)) {
          const solved = new Set();
          statusData.result.forEach((submission) => {
            if (submission?.verdict === "OK" && submission?.problem) {
              const key = `${submission.problem.contestId}-${submission.problem.index}`;
              solved.add(key);
            }
          });
          setCfSolved(solved.size);
        }
      } catch (error) {
        console.error("Failed to fetch Codeforces rating", error);
      }
    };

    fetchRating();
  }, []);

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
      num: cfMaxRating,
      text: (
        <>
          CodeForces Max Rating
          <span className="block text-md text-white/60">
            Current Rating {cfRating}
            <br />
            Solved {cfSolved} Problems
          </span>
        </>
      ),
    },
    {
      num: 1.5,
      text: "Years of Experience through Internships, Full-time, and Freelancing",
    },
  ];

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
