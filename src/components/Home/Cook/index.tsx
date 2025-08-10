// "use client"
// import Image from 'next/image';


// const Cook = () => {

//     return (
//         <section className='relative' id="cook-section">
//             <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
//                 <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
//                     <Image src={'/images/cook/burger.png'} alt="burger-image" width={463} height={622} />
//                 </div>
//                 <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
//                     <div className='col-span-6 flex justify-start'>
//                         <Image src="/images/cook/cook.png" alt="nothing" width={636} height={808} />
//                     </div>
//                     <div className='col-span-6 flex flex-col justify-center'>
//                         <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>cook with us</p>
//                         <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
//                             Cooking together with the expert.
//                         </h2>
//                         <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem </p>
//                         <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....</p>
//                         <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary'>Learn more</button>
//                     </div>
//                 </div>
//             </div>
//         </section >
//     )
// }

// export default Cook;


"use client";
import Image from "next/image";

const Cook = () => {
  const cards = [
    {
      title: "Applications and Interface",
      description:
        "Customized, effortlessly operated application and Web Interface to enhance the revenue.",
      img: "/images/Features/feature1.png",
    },
    {
      title: "Customer Centricity",
      description:
        "Enabling ease-of-use using WebInterface making it easy for Enterprises to connect their Customers wherever, whenever they want.",
      img: "/images/Features/feature2.png",
    },
    {
      title: "Automation",
      description:
        "Enrich with Expertise and Quality analysis with automated processes to bring the best procedures to market Products and Services.",
      img: "/images/Features/feature3.png",
    },
    {
      title: "Quality Processes",
      description:
        "Strong emphasis on quality with innovative defect-free applications using best available technology to meet Enterprise expectations with on-time delivery.",
      img: "/images/Features/feature4.png",
    },
    {
      title: "Time to Market",
      description:
        "Plug into a proven platform, saving time spent in gathering, software development, testing and deployment.",
      img: "/images/Features/feature5.png",
    },
    {
      title: "Cost Effectiveness",
      description:
        "Most innovative and cost effective products enabling Enterprises to win customers with dependable products that incessantly improve people's lives.",
      img: "/images/Features/feature7.png",
    },
  ];

  return (
    <section className="relative py-20" id="cook-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        {/* Intro */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
            All-In-One Platform with Amazing Features
          </h2>
          <p className="text-black/70 dark:text-white/70 md:text-lg max-w-4xl mx-auto">
            Digital technology helps change the way we consume and use
            information in our daily lives. The crucial part for any business
            that's into service or sales is the availability of information,
            either through digital or physical channels, and the ability to
            analyze customer expectations based on customer inputs or behavior.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />

              {/* Always visible title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-4 px-6">
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>

              {/* Description on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center px-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-white/80">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cook;
