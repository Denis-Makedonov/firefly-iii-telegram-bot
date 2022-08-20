import { IStorage, IStorageAccessor, IStorageSession } from "./types";
import sqlite3 from "sqlite3";
import { Database, ISqlite, IMigrate, open } from 'sqlite';

export class Storage implements IStorage, IStorageAccessor {
    _storagePromise: Promise<Database<sqlite3.Database, sqlite3.Statement>>

    constructor(filename: string) {
        this._storagePromise = this.prepare(
            {
                filename,
                driver: sqlite3.Database
            },
            {},
        )
    }
    async prepare(dbConfig: ISqlite.Config, migrationsConfig: IMigrate.MigrationParams) {
        const db = await open(dbConfig);
        await db.migrate(migrationsConfig);
        return db;
    }

    async acquireSession(storageKey: number): Promise<IStorageSession> {
        const storage = await this._storagePromise;
        const result = await storage.get('SELECT data FROM userdata WHERE userId = ?', [storageKey]);
        const session = (result && result.data)?JSON.parse(result.data):{};
        if (!result) {
            const insertResult = await storage.run("INSERT INTO userdata (data, userId) VALUES (?, ?)", JSON.stringify(session), storageKey);
            console.log("ins", insertResult)
        }  
        return new Session(session, storageKey, this);
    }

    async save(session: object, storageKey: number): Promise<boolean> {
        const storage = await this._storagePromise;
        const result = await storage.run("UPDATE userdata SET data = ? WHERE userId = ?", JSON.stringify(session), storageKey);
        if (!result) {
            return false;
        }
        return true;
    }
}

class Session implements IStorageSession {
    _session: object
    _storageKey: number
    _accessor: IStorageAccessor

    constructor(session: object, storageKey: number, accessor: IStorageAccessor) {
        this._session = session;
        this._storageKey = storageKey;
        this._accessor = accessor;
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
        return await this._accessor.save(this._session, this._storageKey);       
    }
}