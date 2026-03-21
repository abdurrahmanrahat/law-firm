import { Controller, useFormContext } from "react-hook-form";

type TMYTextAreaProps = {
  name: string;
  placeholder?: string;
  className?: string;
};

const MYTextArea = ({
  name,
  placeholder = "",
  className = "",
}: TMYTextAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            placeholder={placeholder}
            className={`w-full min-h-[80px] px-4 py-2 rounded-md border resize-none
            ${
              errors[name]
                ? "border-red-500 dark:border-red-400"
                : "border-border"
            }
            text-gray-800 dark:text-gray-200
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none hover:border-primary focus:border-primary
            transition-all duration-200 ease-in-out
            bg-background outline-none
             ${className}`}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-600 text-sm 2xl:text-base mt-1">
          {(errors[name]?.message as string) || "Invalid input"}
        </p>
      )}
    </div>
  );
};

export default MYTextArea;
