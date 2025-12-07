import { Error } from "@components/ui/form/Error.tsx";

type FormFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  type?: 'email' | 'password' | 'text';
  placeholder?: string;
};

export const FormField = <T extends FieldValues>({
                                                   label,
                                                   name,
                                                   register,
                                                   error,
                                                   type = "text",
                                                   placeholder
                                                 }: FormFieldProps<T>) => {
  return (
    <>
      <FormField
        label={label}
        name={name}
        register={register}
        error={error}
        type={type}
        placeholder={placeholder}/>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
      <Error error={error}/>
    </>
  );
};