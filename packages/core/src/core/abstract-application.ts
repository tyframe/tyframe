import { Service } from '../interface/service';
import { Handler } from '../interface/handler';

export class AbstractApplication {
    protected services: Service[] = [];
    protected handlers: Handler[] = [];
}
