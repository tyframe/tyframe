import { EventConfig } from '../interface/event-config';
import { Service } from '../interface/Service';
import { Handler } from '../interface/handler';
export abstract class AbstractHandler implements Handler {
    services: Service[] = [];
    config: EventConfig[] = [];

    abstract handle(event: Event): void

    getServiceByType(type: Function) {
        return this.services.filter((service: Service) => service instanceof type)[0];
    }
}
