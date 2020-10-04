import { genericConstructor } from './../type/constructor';
import { Handler } from "./handler";
import { Service } from './service';

export interface ApplicationConfig {
    services: genericConstructor<Service>[];
    handler: genericConstructor<Handler>[];
}
