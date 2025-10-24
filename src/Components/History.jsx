import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, HistoryIcon } from "lucide-react";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const History = () => {

 const history = [
  {
    "year": "2500 BCE",
    "title": "Indus Valley Civilization",
    "description": "One of the world’s earliest urban civilizations flourished in present-day Pakistan and northwest India. Known for its advanced city planning, drainage system, and artifacts like pottery and seals.",
    "highlight": "Ancient Civilization",
    "image": image1,
  },
  {
    "year": "300 BCE",
    "title": "Mauryan Empire",
    "description": "Founded by Chandragupta Maurya, the empire expanded across most of South Asia. Emperor Ashoka’s reign spread Buddhism and left behind numerous stone pillars and edicts.",
    "highlight": "Age of Ashoka",
    "image": image2
  },
  {
    "year": "1200 CE",
    "title": "Medieval Bengal Sultanate",
    "description": "The Bengal Sultanate emerged as a major Islamic kingdom, known for its rich architecture, terracotta mosques, and vibrant trade with foreign regions.",
    "highlight": "Golden Bengal",
    "image": image3
  },
  {
    "year": "1600 CE",
    "title": "Mughal Architecture",
    "description": "The Mughal Empire brought artistic excellence — with monuments like the Taj Mahal and Lalbagh Fort showcasing Indo-Islamic design and craftsmanship.",
    "highlight": "Architectural Brilliance",
    "image": image4
  },
  {
    "year": "1757 CE",
    "title": "Battle of Plassey",
    "description": "A turning point in Indian history where the British East India Company defeated Nawab Siraj-ud-Daulah, marking the beginning of British rule in Bengal.",
    "highlight": "Colonial Beginning",
    "image": "https://warfarehistorynetwork.com/wp-content/uploads/2022/08/M-Plassey-LEAD-4C-Mar14-964x1150.jpg"
  },
  {
    "year": "1947 CE",
    "title": "Independence of India & Pakistan",
    "description": "The end of British rule after nearly 200 years led to the creation of two independent nations — India and Pakistan. The event reshaped South Asian history.",
    "highlight": "End of Empire",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJoDobrZoWzJmHnLYGBBHDMueI3piJk7oxg&s"
  },
  {
    "year": "1971 CE",
    "title": "Bangladesh Liberation War",
    "description": "After nine months of struggle, Bangladesh achieved independence from Pakistan, marking a historic victory for freedom and self-identity.",
    "highlight": "Birth of Bangladesh",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WIf-IcmFLa3z9JiK6T2iRSKz9N1a_nX_cg&s"
  }
];




  return (
    <div className="max-w-11/12 mx-auto mt-10 px-10 pb-10">
      <p className="text-4xl font-bold text-center my-8 flex justify-center items-center gap-2"> <HistoryIcon /> History</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // slidesPerView={1}
        // spaceBetween={20}
        slideShadows={true}
        coverflowEffect={{
          rotate: 6,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".pagination-next",
          prevEl: ".pagination-pre",
          clickable: true,
          slideShadows: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 }
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="relative"
      >
        {
          history.map((achievement, index) => {
            
            return <SwiperSlide className={`p-5 border text-center min-h-96 dark:bg-gray-800 text-white bg- rounded-xl border-blue-700 backdrop-blur-3xl`}>
              <img className="h-56 mx-auto rounded-xl rotate-3 w-72" src={achievement.image} alt="image" />
              <strong>{achievement.year}</strong>
              <h3 className="font-bold text-xl">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </SwiperSlide>
          })
        }
        <div className="flex justify-between ">
          <ArrowLeft
            className="absolute pagination-pre z-40 left-2 top-1/2 -translate-y-1/2 cursor-pointer"
          ></ArrowLeft>
          <ArrowRight
            className="absolute pagination-next z-40 right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          ></ArrowRight>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default History;
