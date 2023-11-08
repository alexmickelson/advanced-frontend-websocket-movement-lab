import {
  FC,
  ReactNode,
  createContext,
  useState,
} from "react";
import { VehicleContextType, VehicleType } from "./contextTypes";

export const GameClientVehicleContext = createContext<VehicleContextType>({
  vehicles: [],
  addVehicle: () => {},
  updateVehicle: () => {},
});
export const GameClientVehicleProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, _setVehicles] = useState<VehicleType[]>([]);
  const addVehicle = (_id: number) => {};

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
  ) => {};

  return (
    <GameClientVehicleContext.Provider
      value={{
        vehicles,
        addVehicle,
        updateVehicle,
      }}
    >
      {children}
    </GameClientVehicleContext.Provider>
  );
};

