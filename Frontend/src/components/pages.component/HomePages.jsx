import React from 'react'
import HomeHeroSection from './HomeHeroSection'
import HomeVideo from './HomeVideo'
import HomePhotoSection from './HomePhotoSection'
import HomePdfSection from './HomePdfSection'

export default function HomePages() {
  return (
    <div className='max-w-6xl mx-auto mt-14'>
      <HomeHeroSection/>
      <HomeVideo/>
      <HomePhotoSection/>
      <HomePdfSection/>
    </div>
  )
}
