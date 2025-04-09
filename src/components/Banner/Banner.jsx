import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full mx-auto h-[600px]"
        >
            <SwiperSlide>
                <img src={image1} alt="Banner 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="Banner 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="Banner 3" className="w-full h-full object-cover" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;