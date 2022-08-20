import * as api from './api'
import { Configuration } from './configuration'
import globalAxios from 'axios';
import Debug from 'debug'

import { MyContext } from '../../types/MyContext';

const debug = Debug('firefly')

export const setupFirefly = async (ctx: MyContext, next: () => Promise<void>) => {
  const log = debug.extend('index')
  const { fireflyUrl, fireflyAccessToken } = ctx.session.settings
  log('fireflyAccessToken: %O', fireflyAccessToken)
  log('fireflyUrl: %O', fireflyUrl)

  if (!fireflyUrl) {
    log('Replying with a message...')
    return await ctx.reply(ctx.i18n.t('mdlwr.noFireflyURLFound'), {
      parse_mode: 'Markdown'
    })
  }

  if (!fireflyAccessToken) {
    log('Replying with a message...')
    return await ctx.reply(ctx.i18n.t('mdlwr.noFireflyAccessTokenFound'), {
      parse_mode: 'Markdown'
    })
  }

  globalAxios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (err) {
    log('Error response: %O', err)
    return Promise.reject(err.response.data);
  })
  
  ctx.session.fireflyConfiguration = new Configuration({
    accessToken: fireflyAccessToken,
    basePath: fireflyUrl.replace(/\/+$/, ""),
  })
  return next();
}

export default function firefly(configuration: Configuration) {
  return {
    About: api.AboutApiFactory(configuration),
    Accounts: api.AccountsApiFactory(configuration),
    Categories: api.CategoriesApiFactory(configuration),
    Insight: api.InsightApiFactory(configuration),
    Transactions: api.TransactionsApiFactory(configuration),
  }
}
