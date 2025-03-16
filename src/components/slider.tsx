'use client'

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react"

type SliderProps = {
  length: number
  render: ReactNode
  className?: string
}

export function Slider({
  length,
  render,
  className
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement | null>(null)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.left = -900 * slide + 'px'
    }
  }, [slide])

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSlide(Number(e.target.value))
  }

  function next() {
    if (slide === length / 3 - 1) {
      return setSlide(0)
    }

    setSlide(slide + 1)
  }

  function prev() {
    if (slide === 0) {
      return setSlide(length / 3 - 1)
    }

    setSlide(slide - 1)
  }

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className={cn("mx-auto w-[900px] relative overflow-hidden", className)}>
        <div ref={slidesRef} className="absolute top-0 left-0 transition">
          {render}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {
          Array(length / 3).fill(null).map((_, index) => (
            <div key={index}>
              <input id={`slide-${index}`} type="radio" name='slide' value={index} onChange={onChange} className="hidden" />
              <label htmlFor={`slide-${index}`}>
                <div className={cn("size-3 rounded-full border border-border cursor-pointer hover:bg-primary", slide === index && 'bg-primary')} />
              </label>
            </div>
          ))
        }
      </div>

      <div className="absolute flex justify-between left-0 top-1/2 -translate-y-1/2 w-full">
        <ChevronLeft onClick={prev} className="size-8 cursor-pointer hover:text-primary" />
        <ChevronRight onClick={next} className="size-8 cursor-pointer hover:text-primary" />
      </div>
    </div>
  )
}