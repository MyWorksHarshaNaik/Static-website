// "use client"
// import Image from 'next/image';
// import { galleryImages } from '@/app/api/data';
// import Masonry from 'react-masonry-css';
// import Link from 'next/link';

// const Gallery = () => {
//     return (
//         <section>
//             <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
//                 <div className="text-center">
//                     <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Our Gallery</p>
//                     <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
//                         Gallery of our cooked food.
//                     </h2>
//                 </div>
//                 <div className="my-16 px-6">
//                     <Masonry
//                         breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
//                         className="flex gap-6"
//                         columnClassName="masonry-column"
//                     >
//                         {/* Map through images */}
//                         {galleryImages.map((item, index) => (
//                             <div key={index} className="overflow-hidden rounded-3xl mb-6 relative group">
//                                 <Image
//                                     src={item.src}
//                                     alt={item.name}
//                                     width={600}
//                                     height={500}
//                                     className="object-cover w-full h-full"
//                                 />
//                                 <div className="w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 p-12 flex flex-col items-start gap-8 justify-end">
//                                     <p className='text-white text-2xl'>
//                                         <span className='font-semibold'>Name:</span> {item.name}
//                                     </p>
//                                     <div className="flex items-center justify-between w-full">
//                                         <p className='text-white text-2xl'>
//                                             <span className='font-semibold'>Price:</span> ${item.price}
//                                         </p>
//                                         <Link href="#" className='text-white rounded-full bg-primary border border-primary py-2 px-6 hover:bg-primary/40 hover:backdrop-blur-sm'>
//                                             Learn More
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Masonry>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Gallery;


"use client";
import Image from "next/image";

const Gallery = () => {
  const highlights = [
    "Inhouse telecom hardware with US collaboration in 2004.",
    "Telitics Hardware were used for services at major Telecom Operators across the globe.",
    "Patented '16E1/T1 Media Gateway' US patent number (US 20110197252 A1 in 2010).",
    "Specializes in design and delivery of next generation telecom products across the full range of Outbound Dialers, Inbound Dialers, SMS Services, USSD, SMSC, SRT (Subscriber Retention Tool) for Telecom Operators.",
    "Launches Enterprise Cloud Telephony on May 1st 2015 to cater SMALL Medium and Large Enterprises.",
    "Enterprise Cloud Telephony Services is targeted to customers with low spending and higher returns by maximum utilisation of services."
  ];

  const culturePoints = [
    {
      title: "Open communication",
      desc: "Leaders who have an open door policy and a listening ear remove barriers and build bridges."
    },
    {
      title: "Reinforced values and goals",
      desc: "Our core values being Ethical practice and Customer Satisfaction, always strive to alter our business goals by keeping everyone aligned, focused and empowered that they are working toward the same outcome i.e customer satisfaction."
    },
    {
      title: "Defined accountability",
      desc: "Telitics believe in Team work there by making each member have finest effort performance with well-defined expectations and are responsible for their allotted everyday job."
    }
  ];

  return (
    <section className="py-20" id="gallery-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-6">
        
        {/* Highlights Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-8">
            Highlights
          </h2>
          <ul className="list-disc list-inside space-y-3 text-black/80 dark:text-white/80 text-lg">
            {highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Team & Culture Section */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
            Team & Culture
          </h2>
          <p className="text-black/80 dark:text-white/80 text-lg mb-6">
            Everyday each team member thinks and acts as an owner of the company and takes responsibility. 
            As a member of Telitics we are here to enhance and meet our client's revenue targets, 
            we are accountable for doing our part to contribute to success and we are dedicated to 
            meeting our commitments by portraying our eager can-do attitude.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {culturePoints.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-black/70 dark:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
