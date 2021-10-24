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
 * @interface AccountUpdate
 */
export interface AccountUpdate {
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    iban?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    bic?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    account_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    opening_balance?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    opening_balance_date?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    virtual_balance?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user\'s default currency.
     * @type {string}
     * @memberof AccountUpdate
     */
    currency_id?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user\'s default currency.
     * @type {string}
     * @memberof AccountUpdate
     */
    currency_code?: string;
    /**
     * If omitted, defaults to true.
     * @type {boolean}
     * @memberof AccountUpdate
     */
    active?: boolean;
    /**
     * Order of the account
     * @type {number}
     * @memberof AccountUpdate
     */
    order?: number;
    /**
     * If omitted, defaults to true.
     * @type {boolean}
     * @memberof AccountUpdate
     */
    include_net_worth?: boolean;
    /**
     * Is only mandatory when the type is asset.
     * @type {string}
     * @memberof AccountUpdate
     */
    account_role?: AccountUpdateAccountRoleEnum;
    /**
     * Mandatory when the account_role is ccAsset. Can only be monthlyFull or null.
     * @type {string}
     * @memberof AccountUpdate
     */
    credit_card_type?: AccountUpdateCreditCardTypeEnum;
    /**
     * Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank.
     * @type {string}
     * @memberof AccountUpdate
     */
    monthly_payment_date?: string | null;
    /**
     * Mandatory when type is liability. Specifies the exact type.
     * @type {string}
     * @memberof AccountUpdate
     */
    liability_type?: AccountUpdateLiabilityTypeEnum;
    /**
     * Mandatory when type is liability. Interest percentage.
     * @type {string}
     * @memberof AccountUpdate
     */
    interest?: string | null;
    /**
     * Mandatory when type is liability. Period over which the interest is calculated.
     * @type {string}
     * @memberof AccountUpdate
     */
    interest_period?: AccountUpdateInterestPeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdate
     */
    notes?: string | null;
    /**
     * Latitude of the account\'s location, if applicable. Can be used to draw a map. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed.
     * @type {number}
     * @memberof AccountUpdate
     */
    latitude?: number | null;
    /**
     * Latitude of the account\'s location, if applicable. Can be used to draw a map. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed.
     * @type {number}
     * @memberof AccountUpdate
     */
    longitude?: number | null;
    /**
     * Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed.
     * @type {number}
     * @memberof AccountUpdate
     */
    zoom_level?: number | null;
}

/**
    * @export
    * @enum {string}
    */
export enum AccountUpdateAccountRoleEnum {
    DefaultAsset = 'defaultAsset',
    SharedAsset = 'sharedAsset',
    SavingAsset = 'savingAsset',
    CcAsset = 'ccAsset',
    CashWalletAsset = 'cashWalletAsset',
    Null = 'null'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountUpdateCreditCardTypeEnum {
    MonthlyFull = 'monthlyFull',
    Null = 'null'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountUpdateLiabilityTypeEnum {
    Loan = 'loan',
    Debt = 'debt',
    Mortgage = 'mortgage',
    Null = 'null'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountUpdateInterestPeriodEnum {
    Daily = 'daily',
    Monthly = 'monthly',
    Yearly = 'yearly',
    Null = 'null'
}


