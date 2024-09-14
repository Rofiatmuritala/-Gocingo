import React from "react";

const FundraisingCards = () => {
  const cards = [
    {
      title: "Turkey-Syria Relief",
      description: "65% of donations go here",
      bgColor: "bg-green-500",
    },
    {
      title: "Health",
      description: "Life skills for 2,587 children in South Africa",
      bgColor: "bg-black",
    },
    {
      title: "Education",
      description: "Sponsor food, to orphans in India",
      bgColor: "bg-yellow-400",
    },
    // Add more cards as needed
  ];

  return (
    <section className="grid grid-cols-3 gap-2  md:grid-cols-3 lg:gap-6 p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={` p-2 md:p-5 text-white ${card.bgColor} rounded-lg shadow-md`}
        >
          <h3 className=" text-xs md:text-lg lg:text-xl font-bold">
            {card.title}
          </h3>
          <p className="mt-2 text-xs md:text-md lg:text-xl">
            {card.description}
          </p>
          <button className="mt-4 bg-white text-xs  lg:text-xl text-black px-2 lg:px-4 py-2 rounded-full lg:rounded-full">
            Donate now
          </button>
        </div>
      ))}
    </section>
  );
};

export default FundraisingCards;
