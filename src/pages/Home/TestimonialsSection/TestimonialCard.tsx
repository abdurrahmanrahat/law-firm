import { Card, CardContent } from "@/components/ui/card";
import type { TTestimonial } from "@/types/testimonial.type";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: TTestimonial }) => {
  return (
    <Card
      key={testimonial.author}
      className="bg-background hover:border-primary/30 transition-colors"
    >
      <CardContent className="px-5 xl:px-6 py-1 xl:py-2">
        <Quote className="w-6 h-6 xl:w-8 xl:h-8 text-primary/40 mb-2" />
        <div className="flex gap-1 mb-2 xl:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground/80 leading-[1.3] mb-2 xl:mb-4 text-sm 2xl:text-base font-josefin-sans text-justify">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-2">
          <img
            src={testimonial.photo}
            alt={testimonial.author}
            className="w-10 h-10 xl:w-12 xl:h-12 rounded-full"
          />

          <div>
            <p className="font-semibold text-foreground text-sm 2xl:text-base">
              {testimonial.author}
            </p>
            <p className="text-muted-foreground text-xs 2xl:text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
