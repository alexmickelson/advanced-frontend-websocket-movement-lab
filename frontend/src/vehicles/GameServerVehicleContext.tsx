import { createContext, FC, ReactNode, useState } from "react";
import { VehicleContextType, VehicleType } from "./contextTypes";


export const GameServerVehicleContext = createContext<VehicleContextType>({
  vehicles: [],
  addVehicle: () => {},
  updateVehicle: () => {},
});

export const GameServerVehicleContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  const addVehicle = (_id: number) => {}

  const updateVehicle = (
    _id: number,
    _vehicleAction:
      | "moveForward"
      | "moveBackward"
      | "turnLeft"
      | "turnRight"
      | "stopForwards"
      | "stopBackwards"
      | "stopLeft"
      | "stopRight"
  ) => {}

  return (
    <GameServerVehicleContext.Provider
      value={{
        vehicles,
        addVehicle,
        updateVehicle,
      }}
    >
      {children}
    </GameServerVehicleContext.Provider>
  );
};
