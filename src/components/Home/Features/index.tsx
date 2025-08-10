// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import { FeaturesData } from '@/app/api/data';
// import { Icon } from "@iconify/react";

// const Features = () => {
//     return (
//         <section>
//             <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id="about-section">
//                 <div className='text-center mb-14' >
//                     <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Features</p>
//                     <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>Get a many of interesting features.</h2>
//                 </div>
//                 <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
//                     {FeaturesData.map((items, i) => (
//                         <div className='p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black' key={i}>
//                             <div className='work-img-bg rounded-full flex justify-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]'>
//                                 <Image src={items.imgSrc} alt={items.imgSrc} width={510} height={10} />
//                             </div>
//                             <h3 className='text-2xl text-black dark:text-white font-semibold text-center mt-16'>{items.heading}</h3>
//                             <p className='text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2'>{items.subheading}</p>
//                             <div className='flex items-center justify-center '>
//                                 <Link href='/' className='text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'>
//                                     Learn More
//                                     <Icon
//                                         icon="tabler:chevron-right"
//                                         width="24"
//                                         height="24"
//                                         className="text-primary "
//                                     />
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Features;


"use client";
import Image from "next/image";
import Link from "next/link";
import { FeaturesData } from "@/app/api/data";
import { Icon } from "@iconify/react";

const Features = () => {
  return (
    <section>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        id="about-section"
      >
        {/* Features Title */}
        {/* <div className="text-center mb-14">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Features
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto">
            Get a many of interesting features.
          </h2>
        </div> */}

        {/* Features Grid */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32">
          {FeaturesData.map((items, i) => (
            <div
              className="p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black"
              key={i}
            >
              <div className="work-img-bg rounded-full flex justify-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={510}
                  height={10}
                />
              </div>
              <h3 className="text-2xl text-black dark:text-white font-semibold text-center mt-16">
                {items.heading}
              </h3>
              <p className="text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2">
                {items.subheading}
              </p>
              <div className="flex items-center justify-center ">
                <Link
                  href="/"
                  className="text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0"
                >
                  Learn More
                  <Icon
                    icon="tabler:chevron-right"
                    width="24"
                    height="24"
                    className="text-primary "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        {/* Why TELITICS Section */}
        <div className="mt-32 flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-black p-8 rounded-3xl shadow-lg">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/whyus.png" // make sure file is in public/images
              alt="Why Choose Us"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white mb-6">
              Why TELITICS?
            </h2>
            <ul className="space-y-4 text-lg text-black/80 dark:text-white/80">
              <li>
                ✅ Fully managed services model for the launch and deployment of
                Automated Telephony Services.
              </li>
              <li>
                ✅ Quicker deployment and integration with shorter time to market
                for new products and services.
              </li>
              <li>
                ✅ Provides a clear ROI proposition to users.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

