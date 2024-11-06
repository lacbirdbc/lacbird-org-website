'use client';
import {useTranslations} from 'next-intl';
import Header from '@/components/header/header';
import { Button } from '@/components/ui/button';
import LacbirdCoinImage from '@/components/image/lacbird-coin';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { EmblaOptionsType } from 'embla-carousel'
import 'swiper/css';
import 'swiper/css/effect-creative';
import Carousel from '@/components/carousel/carousel';


export default function LandingPage() {
  const t = useTranslations();
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <div className='w-screen min-h-screen'>
      <div className='container mx-auto'>
        <Header/>
        <section className='w-full h-[70vh] flex space-x-9 items-center justify-center'>
          <Carousel slides={[
            // <LacbirdCoinImage/>,
            <div >Content 1</div>,
            <div>Content 2</div>,
            <div>Content 3</div>
          ]} options={OPTIONS}/>
          {/* <div className='w-[200px] h-[200px] flex justify-center items-center bg-blue-100'>
            <LacbirdCoinImage/>
          </div> */}
          <div className='flex flex-col space-y-3 bg-green-100'>
            <h1 className='text-5xl'>Lacbird Blockchain</h1>
            <h3 className='text-3xl'>Crypto concurency</h3>
            <div className='flex space-x-5'>
              <Button>Get started</Button>
              <Button>Request demo</Button>
            </div>
          </div>
        </section>

        <section className='w-full h-[100px] bg-yellow-100 my-5'>

        </section>

        <section className='w-full h-[500px] bg-yellow-100 my-5'>

        </section>
      </div>
    </div>
  );
}
