import { useEffect, useState } from 'react';
import {Container} from './CarouselStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import FetchAPI from '../hooks/FetchAPI';

import { 
  EffectCoverflow,
  Navigation, 
  Pagination, 
  } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type CarouselProps = {
  mealOrDrink: 'meal' | 'drink';
};

function Carousel(props: CarouselProps) {
  const { mealOrDrink } = props;
  const [recomendations, setRecomendations] = useState<any[]>([]);

  const { fetchAllRecipes } = FetchAPI();

  useEffect(() => {
    const getData = async () => {
      const mealOrDrinkRecomend = mealOrDrink;
      const recomendData = await fetchAllRecipes(mealOrDrinkRecomend);
      setRecomendations(recomendData.slice(0, 6));
    };
    getData();
  }, []);

  return (
    <Container>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        speed={1000}
        slidesPerView={"auto"}
        centeredSlides
        tag="section" 
        effect='coverflow'
        coverflowEffect={{
          rotate: 50, 
          stretch: 0, 
          depth: 160, 
          modifier: 1, 
          slideShadows: false,
          scale: 0.7
        }}
        navigation
        pagination={{ clickable: true }}
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
