
// "use client"
// import Image from 'next/image'
// import Link from 'next/link'

// const Hero = () => {
//   return (
//     <section
//       id="home-section"
//       className="relative w-full h-screen overflow-hidden"
//     >
//       {/* Background image */}
//       <Image
//         src="/images/hero/banner-image.jpeg"
//         alt="Painting wall background"
//         fill
//         priority
//         className="object-cover object-center w-full h-full"
//       />

//       {/* Overlay content */}
//       <div className="absolute inset-0 bg-black/50 flex items-center px-4 md:px-20">
//         <div className="max-w-2xl text-left">
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Transform Your Walls<br className="hidden sm:block" />
//             With Beautiful Colors
//           </h1>
//           <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8">
//             Affordable & professional wall painting services for homes, offices, and commercial spaces — customized to your style.
//           </p>

//           {/* CTA Button */}
//           <Link
//             href="#book"
//             className="inline-block bg-primary text-white text-base sm:text-lg font-medium py-3 px-6 rounded-full hover:bg-white hover:text-primary border border-white transition-all"
//           >
//             Book a Slot
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// new edit 

"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="enterprise-solutions"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero/banner-image.jpg" // Replace with your image
        alt="Enterprise Solutions Background"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/50 flex items-center px-4 md:px-20">
        <div className="max-w-3xl text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-white/90 text-base sm:text-lg mb-4">
            Telitics delivers secure, cloud-based telephony hosted on a clustered
            network with high encryption, ensuring 24/7 reliability to reduce
            costs and give you a competitive edge.
          </p>
          <p className="text-white/80 text-sm sm:text-base mb-4">
            Choose local or toll-free numbers, create custom extensions for
            sales & support, and integrate with the apps you use every day.
            Flexible plans let you upgrade or downgrade anytime.
          </p>
          <p className="text-white/80 text-sm sm:text-base mb-4">
            Boost productivity with Inbound Dial (IBD) for intelligent call
            routing, and Outbound Dialers for high-volume campaigns. Automate
            emails, manage campaigns, and access real-time graphical reports.
          </p>
          <p className="text-white/80 text-sm sm:text-base">
            Design IVR call flows visually, simplify setup, and deliver a
            seamless communication experience for your customers — all in just a
            few clicks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

