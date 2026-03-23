import Container from "@/components/Layout/Container";

const LeadAdvocate = () => {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/hero-bg.jpg"
          alt="advocate background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-md bg-white/5 backdrop-blur-sm shadow-cardDarkShadow">
                {/* Replace this with real image when ready */}
                <div className=" flex items-center justify-center">
                  <img
                    src="/images/about/lead-advocate.jpg"
                    alt="PrimeLaw legal consultation"
                    className=" w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary text-xs 2xl:text-sm font-semibold tracking-[0.25em] uppercase mb-0.5 block">
                Lead Advocate
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Advocate Mohammad Rahman
              </h2>

              <p className="text-primary text-base mt-1 mb-6 font-medium">
                Supreme Court of Bangladesh
              </p>

              <div className="space-y-4 text-white/70 leading-relaxed mb-8 font-josefin-sans 2xl:text-[17px]">
                <p>
                  With over 7 years of experience in litigation and legal
                  advisory, Advocate Rahman has successfully represented
                  hundreds of clients.
                </p>
                <p>
                  His practice spans the District Courts and High Court
                  Division, with particular expertise in criminal defense,
                  property disputes, and corporate law.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-md backdrop-blur-sm hover:bg-white/10 transition">
                  <p className="text-primary text-xs 2xl:text-sm uppercase tracking-wider mb-1">
                    Enrolled
                  </p>
                  <p className="text-white/80 text-sm 2xl:text-base font-medium">
                    Bar Council, 2016
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-md backdrop-blur-sm hover:bg-white/10 transition">
                  <p className="text-primary text-xs 2xl:text-sm uppercase tracking-wider mb-1">
                    Education
                  </p>
                  <p className="text-white/80 text-sm 2xl:text-base font-medium">
                    LL.B, LL.M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeadAdvocate;
