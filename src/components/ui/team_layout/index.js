"use client";

const teamMembers = [
  {
    name: "Mr.Kiran Ugale",
    role: "CEO & FOUNDER",
    image: "/me1.jpeg",
    description:
      "Kiran is the visionary behind MyImager, leading the team with passion and creativity.",
  },
  {
    name: "Mr.Krushana Hamand",
    role: "Frontend Developer",
    image: "/bala.jpg",
    description:
      "Krushna is responsible for the technical direction and development of our platform.",
  },

  {
    name: "Ganesh Hingamire",
    role: "Marketing Head",
    image: "/ganesh.jpg",
    description:
      "Ganesh drives the growth and outreach of MyImager through strategic marketing campaigns.",
  },
  // Add more team members here
];

const TeamPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent font-semibold">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-400">
          The amazing people behind MyImager
        </p>
      </header>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-lg text-gray-400">{member.role}</p>
            <p className="mt-4 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="p-20"></div>
    </div>
  );
};

export default TeamPage;
