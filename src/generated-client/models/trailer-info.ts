/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



/**
 * 
 * @export
 * @interface TrailerInfo
 */
export interface TrailerInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof TrailerInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the original title.
     * @type {string}
     * @memberof TrailerInfo
     */
    'OriginalTitle'?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof TrailerInfo
     */
    'Path'?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof TrailerInfo
     */
    'MetadataLanguage'?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof TrailerInfo
     */
    'MetadataCountryCode'?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof TrailerInfo
     */
    'ProviderIds'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof TrailerInfo
     */
    'Year'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrailerInfo
     */
    'IndexNumber'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrailerInfo
     */
    'ParentIndexNumber'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TrailerInfo
     */
    'PremiereDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TrailerInfo
     */
    'IsAutomated'?: boolean;
}

