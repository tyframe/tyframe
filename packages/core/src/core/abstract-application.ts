import { Service } from '../model/service';
import { Handler } from '../model/handler';

export class AbstractApplication {
    protected services: Service[] = [];
    protected handlers: Handler[] = [];
}
