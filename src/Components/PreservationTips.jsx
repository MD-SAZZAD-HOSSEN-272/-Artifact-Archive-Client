import Aos from "aos";
import { useEffect } from "react";
import { FaBoxOpen, FaSun, FaTint } from "react-icons/fa";


const PreservationTips = () => {
  const tips = [
    {
      title: "Avoid Direct Sunlight",
      icon: <FaSun className="text-3xl text-yellow-500" />,
      description: "Exposure to sunlight can fade and damage artifacts over time.",
    },
    {
      title: "Use Acid-Free Storage",
      icon: <FaBoxOpen className="text-3xl text-green-500" />,
      description: "Helps preserve paper-based or fragile items longer.",
    },
    {
      title: "Control Humidity",
      icon: <FaTint className="text-3xl text-blue-500" />,
      description: "Keep a stable environment to prevent mold and cracking.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-out',
      offset: 200
    })
  }, [])

  return (
    <section  className="dark:bg-gray-700 bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl overflow-hidden   text-white w-full">
      <h2 className="text-3xl font-bold text-center mb-8">🛡️ Preservation Tips</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div data-aos="fade-left"
            key={index}
            className=" dark:bg-gray-400 p-6 rounded-xl shadow-xl hover:shadow-2xl text-center hover:scale-[1.01] transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{tip.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
            <p className=" dark:text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PreservationTips