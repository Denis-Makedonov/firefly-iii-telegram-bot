export interface IStorage {
    acquireSession(storageKey: number): Promise<IStorageSession>;
}

export interface IStorageSession {
    get(key: string): any;
    set(key: string, value: any): any;
    isEmpty(): boolean;
    save(): Promise<boolean>;
}

export interface IStorageAccessor {
    save(session: object, storageKey: number): Promise<boolean>;
}