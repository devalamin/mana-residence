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
                <div>
                    <div className='relative'>
                        <img src={image1} alt="Banner 1" className="w-full h-full object-cover" />
                    </div>
                    <div className='absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white flex flex-col items- justify-center'>
                        <div className='ml-40'>
                            <h2 className='text-6xl font-bold'>Find Your Perfect Home —
                                <br />Where Comfort Meets Community</h2>
                            <p className='text-start mt-5'>Discover beautifully designed residences in vibrant neighborhoods.
                                <br />
                                Whether you're buying or renting, we make it easy to find a place you'll love to call home.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='relative'>
                        <img src={image3} alt="Banner 1" className="w-full h-full object-cover" />
                    </div>
                    <div className='absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white flex flex-col items- justify-center'>
                        <div className='ml-40'>
                            <h2 className='text-6xl font-bold'>Your Next Chapter Begins at Home

</h2>
                            <p className='text-start mt-5'>Discover beautifully designed residences in vibrant neighborhoods.
                                <br />
                                Whether you're buying or renting, we make it easy to find a place you'll love to call home.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='relative'>
                        <img src={image2} alt="Banner 1" className="w-full h-full object-cover" />
                    </div>
                    <div className='absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white flex flex-col items- justify-center'>
                        <div className='ml-40'>
                            <h2 className='text-6xl font-bold'>Find Your Perfect Home —
                                <br />Where Comfort Meets Community</h2>
                            <p className='text-start mt-5'>Discover beautifully designed residences in vibrant neighborhoods.
                                <br />
                                Whether you're buying or renting, we make it easy to find a place you'll love to call home.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            

        </Swiper>
    );
};

export default Banner;