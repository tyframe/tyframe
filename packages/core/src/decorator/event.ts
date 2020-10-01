import { Handler } from './../interface/handler';
import { constructor, genericConstructor } from './../type/constructor';
import { EventConfig } from './../interface/event-config';

export const Event = (config: EventConfig[]): (<Handler>(target: genericConstructor<Handler>) => void) => {
    return <Handler extends constructor>(target: Handler) => {
        return class extends target {
            config = config;
        };
    };
};
