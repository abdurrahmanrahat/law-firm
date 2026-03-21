/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode } from "react";
import {
  type DefaultValues,
  type FieldValues,
  FormProvider,
  type Resolver,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

// Take Zod's inferred type and make sure it satisfies FieldValues
type TFormValues<TSchema extends z.ZodTypeAny> = z.infer<TSchema> & FieldValues;

// Props typed based on that single source-of-truth type
type TFormProps<TSchema extends z.ZodTypeAny> = {
  children: ReactNode;
  schema: TSchema;
  onSubmit: SubmitHandler<TFormValues<TSchema>>;
  defaultValues?: DefaultValues<TFormValues<TSchema>>;
};

const MYForm = <TSchema extends z.ZodTypeAny>({
  children,
  schema,
  onSubmit,
  defaultValues,
}: TFormProps<TSchema>) => {
  const methods = useForm<TFormValues<TSchema>>({
    defaultValues,
    // Cast because @hookform/resolvers typing is a bit stricter
    resolver: zodResolver(schema as any) as Resolver<TFormValues<TSchema>>,
  });

  const submit: SubmitHandler<TFormValues<TSchema>> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default MYForm;
