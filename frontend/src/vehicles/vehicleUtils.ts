import { VehicleType } from "./contextTypes";

const speedConstant = 20;
const rotationConstant = 10;
const radians = (angleInDegrees: number) => angleInDegrees * (Math.PI / 180);



export const vehicleMovedForward = (v: VehicleType) => {
  return {
    ...v,
    xPosition:
      v.xPosition + speedConstant * Math.cos(radians(-1 * v.rotation)),
    yPosition:
      v.yPosition + speedConstant * Math.sin(radians(v.rotation)),
  };
};
export const vehicleMovedBackward = (v: VehicleType) => {
  return {
    ...v,
    xPosition:
      v.xPosition - speedConstant * Math.cos(radians(-1 * v.rotation)),
    yPosition:
      v.yPosition - speedConstant * Math.sin(radians(v.rotation)),
  };
};
export const vehicleTurnedLeft = (v: VehicleType) => ({
  ...v,
  rotation: v.rotation - rotationConstant,
});
export const vehicleTurnedRight = (v: VehicleType) => ({
  ...v,
  rotation: v.rotation + rotationConstant,
});