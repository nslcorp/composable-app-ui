import React from "react";
import { SfSelect } from "@storefront-ui/react";

interface SimpleSelectProps {
  data: string[];
  selectedValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  selectLabel?: string;
}
const SimpleSelect = (props: SimpleSelectProps) => {
  if (props.placeholder && props.selectedValue) {
    console.error(
      "Error:: SimpleSelect has a native element issue. When both placeholder and selectedValue are set, the native element display worning"
    );
    return null;
  }

  return (
    <div>
      <label>
        {props.selectLabel && (
          <span className="pb-1 font-medium text-neutral-900 font-body">
            {props.selectLabel}
          </span>
        )}

        <SfSelect
          {...(props.placeholder && { placeholder: props.placeholder })}
          value={props.selectedValue}
          onChange={(e) => props.onChange(e.target.value)}
        >
          {props.data.map((record) => (
            <option value={record} key={record}>
              {record}
            </option>
          ))}
        </SfSelect>
      </label>
    </div>
  );
};

export default SimpleSelect;
