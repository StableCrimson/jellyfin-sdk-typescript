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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DeviceInfo } from '../models';
// @ts-ignore
import { DeviceInfoQueryResult } from '../models';
// @ts-ignore
import { DeviceOptions } from '../models';
// @ts-ignore
import { DeviceOptionsDto } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * DevicesApi - axios parameter creator
 * @export
 */
export const DevicesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteDevice', 'id', id)
            const localVarPath = `/Devices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get info for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceInfo: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDeviceInfo', 'id', id)
            const localVarPath = `/Devices/Info`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get options for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceOptions: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDeviceOptions', 'id', id)
            const localVarPath = `/Devices/Options`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Devices.
         * @param {boolean} [supportsSync] Gets or sets a value indicating whether [supports synchronize].
         * @param {string} [userId] Gets or sets the user identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices: async (supportsSync?: boolean, userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Devices`;
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

            if (supportsSync !== undefined) {
                localVarQueryParameter['supportsSync'] = supportsSync;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update device options.
         * @param {string} id Device Id.
         * @param {DeviceOptionsDto} deviceOptionsDto Device Options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDeviceOptions: async (id: string, deviceOptionsDto: DeviceOptionsDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateDeviceOptions', 'id', id)
            // verify required parameter 'deviceOptionsDto' is not null or undefined
            assertParamExists('updateDeviceOptions', 'deviceOptionsDto', deviceOptionsDto)
            const localVarPath = `/Devices/Options`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deviceOptionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DevicesApi - functional programming interface
 * @export
 */
export const DevicesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DevicesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDevice(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDevice(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get info for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeviceInfo(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeviceInfo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get options for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeviceOptions(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceOptions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeviceOptions(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Devices.
         * @param {boolean} [supportsSync] Gets or sets a value indicating whether [supports synchronize].
         * @param {string} [userId] Gets or sets the user identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevices(supportsSync?: boolean, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceInfoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDevices(supportsSync, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update device options.
         * @param {string} id Device Id.
         * @param {DeviceOptionsDto} deviceOptionsDto Device Options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDeviceOptions(id: string, deviceOptionsDto: DeviceOptionsDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDeviceOptions(id, deviceOptionsDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DevicesApi - factory interface
 * @export
 */
export const DevicesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DevicesApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteDevice(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get info for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceInfo(id: string, options?: any): AxiosPromise<DeviceInfo> {
            return localVarFp.getDeviceInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get options for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceOptions(id: string, options?: any): AxiosPromise<DeviceOptions> {
            return localVarFp.getDeviceOptions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Devices.
         * @param {boolean} [supportsSync] Gets or sets a value indicating whether [supports synchronize].
         * @param {string} [userId] Gets or sets the user identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices(supportsSync?: boolean, userId?: string, options?: any): AxiosPromise<DeviceInfoQueryResult> {
            return localVarFp.getDevices(supportsSync, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update device options.
         * @param {string} id Device Id.
         * @param {DeviceOptionsDto} deviceOptionsDto Device Options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDeviceOptions(id: string, deviceOptionsDto: DeviceOptionsDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateDeviceOptions(id, deviceOptionsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteDevice operation in DevicesApi.
 * @export
 * @interface DevicesApiDeleteDeviceRequest
 */
export interface DevicesApiDeleteDeviceRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiDeleteDevice
     */
    readonly id: string
}

/**
 * Request parameters for getDeviceInfo operation in DevicesApi.
 * @export
 * @interface DevicesApiGetDeviceInfoRequest
 */
export interface DevicesApiGetDeviceInfoRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiGetDeviceInfo
     */
    readonly id: string
}

/**
 * Request parameters for getDeviceOptions operation in DevicesApi.
 * @export
 * @interface DevicesApiGetDeviceOptionsRequest
 */
export interface DevicesApiGetDeviceOptionsRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiGetDeviceOptions
     */
    readonly id: string
}

/**
 * Request parameters for getDevices operation in DevicesApi.
 * @export
 * @interface DevicesApiGetDevicesRequest
 */
export interface DevicesApiGetDevicesRequest {
    /**
     * Gets or sets a value indicating whether [supports synchronize].
     * @type {boolean}
     * @memberof DevicesApiGetDevices
     */
    readonly supportsSync?: boolean

    /**
     * Gets or sets the user identifier.
     * @type {string}
     * @memberof DevicesApiGetDevices
     */
    readonly userId?: string
}

/**
 * Request parameters for updateDeviceOptions operation in DevicesApi.
 * @export
 * @interface DevicesApiUpdateDeviceOptionsRequest
 */
export interface DevicesApiUpdateDeviceOptionsRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiUpdateDeviceOptions
     */
    readonly id: string

    /**
     * Device Options.
     * @type {DeviceOptionsDto}
     * @memberof DevicesApiUpdateDeviceOptions
     */
    readonly deviceOptionsDto: DeviceOptionsDto
}

/**
 * DevicesApi - object-oriented interface
 * @export
 * @class DevicesApi
 * @extends {BaseAPI}
 */
export class DevicesApi extends BaseAPI {
    /**
     * 
     * @summary Deletes a device.
     * @param {DevicesApiDeleteDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public deleteDevice(requestParameters: DevicesApiDeleteDeviceRequest, options?: AxiosRequestConfig) {
        return DevicesApiFp(this.configuration).deleteDevice(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get info for a device.
     * @param {DevicesApiGetDeviceInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDeviceInfo(requestParameters: DevicesApiGetDeviceInfoRequest, options?: AxiosRequestConfig) {
        return DevicesApiFp(this.configuration).getDeviceInfo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get options for a device.
     * @param {DevicesApiGetDeviceOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDeviceOptions(requestParameters: DevicesApiGetDeviceOptionsRequest, options?: AxiosRequestConfig) {
        return DevicesApiFp(this.configuration).getDeviceOptions(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Devices.
     * @param {DevicesApiGetDevicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDevices(requestParameters: DevicesApiGetDevicesRequest = {}, options?: AxiosRequestConfig) {
        return DevicesApiFp(this.configuration).getDevices(requestParameters.supportsSync, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update device options.
     * @param {DevicesApiUpdateDeviceOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public updateDeviceOptions(requestParameters: DevicesApiUpdateDeviceOptionsRequest, options?: AxiosRequestConfig) {
        return DevicesApiFp(this.configuration).updateDeviceOptions(requestParameters.id, requestParameters.deviceOptionsDto, options).then((request) => request(this.axios, this.basePath));
    }
}
