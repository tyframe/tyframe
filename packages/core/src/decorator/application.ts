import { EventConfig } from '../model/event-config';
import { Handler } from '../model/handler';
import { constructor, genericConstructor } from '../type/constructor';
import { ApplicationConfig } from '../model/application-config';
import { Service } from '../model/service';
import { delegate } from '@tyframe/util';

export const Application = (config: ApplicationConfig): (<T>(target: genericConstructor<T>) => void) => {
    return <T extends constructor>(target: T) => {
        const services = config.services.map((service: genericConstructor<Service>): Service => new service());
        // add all different services to each service
        services.forEach((service: Service) => service.services = services.filter((entry) => !Object.is(service, entry)));

        return class extends target {
            services = services;
            handlers = config.handlers.map(
                (handler: genericConstructor<Handler>): Handler => {
                    const instance = new handler();
                    instance.services = this.services;

                    instance.config.forEach((configEntry: EventConfig): void => {
                        configEntry.types.forEach((type: string) => {
                            if (configEntry.subSelector !== undefined && configEntry.subSelector !== null) {
                                delegate(
                                    configEntry.selector,
                                    configEntry.subSelector,
                                    type,
                                    instance.handle.bind(instance),
                                    configEntry.options,
                                );
                                return;
                            }

                            if (typeof configEntry.selector === 'string') {
                                const elements = document.querySelectorAll(configEntry.selector);
                                elements.forEach((element: Element) =>
                                    element.addEventListener(type, instance.handle.bind(instance), configEntry.options),
                                );
                                return;
                            }

                            configEntry.selector.addEventListener(
                                type,
                                instance.handle.bind(instance),
                                configEntry.options,
                            );
                        });
                    });

                    return instance;
                },
            );
        };
    };
};
