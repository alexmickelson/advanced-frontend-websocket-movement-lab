import { GuestVehicle } from "./GuestVehicle";
import { InteractiveVehicle } from "./InteractiveVehicle";
import {
  GameServerVehicleContextProvider,
  GameServerVehicleContext,
} from "./GameServerVehicleContext";

export const VehicleApp = () => {
  return (
    <>
      <GameServerVehicleContextProvider>
        <GuestVehicle id={1} context={GameServerVehicleContext} />
        <InteractiveVehicle
          controlKeys={{
            forwards: "w",
            backwards: "s",
            left: "a",
            right: "d",
          }}
          id={0}
          context={GameServerVehicleContext}
        />
      </GameServerVehicleContextProvider>
    </>
  );
};
