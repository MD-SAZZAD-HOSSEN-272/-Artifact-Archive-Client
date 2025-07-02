import Aos from "aos";
import { useEffect } from "react";
import { FaLandmark, FaUniversity } from "react-icons/fa";
import { FaHelmetUn } from "react-icons/fa6";


const FeatureTime = () => {
  const periods = [
    {
      title: "Ancient Era",
      icon: <FaLandmark className="text-4xl text-orange-600" />,
      description: "Explore early civilizations like Egypt, Mesopotamia, and the Indus Valley.",
    },
    {
      title: "Medieval Era",
      icon: <FaHelmetUn className="text-4xl text-red-600" />,
      
      description: "Discover medieval swords, manuscripts, and royal relics.",
    },
    {
      title: "Modern Era",
      icon: <FaUniversity className="text-4xl text-blue-600" />,
      description: "Artifacts from the 18th to early 20th century.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">🌍 Featured Time Periods</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {periods.map((period, index) => (
          <div data-aos="fade-up"
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{period.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{period.title}</h3>
            <p className="text-gray-600">{period.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureTime
