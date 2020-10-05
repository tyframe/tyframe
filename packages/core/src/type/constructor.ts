/* eslint-disable @typescript-eslint/no-explicit-any */
export type constructor = {
    new (...args: any[]): any;
};

export type genericConstructor<T> = {
    new (...args: any[]): T;
};
