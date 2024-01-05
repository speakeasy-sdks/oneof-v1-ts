/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { ArrayOfModelWithOneofModelsInside } from "./arrayofmodelwithoneofmodelsinside";
import { OneofArrayOrSingleXmlModelWithOptionalWrappingElement } from "./oneofarrayorsinglexmlmodelwithoptionalwrappingelement";
import { OneofArrayXmlModel } from "./oneofarrayxmlmodel";
import { OneofXmlModel } from "./oneofxmlmodel";
import { SimpleXmlModel } from "./simplexmlmodel";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    "https://example.com/api",
    /**
     * http://localhost:3000/body-xml
     */
    "http://localhost:3000/body-xml",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.0.0";
    sdkVersion = "0.12.1";
    genVersion = "2.225.2";
    userAgent = "speakeasy-sdk/typescript 0.12.1 2.225.2 0.0.0 oneOf";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class OneOf {
    public arrayOfModelWithOneofModelsInside: ArrayOfModelWithOneofModelsInside;
    public simpleXmlModel: SimpleXmlModel;
    public oneofArrayOrSingleXmlModelWithOptionalWrappingElement: OneofArrayOrSingleXmlModelWithOptionalWrappingElement;
    public oneofArrayXmlModel: OneofArrayXmlModel;
    public oneofXmlModel: OneofXmlModel;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.arrayOfModelWithOneofModelsInside = new ArrayOfModelWithOneofModelsInside(
            this.sdkConfiguration
        );
        this.simpleXmlModel = new SimpleXmlModel(this.sdkConfiguration);
        this.oneofArrayOrSingleXmlModelWithOptionalWrappingElement =
            new OneofArrayOrSingleXmlModelWithOptionalWrappingElement(this.sdkConfiguration);
        this.oneofArrayXmlModel = new OneofArrayXmlModel(this.sdkConfiguration);
        this.oneofXmlModel = new OneofXmlModel(this.sdkConfiguration);
    }
}
