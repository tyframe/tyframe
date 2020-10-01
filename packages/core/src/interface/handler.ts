import { Service } from './Service';
import { EventConfig } from './event-config';

export interface Handler {
    services: Service[];
    config: EventConfig[];

    handle(event: Event): void;
}
