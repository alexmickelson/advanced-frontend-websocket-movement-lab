import { Context, FC, useContext, useEffect } from "react";
import { VehicleContextType } from "./contextTypes";


export const InteractiveVehicle: FC<{
  id: number;
  controlKeys: {
    forwards: string;
    backwards: string;
    left: string;
    right: string;
  };
  context: Context<VehicleContextType>;
}> = ({ controlKeys, id, context }) => {
  const vehicleContext = useContext(context);
  const vehicle = vehicleContext.vehicles.find((v) => v.id === id);
  useEffect(() => {
    if (!vehicle) vehicleContext.addVehicle(id);
  }, [vehicleContext, id, vehicle]);

  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      if (event.key === controlKeys.forwards)
        vehicleContext.updateVehicle(id, "moveForward");
      if (event.key === controlKeys.backwards)
        vehicleContext.updateVehicle(id, "moveBackward");
      if (event.key === controlKeys.left)
        vehicleContext.updateVehicle(id, "turnLeft");
      if (event.key === controlKeys.right)
        vehicleContext.updateVehicle(id, "turnRight");
    };
    const keyupListener = (event: KeyboardEvent) => {
      if (event.key === controlKeys.forwards)
        vehicleContext.updateVehicle(id, "stopForwards");
      if (event.key === controlKeys.backwards)
        vehicleContext.updateVehicle(id, "stopBackwards");
      if (event.key === controlKeys.left)
        vehicleContext.updateVehicle(id, "stopLeft");
      if (event.key === controlKeys.right)
        vehicleContext.updateVehicle(id, "stopRight");
    };

    window.addEventListener("keydown", keydownListener);
    window.addEventListener("keyup", keyupListener);

    return () => {
      window.removeEventListener("keyup", keyupListener);
      window.removeEventListener("keydown", keydownListener);
    };
  }, [
    vehicleContext,
    controlKeys.backwards,
    controlKeys.forwards,
    controlKeys.left,
    controlKeys.right,
    id,
  ]);

  if (!vehicle)
    return (
      <div>client not connected to server, cannot create client vehicle</div>
    );

  const viewBox = 100;
  return (
    <div
      style={{
        position: "fixed",
        rotate: `${vehicle.rotation}deg`,
        transition: "all .2s",
        width: `${viewBox}px`,
        height: `${viewBox}px`,
        top: `${vehicle.yPosition}px`,
        left: `${vehicle.xPosition}px`,
      }}
    >
      {/* <your vehicle icon component goes here /> */}
    </div>
  );
};
