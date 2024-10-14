import React from "react";
import Image from "next/image";

const EducationData = [
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cb/fa/a4/cbfaa483-c9e2-3c93-d39c-a708c03ab83a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
    title: "多鄰國",
    part: "極速學外語",
    link: "https://www.duolingo.com/"
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/99/fa/b6/99fab6a3-86a3-6129-ac07-4eb69fabaeac/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
    title: "Todaii Easy Japanese: ",
    part: "日文學習",
    link: "https://apps.apple.com/hk/developer/ghi-nguyen/id933081416?see-all=i-phonei-pad-apps"
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/b5/c5/88b5c5f9-083c-a57f-8012-5b8d3b4b9706/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/246x0w.webp",
    title: "Todaii: English",
    part: "學英文，更快、更好",
    link: "https://apps.apple.com/hk/developer/ghi-nguyen/id933081416?see-all=i-phonei-pad-apps"
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b1/83/51/b1835142-cd27-c996-2c5e-d1ca313b1e65/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
    title: "HeyJapan",
    part: "從零開始學習日語以實現交流",
    link: "https://heyjapan.net/"
  },
];

const EDUCard = ({ image, title, part, link }) => {
  return (
    <div className="flex items-center gap-5 cursor-pointer">
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

export default function CSS() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 p-8">
      {EducationData.map((item) => (
        <EDUCard key={item.title} {...item} />
      ))}
    </div>
  );
}
