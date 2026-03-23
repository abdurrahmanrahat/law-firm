import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

type TDataNotFoundProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export function DataNotFound({
  title = "Content Not Found",
  description = "The content you are looking for does not exist or may have been removed.",
  buttonText = "Back To Home",
  buttonLink = "/",
}: TDataNotFoundProps) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 2xl:w-18 2xl:h-18 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileSearch className="w-7 h-7 2xl:w-8 2xl:h-8" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-foreground">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm 2xl:text-base text-muted-foreground leading-7">
            {description}
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link to={buttonLink}>
              <Button size="lg" className="px-6 2xl:px-7">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
