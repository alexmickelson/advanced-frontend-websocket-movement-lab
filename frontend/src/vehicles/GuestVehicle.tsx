import { Context, FC, useContext } from "react";
import { VehicleContextType } from "./contextTypes";

export const GuestVehicle: FC<{
  id: number;
  context: Context<VehicleContextType>;
}> = ({ id, context }) => {
  const vehicleContext = useContext(context);
  const vehicle = vehicleContext.vehicles.find((v) => v.id === id);

  if (!vehicle) return <div>creating vehicle</div>;
  if (!vehicle) return <div>waiting to be told about vehicle {id}</div>;

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
        stroke: "#a20071",
      }}
    >
      {/* <your vehicle icon component goes here /> */}
    </div>
  );
};
