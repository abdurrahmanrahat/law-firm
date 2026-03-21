import Container from "@/components/Layout/Container";
import MYForm from "@/components/Shared/Forms/MYForm";
import MYInput from "@/components/Shared/Forms/MYInput";
import MYTextArea from "@/components/Shared/Forms/MYTextArea";
// import emailjs from "@emailjs/browser";
import { ChevronDown, Loader, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const caseTypes = [
  "Family Law",
  "Personal Injury",
  "Business Law",
  "Criminal Law",
  "Education Law",
  "Real Estate Law",
  "Others",
];

const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name is too long"),

  email: z.string().email("Invalid email address"),

  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long"),

  caseType: z.string().min(1, "Please select a case type"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type TContactForm = z.infer<typeof contactSchema>;

const contactDefaultValues: TContactForm = {
  name: "",
  email: "",
  phone: "",
  caseType: "Family Law",
  message: "",
};

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleContact = async (values: TContactForm) => {
    setIsLoading(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      caseType: values.caseType,
      message: values.message,
      time: new Date().toLocaleString(),
    };
    console.log("templateParams", templateParams);
    try {
      // const response = await emailjs.send(
      //   import.meta.env.NEXT_PUBLIC_SERVICE_ID as string,
      //   import.meta.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      //   templateParams,
      //   {
      //     publicKey: import.meta.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      //   },
      // );
      toast.success("Success! We’ll reach out to you shortly.");

      // if (response.status === 200) {
      //   toast.success("Success! We’ll reach out to you shortly.");
      // } else {
      //   toast.error("Something went wrong. Please try again.");
      // }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/hero-bg.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left Content */}
          <div className="max-w-xl pt-2">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Get In Touch
            </span>

            <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Are You Interest To Contact With Us?
            </h2>

            <p className="mt-6 max-w-lg text-base 2xl:text-lg leading-6.5 text-white/75 font-josefin-sans">
              We provide clear legal guidance, responsive communication, and
              confidential support for every matter. Share your case details and
              our team will get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  value: "245 King Street, Victoria 8520, Australia",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "0-123-456-7890",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "sample@gmail.com",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-white text-primary shadow-md">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-white/80">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8 lg:p-10 rounded-xs">
              <MYForm
                onSubmit={handleContact}
                schema={contactSchema}
                defaultValues={contactDefaultValues}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white/90"
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <MYInput
                      name="name"
                      placeholder="Your Name*"
                      className="h-12 rounded-xs border-white/10 bg-white/10 text-white placeholder:text-white/55 dark:placeholder:text-white/65 focus-visible:ring-0"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-white/90"
                    >
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <MYInput
                      name="phone"
                      placeholder="Phone"
                      className="h-12 rounded-xs border-white/10 bg-white/10 text-white placeholder:text-white/55 dark:placeholder:text-white/65 focus-visible:ring-0"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white/90"
                    >
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <MYInput
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="h-12 rounded-xs border-white/10 bg-white/10 text-white placeholder:text-white/55 dark:placeholder:text-white/65 focus-visible:ring-0"
                    />
                  </div>

                  <CaseTypeField />

                  <div className="sm:col-span-2 grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-white/90"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <MYTextArea
                      name="message"
                      placeholder="Your Message"
                      className="min-h-[140px] resize-none rounded-xs border-white/10 bg-white/10 text-white placeholder:text-white/55 dark:placeholder:text-white/65 focus-visible:ring-0"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex h-12 min-w-[180px] items-center justify-center bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-80 cursor-pointer rounded-xs"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Loader className="h-4 w-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Appointment"
                      )}
                    </button>
                  </div>
                </div>
              </MYForm>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseTypeField() {
  const {
    control,
    formState: { errors },
  } = useFormContext<TContactForm>();

  return (
    <div className="grid gap-2">
      <label
        htmlFor="caseType"
        className="text-sm font-medium text-white/90 dark:text-white/90"
      >
        Case Type <span className="text-red-400">*</span>
      </label>

      <Controller
        name="caseType"
        control={control}
        render={({ field }) => (
          <div className="relative">
            <select
              id="caseType"
              value={field.value}
              onChange={field.onChange}
              className="h-12 w-full rounded-xs border border-white/10 bg-white/10 px-4 pr-10 text-sm text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-primary focus:bg-white/15 appearance-none dark:border-white/10 dark:bg-white/5 cursor-pointer"
            >
              {caseTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-background text-black dark:text-white cursor-pointer"
                >
                  {type}
                </option>
              ))}
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/60">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        )}
      />

      {errors.caseType && (
        <p className="text-sm text-red-500">{errors.caseType.message}</p>
      )}
    </div>
  );
}
