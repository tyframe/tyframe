import { EventConfig } from './event-config';
import { Service } from './service';

export abstract class Handler {
    services: Service[] = [];
    config: EventConfig[] = [];

    abstract handle(event: Event): void;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    getServiceByType(type: any): Service | null {
        return this.services.filter((service: Service) => service instanceof type)[0] ?? null;
    }
}
