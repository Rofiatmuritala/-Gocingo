const TeamSection = () => {
  const team = [
    { name: "Courtney Henry", role: "Founder", image: "team-member-1.jpg" },
    {
      name: "Brooklyn Simmons",
      role: "Product Manager",
      image: "team-member-1.jpg",
    },
    { name: "Jerome Bell", role: "Lead Manager", image: "team-member-1.jpg" },
    {
      name: "Cameron Williamson",
      role: "Marketing Coordinator",
      image: "team-member-1.jpg",
    },
    // Add more as needed
  ];

  return (
    <section className="p-2 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Meet our team</h2>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-4 lg:gap-6">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-50 md:h-56 object-cover"
            />
            <h3 className="mt-4 text-xs lg:text-xl font-bold">{member.name}</h3>
            <p className="text-xs lg:text-xl">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TeamSection;
