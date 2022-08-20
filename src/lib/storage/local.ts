import { IStorage, IStorageSession } from "./types";

export class TempStorage implements IStorage {
    _storage: object

    constructor() {
        this._storage = {}
    }

    async acquireSession(storageKey: number): Promise<IStorageSession> {
        let session = this._storage[storageKey];
        if (!session) {
            session = {};
            this._storage[storageKey] = storageKey;
        }
        const save = async (session: object): Promise<boolean> => {
           this._storage[storageKey] = session;
           return true;
        }
        return new TempSession(session, save);
    }
}

type SaveFunction = (session: object) => Promise<boolean>;


export class TempSession implements IStorageSession {
    _session: object
    _save: SaveFunction

    constructor(session: object, saveFunc: SaveFunction) {
        this._session = session;
        this._save = saveFunc;
    }

    isEmpty(): boolean {
        return !Object.keys(this._session).length;
    }

    get(key: string): any {
        return this._session[key];
    }

    set(key: string, value: any) {
        this._session[key] = value;
    }

    async save(): Promise<boolean> {
        return await this._save(this._session);       
    }
}