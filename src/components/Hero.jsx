import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pt-[65px] bg-[#541554]">
      <div className="max-w-[1600px] mx-auto px-5 py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-[47%]">
            <h1 className="text-5xl md:text-[62px] leading-[1.1] font-bold text-white mb-8">
              Great teamwork starts with a <span className="text-[#ecb22e]">digital HQ</span>
            </h1>
            <p className="text-[20px] leading-[1.4] text-white mb-8 pr-4">
              With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-[#541554] px-8 py-4 rounded font-bold text-[14px] hover:bg-gray-100">
                SIGN UP WITH EMAIL
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#4285f4] text-white px-8 py-4 rounded font-bold text-[14px] hover:bg-[#3367d6]">
                <FaSearch className="text-xl" />
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </div>
          <div className="lg:w-[53%]">
            <video 
              className="w-full rounded-lg"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source 
                src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" 
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;