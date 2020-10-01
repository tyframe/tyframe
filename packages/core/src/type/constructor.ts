export type constructor = {
    new (...args: any[]): {};
};

export type genericConstructor<T> = {
    new (...args: any[]): T;
}
