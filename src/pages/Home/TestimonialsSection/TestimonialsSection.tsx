import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Shared/Ui/SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "The team at PrimeLaw handled my property dispute with exceptional professionalism. They explained steps clearly and achieved outcome.",
    author: "Rahman Ahmed",
    photo: "/images/home/testimonials/client-demo3.jpg",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote:
      "During a difficult family matter, they provided guidance while fighting for my rights. I couldn't have asked for better representation.",
    author: "Fatima Khatun",
    photo: "/images/home/testimonials/client-demo1.jpg",
    role: "Teacher",
    rating: 4,
  },
  {
    quote:
      "Their expertise in corporate law helped us navigate complex regulations. They are now our trusted legal advisors for all business matters.",
    author: "Karim Hassan",
    photo: "/images/home/testimonials/client-demo2.jpg",
    role: "CEO, Tech Startup",
    rating: 5,
  },
  {
    quote:
      "PrimeLaw provided outstanding legal guidance during merger process. Their strategic advice ensured everything proceeded smoothly.",
    author: "Sadia Khan",
    photo: "/images/home/testimonials/elizabeth.jpeg",
    role: "Managing Director",
    rating: 4,
  },
  {
    quote:
      "Their legal team is highly responsive and detail-oriented. They helped us resolve a complex contract issue with remarkable professionalism.",
    author: "Mahmud Rahman",
    photo: "/images/home/testimonials/client-demo2.jpg",
    role: "Operations Manager",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const prev = () => {
    swiperRef.current?.slidePrev();
  };

  const next = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Container>
      <div className="py-14 md:py-20">
        <SectionTitle subTitle="Testimonials" title="What Our Clients Say" />
        <div className="relative mt-12">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            disabled={isBeginning}
            className=" absolute left-0 top-1/2 -translate-y-1/2 z-40 p-1 md:p-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 md:w-5 h-4 md:h-5" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            disabled={isEnd}
            className=" absolute right-0 top-1/2 -translate-y-1/2 z-40 p-1 md:p-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
          </button>

          <div className="mx-7 md:mx-[38px] xl:mx-10">
            <Swiper
              className=" "
              // slidesOffsetBefore={10}
              // slidesOffsetAfter={10}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              spaceBetween={4}
              speed={800} // smoother slide
              autoHeight={true} // important: prevents height collapse
              slidesPerView={1}
              grabCursor
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.author} className="p-1">
                  {/* card */}
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
