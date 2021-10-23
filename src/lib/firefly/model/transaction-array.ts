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


import { Meta } from './meta';
import { PageLink } from './page-link';
import { TransactionRead } from './transaction-read';

/**
 * 
 * @export
 * @interface TransactionArray
 */
export interface TransactionArray {
    /**
     * 
     * @type {Array<TransactionRead>}
     * @memberof TransactionArray
     */
    data: Array<TransactionRead>;
    /**
     * 
     * @type {Meta}
     * @memberof TransactionArray
     */
    meta: Meta;
    /**
     * 
     * @type {PageLink}
     * @memberof TransactionArray
     */
    links: PageLink;
}


