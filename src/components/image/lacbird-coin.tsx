import Image from 'next/image'
import LacbirdCoin from '@/assets/image/lacbird_coin.png'
import { motion } from "framer-motion";

export default function LacbirdCoinImage() {
  return (
    <div className='flex flex-col items-center justify-center'>
       <Image
      src={LacbirdCoin}
      width={120}
      height={120}
      alt='Crypto concurrency image'
      className='select-none y-axis-container'
      />
      <div className='custom-shadow'></div>
    </div>
  )
}