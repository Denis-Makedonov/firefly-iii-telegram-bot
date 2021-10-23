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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    updated_at?: string;
    /**
     * The new users email address.
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * Boolean to indicate if the user is blocked.
     * @type {boolean}
     * @memberof User
     */
    blocked?: boolean;
    /**
     * If you say the user must be blocked, this will be the reason code.
     * @type {string}
     * @memberof User
     */
    blocked_code?: UserBlockedCodeEnum;
    /**
     * Role for the new user. Can be empty or omitted.
     * @type {string}
     * @memberof User
     */
    role?: UserRoleEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UserBlockedCodeEnum {
    EmailChanged = 'email_changed',
    Null = 'null'
}
/**
    * @export
    * @enum {string}
    */
export enum UserRoleEnum {
    Owner = 'owner',
    Demo = 'demo',
    Null = 'null'
}



