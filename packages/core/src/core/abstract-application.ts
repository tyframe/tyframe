import { Service } from '../interface/service';
import { Handler } from './../interface/handler';

export class AbstractApplication {
    protected services: Service[]
    protected handler: Handler[]

    constructor(services: Service[] = [], handler: Handler[] = []) {
        this.services = services;
        this.handler = handler;
    }
}
