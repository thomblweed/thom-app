import { createContext } from 'react';

import { Device } from '~/types/device.type';

export const DeviceContext = createContext<Device>('mobile');
