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
 * Class ChapterInfo.
 * @export
 * @interface ChapterInfo
 */
export interface ChapterInfo {
    /**
     * Gets or sets the start position ticks.
     * @type {number}
     * @memberof ChapterInfo
     */
    'StartPositionTicks'?: number;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ChapterInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the image path.
     * @type {string}
     * @memberof ChapterInfo
     */
    'ImagePath'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChapterInfo
     */
    'ImageDateModified'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChapterInfo
     */
    'ImageTag'?: string | null;
}

