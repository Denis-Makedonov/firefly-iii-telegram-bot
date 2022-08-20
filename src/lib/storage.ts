import config from '../config'
import debug from 'debug'
import { IStorageSession } from "./storage/types";
import { Storage } from './storage/sqlite';
import { projectDir } from '../constants';
import path from 'path';

const rootLog = debug(`bot:storage`)
const allowedLanguages = ['ru', 'en']

export interface IUserSettings {
  fireflyUrl: string;
  fireflyAccessToken: string;
  defaultAssetAccount: string;
  defaultAssetAccountId: number;
  language: string;
  save(): Promise<boolean>;
}

class UserSettings implements IUserSettings {
  _session: IStorageSession

  constructor(session: IStorageSession) {
    this._session = session;
  }

  get fireflyUrl() {
    return this._session.get('fireflyUrl')
  }
  set fireflyUrl(val: string) {
    this._session.set('fireflyUrl', val)
  }

  get fireflyAccessToken() {
    return this._session.get('fireflyAccessToken')
  }
  set fireflyAccessToken(val: string) {
    this._session.set('fireflyAccessToken', val)
  }

  get defaultAssetAccount() {
    return this._session.get('defaultAssetAccount')
  }
  set defaultAssetAccount(val: string) {
    this._session.set('defaultAssetAccount', val)
  }

  get defaultAssetAccountId() {
    return this._session.get('defaultAssetAccountId')
  }
  set defaultAssetAccountId(val: number) {
    this._session.set('defaultAssetAccountId', val)
  }

  get language() {
    return this._session.get('language')
  }
  set language(val: string) {
    if (allowedLanguages.includes(val as 'en' | 'ru')) this._session.set('language', val)
  }

  async save(): Promise<boolean> {
    return this._session.save()
  }
}


const storage = new Storage(path.join(projectDir, "storage", "db.db"));

export async function getUserSettings(userId: number): Promise<UserSettings> {
  const session = await storage.acquireSession(userId)
  if (session.isEmpty()) {
    const log = rootLog.extend('bootstrapSession')
    log('userId: %O', userId)
    bootstrapSession(session)
    await session.save()
  }
  return new UserSettings(session)
}

export function initialSettings() {
  return {
    fireflyUrl: config.fireflyUrl,
    fireflyAccessToken: config.fireflyAccessToken,
    defaultAssetAccount: '',
    defaultAssetAccountId: 0,
    language: 'en',
    save: async () => {return true},
  }
}

function bootstrapSession(session: IStorageSession) {
  const settings = initialSettings()
  for (let k in Object.keys(settings)) {
    session.set(k, session[k]);
  }
}
