import { EventConfig } from '../interface/event-config';
import { Handler } from '../interface/handler';
import { constructor, genericConstructor } from "../type/constructor";
import { ApplicationConfig } from "../interface/application-config";
import { Service } from '../interface/service';

export const Application = (config: ApplicationConfig): (<T>(target: genericConstructor<T>) => void) => {
    return <T extends constructor>(target: T) => {
        return class extends target {
            services = config.services.map((service: genericConstructor<Service>): Service => new service());
            handlers = config.handlers.map((handler: genericConstructor<Handler>): Handler => {
                const instance = new handler();
                instance.services = this.services;
                
                instance.config.forEach((configEntry: EventConfig): void => {
                    if (typeof configEntry.selector === 'string') {
                        const elements = document.querySelectorAll(configEntry.selector);
                        elements.forEach((element) =>
                            configEntry.types.forEach((type) => element.addEventListener(type, instance.handle)),
                        );
                        return;
                    }

                    if ('addEventListener' in configEntry.selector) {
                        const selector = configEntry.selector as HTMLElement;
                        configEntry.types.forEach((type) => selector.addEventListener(type, instance.handle.bind(instance)));
                    }
                });

                return instance;
            });
        }
    }
}
