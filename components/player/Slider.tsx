"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

function Slider({ value = 1, onChange }: SliderProps) {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      defaultValue={[1]}
      className=" touch-none relative flex items-center w-full h-10 select-none"
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume slider"
    >
      <RadixSlider.Track className="bg-neutral-600 grow relative rounded-full h-[3px]">
        <RadixSlider.Range className="absolute h-full bg-white rounded-full" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
}

export default Slider;
