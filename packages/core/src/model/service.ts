export abstract class Service {
    services: Service[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    getServiceByType(type: any): Service | null {
        return this.services.filter((service: Service) => service instanceof type)[0] ?? null;
    }
}
