import React from "react";
import Image from "next/image";

const courseItemCardData = [
  {
    image: "/apps/app_store.jpg",
    title: "iOS Productivity Apps",
    author: "Jacob Hsu",
    link: "./productivity"
  },
  {
    image: "/apps/education-apps.png",
    title: "iOS Education Apps",
    author: "Jacob Hsu",
    link: "./education"
  },
];

const CourseItemCard = ({ image, title, author, link }) => {
  return (
    <div className="course-item-card flex flex-col gap-5 cursor-pointer">
      <a href={link} className="block border border-primary rounded-md hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
        />
        <div className="course-item-details flex flex-col gap-2 p-3">
          <h2 className="text-[20px] font-bold text-primary">{title}</h2>
          <p className="text-gray-500 dark:text-white">{author}</p>
        </div>
      </a>
    </div>
  );
};

export default function CourseItemCards() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5">
      {courseItemCardData.map((item) => (
        <CourseItemCard key={item.title} {...item} />
      ))}
    </div>
  );
}
