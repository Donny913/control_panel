import React from 'react';
import { Button } from 'arwes';

// TO DO remove after testing
const blueToothListener = () => {
  navigator.bluetooth
    .requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service']
    })
    .then(device => device.gatt.connect())
    .then((server) => {
      console.log(server);
      return server.getPrimaryService('battery_service');
    })
    .then((service) => {
      console.log(service);
      return service.getCharacteristic('battery_level');
    })
    .then((characteristic) => {
      console.log(characteristic);
      return characteristic.readValue();
    })
    .then((value) => {
      console.log(`Battery percentage is ${value.getUint8(0)}`);
    })
    .catch((error) => {
      console.log(`error ${error}`);
    });
};
//
const ManualUI = () => (
  <div className="btns-panel">
    <div className="action-btns">
      <Button onClick={blueToothListener} animate layer="secondary" className="button">
        Patrol
      </Button>
      <Button animate layer="alert" className="button">
        Fire
      </Button>
    </div>
    <div className="movement-btns center">
      <Button animate className="button">
        &#8592;
      </Button>
      <div className="center vertical">
        <Button animate className="button center">
          &#8593;
        </Button>
        <Button animate className="button">
          &#8595;
        </Button>
      </div>
      <Button animate className="button">
        &#8594;
      </Button>
    </div>
  </div>
);

export default ManualUI;
