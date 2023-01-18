import BasePhoneInput, { Props } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export type PhoneInputProps = {
  value: string;
  id: string;
  placeholder: string;
  required: boolean;
} & { onChange?: (e: any) => void };

function PhoneInput({ control, name, className, onChange, ...rest }: PhoneInputProps) {
  return (
    <BasePhoneInput
      {...rest}
      international
      name={name}
      onChange={onChange}
      countrySelectProps={{ className: "text-black" }}
      numberInputProps={{
        className: "border-0 text-sm focus:ring-0 dark:bg-darkgray-100 dark:placeholder:text-darkgray-600",
      }}
      className={`${className} border-1 focus-within:border-brand dark:bg-darkgray-100 dark:border-darkgray-300 block w-full rounded-md rounded-sm border border-gray-300 py-px pl-3 ring-black focus-within:ring-1 disabled:text-gray-500 disabled:opacity-50 dark:text-white dark:selection:bg-green-500 disabled:dark:text-gray-500`}
    />
  );
}

export default PhoneInput;
