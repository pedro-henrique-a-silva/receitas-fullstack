import { useEffect, useState } from 'react';
import {Container} from './CarouselStyle';
import { fetchApi } from '../utils/fetchAPi';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type CarouselProps = {
  mealOrDrink: 'meals' | 'drinks';
};

function Carousel(props: CarouselProps) {
  const { mealOrDrink } = props;
  const [recomendations, setRecomendations] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const mealOrDrinkRecomend = mealOrDrink === 'meals' ? 'drinks' : 'meals';
      const recomendData = await fetchApi(`http://localhost:3001/${mealOrDrinkRecomend}/all`);
      setRecomendations(recomendData.slice(0, 6));
    };
    getData();
  }, []);

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        tag="section" 
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {recomendations.map((recomendation, index) => (
      
            <SwiperSlide
              key={ index }
              data-testid={ `${index}-recommendation-card` }
            >
              <img
                src={ recomendation?.strThumb }
                alt="recipeThumb"
              />
              <h3
                data-testid={ `${index}-recommendation-title` }
              >
                {recomendation?.strName}

              </h3>

            </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Carousel;
