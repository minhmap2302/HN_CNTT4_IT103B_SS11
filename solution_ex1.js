
let devices = [
    { id: 1, name: "Dieu hoa", isActive: true, powerWatts: 1000 },
    { id: 2, name: "Den ngu", isActive: true, powerWatts: 50 }
];

function findDeviceById(devices, id) {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === id) {
            return devices[i];
        }
    }
    return null;
}

function updateDevice(devices, id, data) {
    let device = findDeviceById(devices, id);

    if (device === null) {
        return false;
    }

    if (data.name !== undefined) {
        device.name = data.name;
    }

    if (data.isActive !== undefined) {
        device.isActive = data.isActive;
    }

    if (data.powerWatts !== undefined) {
        device.powerWatts = data.powerWatts;
    }

    return true;
}

updateDevice(devices, 1, { isActive: false });
updateDevice(devices, 2, { powerWatts: 0 });

console.log(devices);
