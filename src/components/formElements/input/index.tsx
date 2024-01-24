import React, {ChangeEvent} from "react";
import Main from '../main.module.scss';
import Style from './style.module.scss'
import Image from "next/image";
import Error from "../../../../public/assets/Error.svg"
import Info from "../../../../public/assets/info.svg"

interface InputElementProps {
  id: string;
  label: string;
  type: string;
  value: string | undefined;
  updateValue: (value: string) => void;
  onBlur?: (value: string) => void | undefined;
  placeholder?: string;
  error?: string;
  resetError?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  infoText?: string;
  classProp?: string;
  inputStyle?: string;
  min?:number;
  max?:number;
}

const InputElement: React.FC<InputElementProps> = ({
  id,
  label,
  type,
  inputStyle = "standart",
  value,
  updateValue,
  resetError,
  onBlur,
  placeholder = "",
  error = "",
  disabled = false,
  infoText = "",
  classProp="",
  required = false,
  min,
  max
}) => {

  return(
    <div className="flex flex-col relative">
      <label
        htmlFor={`input${id}`}
        className={`${Main.input_label} ${inputStyle === "inner" && Style.label_inner}` }
      >
        {`${label} ${required ? "*" : ""}`}
      </label>
      <input
        id={`input${id}`}
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { updateValue(e.target.value), resetError?.("") }}
        onBlur={(e) => onBlur?.(e.target.value)}
        className={`${Main.input_element} ${ error && Main.input_element_error} ${classProp} ${ inputStyle === "inner" && Style.input_inner}`}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        minLength={min}
        maxLength={max}
      />
      {
       !error && infoText &&
        <div className="flex items-center">
          <Image
            src={Info}
            width={16}
            alt="Icone de sucesso"
            className={`mr-1 ${Style.info_success}`}
          />
          <p className={`${Main.input_label} ${Main.input_label_info}`}>{infoText}</p>
        </div>
      }
      {
        error &&
        <div className="flex items-center">
          <Image
            src={Error}
            width={16}
            alt="Icone de erro"
            className="mr-1"
          />
          <p className={`${Main.input_label} ${Main.input_label_info_error}`}>{error}</p>
        </div>
      }
    </div>
  )
}

export default InputElement;
