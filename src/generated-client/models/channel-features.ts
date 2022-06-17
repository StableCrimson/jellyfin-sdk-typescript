/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ChannelItemSortField } from './channel-item-sort-field';
import { ChannelMediaContentType } from './channel-media-content-type';
import { ChannelMediaType } from './channel-media-type';

/**
 * 
 * @export
 * @interface ChannelFeatures
 */
export interface ChannelFeatures {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ChannelFeatures
     */
    Name?: string;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof ChannelFeatures
     */
    Id?: string;
    /**
     * Gets or sets a value indicating whether this instance can search.
     * @type {boolean}
     * @memberof ChannelFeatures
     */
    CanSearch?: boolean;
    /**
     * Gets or sets the media types.
     * @type {Array<ChannelMediaType>}
     * @memberof ChannelFeatures
     */
    MediaTypes?: Array<ChannelMediaType>;
    /**
     * Gets or sets the content types.
     * @type {Array<ChannelMediaContentType>}
     * @memberof ChannelFeatures
     */
    ContentTypes?: Array<ChannelMediaContentType>;
    /**
     * Gets or sets the maximum number of records the channel allows retrieving at a time.
     * @type {number}
     * @memberof ChannelFeatures
     */
    MaxPageSize?: number | null;
    /**
     * Gets or sets the automatic refresh levels.
     * @type {number}
     * @memberof ChannelFeatures
     */
    AutoRefreshLevels?: number | null;
    /**
     * Gets or sets the default sort orders.
     * @type {Array<ChannelItemSortField>}
     * @memberof ChannelFeatures
     */
    DefaultSortFields?: Array<ChannelItemSortField>;
    /**
     * Gets or sets a value indicating whether a sort ascending/descending toggle is supported.
     * @type {boolean}
     * @memberof ChannelFeatures
     */
    SupportsSortOrderToggle?: boolean;
    /**
     * Gets or sets a value indicating whether [supports latest media].
     * @type {boolean}
     * @memberof ChannelFeatures
     */
    SupportsLatestMedia?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can filter.
     * @type {boolean}
     * @memberof ChannelFeatures
     */
    CanFilter?: boolean;
    /**
     * Gets or sets a value indicating whether [supports content downloading].
     * @type {boolean}
     * @memberof ChannelFeatures
     */
    SupportsContentDownloading?: boolean;
}


