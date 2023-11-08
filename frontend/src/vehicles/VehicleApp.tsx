import { useState } from 'react'
import { GuestVehicle } from './GuestVehicle';
import { InteractiveVehicle } from './InteractiveVehicle';
import { GameClientVehicleProvider, GameClientVehicleContext } from './GameClientVehicleContext';
import { GameServerVehicleContextProvider, GameServerVehicleContext } from './GameServerVehicleContext';

export const VehicleApp = () => {
  const [isServer, setIsServer] = useState(false);

  if (isServer)
    return (
      <>
        <GameServerVehicleContextProvider>
          <h1>Game Server</h1>
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

  return (
    <div>
      <h1>Game Client</h1>
      <button onClick={() => setIsServer(true)}>becomeServer</button>
      <GameClientVehicleProvider>
        <GuestVehicle id={0} context={GameClientVehicleContext} />
        <InteractiveVehicle
          controlKeys={{
            forwards: "w",
            backwards: "s",
            left: "a",
            right: "d",
          }}
          id={1}
          context={GameClientVehicleContext}
        />
      </GameClientVehicleProvider>
    </div>
  );
}
