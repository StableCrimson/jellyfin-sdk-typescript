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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ImageProviderInfo } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { RemoteImageResult } from '../models';
/**
 * RemoteImageApi - axios parameter creator
 * @export
 */
export const RemoteImageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Downloads a remote image for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} type The image type.
         * @param {string} [imageUrl] The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadRemoteImage: async (itemId: string, type: ImageType, imageUrl?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('downloadRemoteImage', 'itemId', itemId)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('downloadRemoteImage', 'type', type)
            const localVarPath = `/Items/{itemId}/RemoteImages/Download`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (imageUrl !== undefined) {
                localVarQueryParameter['imageUrl'] = imageUrl;
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
         * 
         * @summary Gets available remote image providers for an item.
         * @param {string} itemId Item Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImageProviders: async (itemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getRemoteImageProviders', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/RemoteImages/Providers`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets available remote images for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} [type] The image type.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [providerName] Optional. The image provider to use.
         * @param {boolean} [includeAllLanguages] Optional. Include all languages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImages: async (itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getRemoteImages', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/RemoteImages`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (providerName !== undefined) {
                localVarQueryParameter['providerName'] = providerName;
            }

            if (includeAllLanguages !== undefined) {
                localVarQueryParameter['includeAllLanguages'] = includeAllLanguages;
            }


    
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
 * RemoteImageApi - functional programming interface
 * @export
 */
export const RemoteImageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RemoteImageApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Downloads a remote image for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} type The image type.
         * @param {string} [imageUrl] The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadRemoteImage(itemId: string, type: ImageType, imageUrl?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadRemoteImage(itemId, type, imageUrl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets available remote image providers for an item.
         * @param {string} itemId Item Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRemoteImageProviders(itemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageProviderInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoteImageProviders(itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets available remote images for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} [type] The image type.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [providerName] Optional. The image provider to use.
         * @param {boolean} [includeAllLanguages] Optional. Include all languages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRemoteImages(itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RemoteImageResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoteImages(itemId, type, startIndex, limit, providerName, includeAllLanguages, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RemoteImageApi - factory interface
 * @export
 */
export const RemoteImageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RemoteImageApiFp(configuration)
    return {
        /**
         * 
         * @summary Downloads a remote image for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} type The image type.
         * @param {string} [imageUrl] The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadRemoteImage(itemId: string, type: ImageType, imageUrl?: string, options?: any): AxiosPromise<void> {
            return localVarFp.downloadRemoteImage(itemId, type, imageUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available remote image providers for an item.
         * @param {string} itemId Item Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImageProviders(itemId: string, options?: any): AxiosPromise<Array<ImageProviderInfo>> {
            return localVarFp.getRemoteImageProviders(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available remote images for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} [type] The image type.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [providerName] Optional. The image provider to use.
         * @param {boolean} [includeAllLanguages] Optional. Include all languages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImages(itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options?: any): AxiosPromise<RemoteImageResult> {
            return localVarFp.getRemoteImages(itemId, type, startIndex, limit, providerName, includeAllLanguages, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for downloadRemoteImage operation in RemoteImageApi.
 * @export
 * @interface RemoteImageApiDownloadRemoteImageRequest
 */
export interface RemoteImageApiDownloadRemoteImageRequest {
    /**
     * Item Id.
     * @type {string}
     * @memberof RemoteImageApiDownloadRemoteImage
     */
    readonly itemId: string

    /**
     * The image type.
     * @type {ImageType}
     * @memberof RemoteImageApiDownloadRemoteImage
     */
    readonly type: ImageType

    /**
     * The image url.
     * @type {string}
     * @memberof RemoteImageApiDownloadRemoteImage
     */
    readonly imageUrl?: string
}

/**
 * Request parameters for getRemoteImageProviders operation in RemoteImageApi.
 * @export
 * @interface RemoteImageApiGetRemoteImageProvidersRequest
 */
export interface RemoteImageApiGetRemoteImageProvidersRequest {
    /**
     * Item Id.
     * @type {string}
     * @memberof RemoteImageApiGetRemoteImageProviders
     */
    readonly itemId: string
}

/**
 * Request parameters for getRemoteImages operation in RemoteImageApi.
 * @export
 * @interface RemoteImageApiGetRemoteImagesRequest
 */
export interface RemoteImageApiGetRemoteImagesRequest {
    /**
     * Item Id.
     * @type {string}
     * @memberof RemoteImageApiGetRemoteImages
     */
    readonly itemId: string

    /**
     * The image type.
     * @type {ImageType}
     * @memberof RemoteImageApiGetRemoteImages
     */
    readonly type?: ImageType

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof RemoteImageApiGetRemoteImages
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof RemoteImageApiGetRemoteImages
     */
    readonly limit?: number

    /**
     * Optional. The image provider to use.
     * @type {string}
     * @memberof RemoteImageApiGetRemoteImages
     */
    readonly providerName?: string

    /**
     * Optional. Include all languages.
     * @type {boolean}
     * @memberof RemoteImageApiGetRemoteImages
     */
    readonly includeAllLanguages?: boolean
}

/**
 * RemoteImageApi - object-oriented interface
 * @export
 * @class RemoteImageApi
 * @extends {BaseAPI}
 */
export class RemoteImageApi extends BaseAPI {
    /**
     * 
     * @summary Downloads a remote image for an item.
     * @param {RemoteImageApiDownloadRemoteImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public downloadRemoteImage(requestParameters: RemoteImageApiDownloadRemoteImageRequest, options?: any) {
        return RemoteImageApiFp(this.configuration).downloadRemoteImage(requestParameters.itemId, requestParameters.type, requestParameters.imageUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available remote image providers for an item.
     * @param {RemoteImageApiGetRemoteImageProvidersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public getRemoteImageProviders(requestParameters: RemoteImageApiGetRemoteImageProvidersRequest, options?: any) {
        return RemoteImageApiFp(this.configuration).getRemoteImageProviders(requestParameters.itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available remote images for an item.
     * @param {RemoteImageApiGetRemoteImagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public getRemoteImages(requestParameters: RemoteImageApiGetRemoteImagesRequest, options?: any) {
        return RemoteImageApiFp(this.configuration).getRemoteImages(requestParameters.itemId, requestParameters.type, requestParameters.startIndex, requestParameters.limit, requestParameters.providerName, requestParameters.includeAllLanguages, options).then((request) => request(this.axios, this.basePath));
    }
}
