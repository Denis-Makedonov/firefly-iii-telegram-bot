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



/**
 * 
 * @export
 * @interface CurrencyStore
 */
export interface CurrencyStore {
    /**
     * Defaults to true
     * @type {boolean}
     * @memberof CurrencyStore
     */
    enabled?: boolean;
    /**
     * Make this currency the default currency.
     * @type {boolean}
     * @memberof CurrencyStore
     */
    _default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrencyStore
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof CurrencyStore
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CurrencyStore
     */
    symbol: string;
    /**
     * Supports 0-16 decimals.
     * @type {number}
     * @memberof CurrencyStore
     */
    decimal_places?: number;
}


