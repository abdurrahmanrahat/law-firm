export default function SectionTitle({
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-0 text-[15px] xl:text-[17px] 2xl:text-[18px] font-semibold tracking-wide text-primary dark:text-primary ">
        {subTitle}
      </p>

      <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold tracking-wide text-gray-950 dark:text-gray-50 leading-[1.2]">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-0.75 w-20 rounded-full bg-primary" />
    </div>
  );
}
