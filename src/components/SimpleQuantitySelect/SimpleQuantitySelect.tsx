import { SfButton, SfIconAdd, SfIconRemove } from "@storefront-ui/react";
import { useCounter } from "react-use";
import { useId, ChangeEvent } from "react";
import { clamp } from "@storefront-ui/shared";

interface SimpleQuantitySelectProps {
  quantity: number;
  disabled?: boolean;
  onIncrement: (qty: number) => void;
  onDecrement: (qty: number) => void;
}

export default function SimpleQuantitySelect(props: SimpleQuantitySelectProps) {
  const inputId = useId();
  const min = 1;
  const max = 100;
  const [value, { inc, dec, set }] = useCounter(props.quantity);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(clamp(nextValue, min, max));
  }

  const handleIncrementItem = () => {
    inc();
    props.onIncrement(value + 1);
  };

  const handleDecrementItem = () => {
    dec();
    props.onDecrement(value - 1);
  };

  return (
    <div className="inline-flex flex-col items-center">
      <div className="flex border border-neutral-300 rounded-md">
        <SfButton
          type="button"
          variant="tertiary"
          square
          className="rounded-r-none"
          disabled={value <= min || props.disabled}
          aria-controls={inputId}
          aria-label="Decrease value"
          onClick={handleDecrementItem}
        >
          <SfIconRemove />
        </SfButton>
        <input
          id={inputId}
          type="number"
          role="spinbutton"
          className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          min={min}
          max={max}
          value={value}
          onChange={handleOnChange}
          disabled={props.disabled}
        />
        <SfButton
          type="button"
          variant="tertiary"
          square
          className="rounded-l-none"
          disabled={value >= max || props.disabled}
          aria-controls={inputId}
          aria-label="Increase value"
          onClick={handleIncrementItem}
        >
          <SfIconAdd />
        </SfButton>
      </div>
      {/*<p className="text-xs mt-2 text-neutral-500">*/}
      {/*  <strong className="text-neutral-900">{max}</strong> in stock*/}
      {/*</p>*/}
    </div>
  );
}
