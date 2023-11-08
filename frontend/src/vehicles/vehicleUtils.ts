import { VehicleType } from "./contextTypes";

const speedConstant = 20;
const rotationConstant = 10;
const radians = (angleInDegrees: number) => angleInDegrees * (Math.PI / 180);

export const moveVehicle = (v: VehicleType) => {
  // reads the movement flags of the vehicle and calculates the new position / rotation
  // allow for both velocity and rotation to happen at the same time
  const velocityAdjusted = v.goForwards
    ? vehicleMovedForward(v)
    : v.goBackwards
      ? vehicleMovedBackward(v)
      : v;

  const rotationAdjustedVehicle = velocityAdjusted.turnLeft
    ? vehicleTurnedLeft(velocityAdjusted)
    : velocityAdjusted.turnRight
      ? vehicleTurnedRight(velocityAdjusted)
      : velocityAdjusted;

  return rotationAdjustedVehicle;
}

const vehicleMovedForward = (v: VehicleType) => ({
  ...v,
  xPosition:
    v.xPosition + speedConstant * Math.cos(radians(-1 * v.rotation)),
  yPosition:
    v.yPosition + speedConstant * Math.sin(radians(v.rotation)),
})
const vehicleMovedBackward = (v: VehicleType) => ({
  ...v,
  xPosition:
    v.xPosition - speedConstant * Math.cos(radians(-1 * v.rotation)),
  yPosition:
    v.yPosition - speedConstant * Math.sin(radians(v.rotation)),
})
const vehicleTurnedLeft = (v: VehicleType) => ({
  ...v,
  rotation: v.rotation - rotationConstant,
});
const vehicleTurnedRight = (v: VehicleType) => ({
  ...v,
  rotation: v.rotation + rotationConstant,
});
