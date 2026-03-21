import Container from "@/components/Layout/Container";
import PageBanner from "@/components/Shared/Ui/PageBanner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <PageBanner
        title="Error 404"
        currentPage="404"
        currentHref="/404"
        image="/images/home/hero-bg.jpg"
      />

      <div className="flex items-center justify-center bg-background text-foreground py-14 md:py-20">
        <Container>
          <div className="w-full max-w-xl mx-auto text-center">
            {/* Image */}
            <div className="mb-8 flex justify-center">
              <img
                src="/images/shared/404-image.png"
                alt="404 Illustration"
                className="w-full max-w-xs sm:max-w-sm object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-semibold font-display mb-4">
              Oops! Page Not Found!
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
              We’re sorry, but the page you’re looking for doesn’t exist or may
              have been moved. Please check the URL or return to the homepage.
            </p>

            {/* Button */}
            {/* <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Back To Home
            </Link> */}
            <Link to="/">
              <Button size="lg" className="px-5">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
