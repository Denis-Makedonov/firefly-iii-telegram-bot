/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.4
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2021-09-25T14:21:28+00:00 
 *
 * The version of the OpenAPI document: 1.5.4
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CronResult } from '../model';
// @ts-ignore
import { SystemInfo } from '../model';
// @ts-ignore
import { UserSingle } from '../model';
/**
 * AboutApi - axios parameter creator
 * @export
 */
export const AboutApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns general system information and versions of the (supporting) software. 
         * @summary System information end point.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAbout: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/about`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Firefly III has one endpoint for its various cron related tasks. Send a GET to this endpoint to run the cron. The cron requires the CLI token to be present. The cron job will fire for all users. 
         * @summary Cron job endpoint
         * @param {string} cliToken The CLI token of any user in Firefly III, required to run the cron job.
         * @param {string} [date] A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it\&#39;s running on another day. 
         * @param {boolean} [force] Forces the cron job to fire, regardless of whether it has fired before. This may result in double transactions or weird budgets, so be careful. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCron: async (cliToken: string, date?: string, force?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'cliToken' is not null or undefined
            assertParamExists('getCron', 'cliToken', cliToken)
            const localVarPath = `/api/v1/cron/{cliToken}`
                .replace(`{${"cliToken"}}`, encodeURIComponent(String(cliToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)

            if (date !== undefined) {
                localVarQueryParameter['date'] = (date as any instanceof Date) ?
                    (date as any).toISOString().substr(0,10) :
                    date;
            }

            if (force !== undefined) {
                localVarQueryParameter['force'] = force;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the currently authenticated user. 
         * @summary Currently authenticated user endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/about/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AboutApi - functional programming interface
 * @export
 */
export const AboutApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AboutApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns general system information and versions of the (supporting) software. 
         * @summary System information end point.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAbout(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SystemInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAbout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Firefly III has one endpoint for its various cron related tasks. Send a GET to this endpoint to run the cron. The cron requires the CLI token to be present. The cron job will fire for all users. 
         * @summary Cron job endpoint
         * @param {string} cliToken The CLI token of any user in Firefly III, required to run the cron job.
         * @param {string} [date] A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it\&#39;s running on another day. 
         * @param {boolean} [force] Forces the cron job to fire, regardless of whether it has fired before. This may result in double transactions or weird budgets, so be careful. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCron(cliToken: string, date?: string, force?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CronResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCron(cliToken, date, force, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the currently authenticated user. 
         * @summary Currently authenticated user endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AboutApi - factory interface
 * @export
 */
export const AboutApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AboutApiFp(configuration)
    return {
        /**
         * Returns general system information and versions of the (supporting) software. 
         * @summary System information end point.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAbout(options?: any): AxiosPromise<SystemInfo> {
            return localVarFp.getAbout(options).then((request) => request(axios, basePath));
        },
        /**
         * Firefly III has one endpoint for its various cron related tasks. Send a GET to this endpoint to run the cron. The cron requires the CLI token to be present. The cron job will fire for all users. 
         * @summary Cron job endpoint
         * @param {string} cliToken The CLI token of any user in Firefly III, required to run the cron job.
         * @param {string} [date] A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it\&#39;s running on another day. 
         * @param {boolean} [force] Forces the cron job to fire, regardless of whether it has fired before. This may result in double transactions or weird budgets, so be careful. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCron(cliToken: string, date?: string, force?: boolean, options?: any): AxiosPromise<CronResult> {
            return localVarFp.getCron(cliToken, date, force, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the currently authenticated user. 
         * @summary Currently authenticated user endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser(options?: any): AxiosPromise<UserSingle> {
            return localVarFp.getCurrentUser(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCron operation in AboutApi.
 * @export
 * @interface AboutApiGetCronRequest
 */
export interface AboutApiGetCronRequest {
    /**
     * The CLI token of any user in Firefly III, required to run the cron job.
     * @type {string}
     * @memberof AboutApiGetCron
     */
    readonly cliToken: string

    /**
     * A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it\&#39;s running on another day. 
     * @type {string}
     * @memberof AboutApiGetCron
     */
    readonly date?: string

    /**
     * Forces the cron job to fire, regardless of whether it has fired before. This may result in double transactions or weird budgets, so be careful. 
     * @type {boolean}
     * @memberof AboutApiGetCron
     */
    readonly force?: boolean
}

/**
 * AboutApi - object-oriented interface
 * @export
 * @class AboutApi
 * @extends {BaseAPI}
 */
export class AboutApi extends BaseAPI {
    /**
     * Returns general system information and versions of the (supporting) software. 
     * @summary System information end point.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AboutApi
     */
    public getAbout(options?: any) {
        return AboutApiFp(this.configuration).getAbout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Firefly III has one endpoint for its various cron related tasks. Send a GET to this endpoint to run the cron. The cron requires the CLI token to be present. The cron job will fire for all users. 
     * @summary Cron job endpoint
     * @param {AboutApiGetCronRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AboutApi
     */
    public getCron(requestParameters: AboutApiGetCronRequest, options?: any) {
        return AboutApiFp(this.configuration).getCron(requestParameters.cliToken, requestParameters.date, requestParameters.force, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the currently authenticated user. 
     * @summary Currently authenticated user endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AboutApi
     */
    public getCurrentUser(options?: any) {
        return AboutApiFp(this.configuration).getCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }
}
