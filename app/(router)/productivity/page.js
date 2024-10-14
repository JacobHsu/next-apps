import React from "react";
import Image from "next/image";

const AppsData = [
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d3/c0/11/d3c01150-1879-c062-e6a7-dd6d721c485a/AppIcon_iOS-0-0-1x_U007emarketing-0-7-0-85-220.png/217x0w.webp",
    title: "Productive",
    part: "待辦事項清單 & 習慣養成",
    link: "/productivity/1"
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/30/1f/d9/301fd932-3a87-b305-d568-a00a4e570249/AppIcon-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
    title: "fews ",
    part: "Habit Starter",
    link: "https://apps.apple.com/tw/app/fews-habit-starter/id1480926210"
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d3/03/b5/d303b519-66fc-fc4e-24e1-079cb38b5d67/AppIcon_Checkmark_Rainbow_OnDarkblue_WithGradientAndGlow-0-0-1x_U007ephone-0-1-0-85-220.png/246x0w.webp",
    title: "Daily Habits",
    part: "Daily habits progress calendar",
    link: "https://apps.apple.com/us/app/habit-tracker-goal-planner-sh/id1403517519"
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/25/8c/d3/258cd387-be7c-406d-40f8-7fc759a748bf/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
    title: "Motivated",
    part: "Habit Tracker",
    link: "https://apps.apple.com/tw/app/habit-tracker-motivated/id6472646551"
  }
];

const HTMLCard = ({ image, title, part, link }) => {
  return (
    <div className="flex items-center gap-5 cursor-pointer ">
      <a href={link} className="flex border border-primary rounded-md hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out">
        <Image
          src={image}
          alt={title}
          width={130}
          height={130}
        />
        <div className="course-item-details flex flex-col gap-2 p-3 w-[220px]">
          <h2 className="text-[20px] font-bold text-primary">{title}</h2>
          <p className="text-gray-500 dark:text-white">{part}</p>
        </div>
      </a>
    </div>
  );
};

export default function HTML() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 p-8">
      {AppsData.map((item) => (
        <HTMLCard key={item.title} {...item} />
      ))}
    </div>
  );
}
