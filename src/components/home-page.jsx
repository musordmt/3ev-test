import ArrowIcon from './arrow'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Stamp from '../assets/stamp.png'
import Wave from '../assets/wave.png'

export default function HomePage() {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-0 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 bg-[#E6F1F8] w-full h-full relative'>
            <div className='absolute right-[10px] md:left-[39px] top-[10px] md:top-[23px] w-[140px] md:w-36 lg:w-48 xl:w-60 2xl:w-[281px] h-[77px] md:h-20 lg:h-24 xl:h-32 2xl:h-[155px]'>
                <img src={Stamp} alt="stamp" className='w-full h-full' />
            </div>
            <div className='absolute right-0 t-0 md:w-60 lg:w-80 xl:w-[400px] 2xl:w-[517px] h-full hidden md:block'>
                <img src={Wave} alt="wave" className='w-full h-full' />
            </div>
            <div className='md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[680px] flex flex-col gap-10 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 p-[30px] md:px-10 lg:px-16 xl:px-24 2xl:px-[120px] md:pb-20 md:pt-[101px] relative text-left'>
                <div className='flex flex-col gap-8 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-[30px] md:py-0'>
                    <div className='text-[#29293D] font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] leading-9 2xl:leading-[76.8px] font-domaine-display'>Villa Holidays</div>
                    <div className='text-[#29293D] font-normal text-base md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] leading-[26px] 2xl:leading-[29px] font-aktiv-grotesk'>
                        Private villa holidays with Oilver's Travels are all about the extraordinary, especially when it comes to our collection of villas and chateaux. Quirky, stylish and full of character, out villas for rent have been handpicked by our knowledgeable destination experts who are the best in the business. So one year you could be in a medieval castle, and the next you could be soaking up the sun on your very own private island.
                    </div>
                </div>
                <button className='hidden md:flex flex-row items-center justify-between bg-gradient-to-r from-[#0172B1] to-[#019EF5] text-white md:w-40 lg:w-45 xl:w-50 2xl:w-[226px] md:h-10 lg:h-12 xl:h-14 2xl:h-[60px] py-[24px] px-8 rounded-[1px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                    <div className='font-bold md:text-sm xl:text-base 2xl:text-lg text-white font-aktiv-grotesk'>Book Now</div>
                    <ArrowIcon />
                </button>
                <div className="absolute left-5 md:left-8 lg:left-12 xl:left-16 2xl:left-20 top-8 md:top-[70px] font-normal text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] bg-gradient-to-b from-[#0172B1] to-[#019EF5] bg-clip-text text-transparent h-[48.8px] leading-[28.8px] flex items-center -translate-y-[10px] md:h-[64.8px] md:leading-[44.8px] font-haikus-script z-10">Our Extraordinary</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-[3px]">
                    <div className="relative flex items-center justify-center aspect-square md:w-[170px] lg:w-[240px] xl:w-[280px] 2xl:w-[338px] md:h-[170px] lg:h-[200px] xl:h-[250px] 2xl:h-[276px] rounded-[1px]">
                        <img src={Image1} alt="pools" className="h-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]'></div>
                        <div className="absolute bottom-0 left-0 p-5 lg:p-6 xl:p-7 2xl:p-8 w-full flex items-center justify-between">
                            <div className="font-bold text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-6 xl:leading-7 2xl:leading-[30.72px] text-white text-left">Villas with Pools</div>
                            <ArrowIcon />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center aspect-square md:w-[170px] lg:w-[240px] xl:w-[280px] 2xl:w-[338px] md:h-[170px] lg:h-[200px] xl:h-[250px] 2xl:h-[276px] rounded-[1px] overflow-hidden">
                        <img src={Image2} alt="romantic" />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]'></div>
                        <div className="absolute bottom-0 left-0 p-5 lg:p-6 xl:p-7 2xl:p-8 w-full flex items-center justify-between">
                            <div className="font-bold text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-6 xl:leading-7 2xl:leading-[30.72px] text-white font-aktiv-grotesk text-left">Romantic Villas</div>
                            <ArrowIcon />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center aspect-square md:w-[170px] lg:w-[240px] xl:w-[280px] 2xl:w-[338px] md:h-[170px] lg:h-[200px] xl:h-[250px] 2xl:h-[276px] rounded-[1px]">
                        <img src={Image3} alt="beach" className="h-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]'></div>
                        <div className="absolute bottom-0 left-0 p-5 lg:p-6 xl:p-7 2xl:p-8 w-full flex items-center justify-between">
                            <div className="font-bold text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-6 xl:leading-7 2xl:leading-[30.72px] text-white text-left">Beach Villas</div>
                            <ArrowIcon />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center aspect-square md:w-[170px] lg:w-[240px] xl:w-[280px] 2xl:w-[338px] md:h-[170px] lg:h-[200px] xl:h-[250px] 2xl:h-[276px] rounded-[1px]">
                        <img src={Image4} alt="sustainable" className="h-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]'></div>
                        <div className="absolute bottom-0 left-0 p-5 lg:p-6 xl:p-7 2xl:p-8 w-full flex items-center justify-between">
                            <div className="font-bold text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-6 xl:leading-7 2xl:leading-[30.72px] text-white text-left">Sustainable</div>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden flex-row items-center pt-[30px] pb-[39px] ">
                    <button className='flex flex-row items-center justify-between bg-gradient-to-r from-[#0172B1] to-[#019EF5] text-white w-[226px] h-[60px] py-[24px] px-8 rounded-[1px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                        <div className='font-bold text-lg text-white font-aktiv-grotesk'>Book Now</div>
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}