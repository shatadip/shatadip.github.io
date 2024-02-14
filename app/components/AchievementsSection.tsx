"use client";

import React, { useEffect, useState } from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "250",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Students",
    value: "14000",
  },
  {
    metric: "Courses",
    value: "4",
  },
  {
    metric: "Years",
    value: "13",
  },
];

const AchievementsSection = () => {
  const [AnimatedNumbers, setAnimatedNumbers] = useState<any>(null); // Specify any for initial state

  useEffect(() => {
    const loadAnimatedNumbers = async () => {
      const { default: AnimatedNumbers } = await import("react-animated-numbers");
      setAnimatedNumbers(() => AnimatedNumbers);
    };

    loadAnimatedNumbers();
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {AnimatedNumbers &&
          achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma={true}
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    transitions={(index: any) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AchievementsSection;
