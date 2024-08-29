import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function randomizer(min: number = 0, max: number = 255) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomNumber() {
  const hue = randomizer(0, 360);
  const saturation = randomizer(0, 100);
  const lightness = randomizer(40, 80);
  // console.log("first", hue, saturation, lightness);

  let bgColor;
  let textColor;
  let dotColor;

  if (lightness > 20 && lightness < 40) {
    bgColor = `hsl(${hue}, ${saturation}%, ${lightness + 25}%)`;
    textColor = `hsl(${hue}, ${saturation}%, ${lightness - 15}%)`;
    dotColor = `hsl(${hue}, ${saturation}%, ${lightness - 15}%)`;
    // console.log("20 - 40", hue, saturation, lightness);
    return [bgColor, textColor, dotColor];
  } else if (lightness > 40 && lightness < 50) {
    bgColor = `hsl(${hue}, ${saturation}%, ${lightness + 40}%)`;
    textColor = `hsl(${hue}, ${saturation}%, ${lightness - 25}%)`;
    dotColor = `hsl(${hue}, ${saturation}%, ${lightness - 25}%)`;
    // console.log("40 - 50", hue, saturation, lightness);
    return [bgColor, textColor, dotColor];
  } else if (lightness > 50 && lightness < 70) {
    bgColor = `hsl(${hue}, ${saturation}%, ${lightness - 25}%)`;
    textColor = `hsl(${hue}, ${saturation}%, ${lightness + 30}%)`;
    dotColor = `hsl(${hue}, ${saturation}%, ${lightness + 30}%)`;
    // console.log("50 - 70", hue, saturation, lightness);
    return [bgColor, textColor, dotColor];
  } else if (lightness > 70 && lightness < 90) {
    bgColor = `hsl(${hue}, ${saturation}%, ${lightness - 50}%)`;
    textColor = `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`;
    dotColor = `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`;
    // console.log("70 - 90", hue, saturation, lightness);
    return [bgColor, textColor, dotColor];
  } else if (lightness > 90) {
    bgColor = `hsl(${hue}, ${saturation}%, ${lightness - 70}%)`;
    textColor = `hsl(${hue}, ${saturation}%, ${lightness + 0}%)`;
    dotColor = `hsl(${hue}, ${saturation}%, ${lightness + 0}%)`;
    // console.log("90+", hue, saturation, lightness);
    return [bgColor, textColor, dotColor];
  } else {
    bgColor = `hsl(${hue}, ${saturation}%, ${lightness + 0}%)`;
    textColor = `hsl(${hue}, ${saturation}%, ${lightness + 35}%)`;
    dotColor = `hsl(${hue}, ${saturation}%, ${lightness + 35}%)`;
    // console.log("<10", hue, saturation, lightness);
    return [bgColor, textColor, dotColor];
  }
}

// AI Gen
// export function randomNumber() {
//   const hue = randomizer(0, 360);
//   const saturation = randomizer(0, 100);
//   const lightness = randomizer(0, 100);

//   // Define adjustments based on lightness ranges
//   let bgColorLightness, textColorLightness;

//   if (lightness <= 20) {
//     bgColorLightness = lightness + 25;
//     textColorLightness = lightness + 35;
//   } else if (lightness <= 40) {
//     bgColorLightness = lightness + 25;
//     textColorLightness = lightness - 15;
//   } else if (lightness <= 50) {
//     bgColorLightness = lightness + 40;
//     textColorLightness = lightness - 25;
//   } else if (lightness <= 70) {
//     bgColorLightness = lightness - 25;
//     textColorLightness = lightness + 30;
//   } else if (lightness <= 90) {
//     bgColorLightness = lightness - 50;
//     textColorLightness = lightness + 10;
//   } else {
//     bgColorLightness = lightness - 70;
//     textColorLightness = lightness;
//   }

//   // Create color strings
//   const bgColor = `hsl(${hue}, ${saturation}%, ${bgColorLightness}%)`;
//   const textColor = `hsl(${hue}, ${saturation}%, ${textColorLightness}%)`;
//   const dotColor = textColor; // Assuming dotColor is the same as textColor

//   return [bgColor, textColor, dotColor];
// }

// AI Gen
// function clamp(value: number, min: number, max: number) {
//   return Math.max(min, Math.min(max, value));
// }

// AI Gen
// export function randomNumber() {
//   const hue = randomizer(0, 360);
//   const saturation = randomizer(0, 100);
//   const lightness = randomizer(0, 100);

//   let bgColorLightness, textColorLightness;

//   // Adjust lightness based on ranges
//   if (lightness <= 20) {
//     bgColorLightness = clamp(lightness + 25, 0, 100);
//     textColorLightness = clamp(lightness + 35, 0, 100);
//   } else if (lightness <= 40) {
//     bgColorLightness = clamp(lightness + 25, 0, 100);
//     textColorLightness = clamp(lightness - 15, 0, 100);
//   } else if (lightness <= 50) {
//     bgColorLightness = clamp(lightness + 40, 0, 100);
//     textColorLightness = clamp(lightness - 25, 0, 100);
//   } else if (lightness <= 70) {
//     bgColorLightness = clamp(lightness - 25, 0, 100);
//     textColorLightness = clamp(lightness + 30, 0, 100);
//   } else if (lightness <= 90) {
//     bgColorLightness = clamp(lightness - 50, 0, 100);
//     textColorLightness = clamp(lightness + 10, 0, 100);
//   } else {
//     bgColorLightness = clamp(lightness - 70, 0, 100);
//     textColorLightness = clamp(lightness, 0, 100); // No change for very high lightness
//   }

//   // Create color strings
//   const bgColor = `hsl(${hue}, ${saturation}%, ${bgColorLightness}%)`;
//   const textColor = `hsl(${hue}, ${saturation}%, ${textColorLightness}%)`;
//   const dotColor = textColor; // Assuming dotColor is the same as textColor

//   return [bgColor, textColor, dotColor];
// }
