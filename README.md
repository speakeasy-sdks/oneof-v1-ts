# oneOf

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/oneof-v1-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/oneof-v1-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { OneOf } from "oneOf";

(async () => {
    const sdk = new OneOf();

    const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate13();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [.arrayOfModelWithOneofModelsInside](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md)

* [getGenerate13](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#getgenerate13) - Generate1
* [getGenerate4](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#getgenerate4) - Generate
* [postValidate13](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#postvalidate13) - Validate1
* [postValidate4](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#postvalidate4) - Validate

### [.simpleXmlModel](docs/sdks/simplexmlmodel/README.md)

* [generate](docs/sdks/simplexmlmodel/README.md#generate) - Generate
* [generate1](docs/sdks/simplexmlmodel/README.md#generate1) - Generate1
* [validate](docs/sdks/simplexmlmodel/README.md#validate) - Validate
* [validate1](docs/sdks/simplexmlmodel/README.md#validate1) - Validate1

### [.oneofArrayOrSingleXmlModelWithOptionalWrappingElement](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md)

* [generate2](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#generate2) - Generate2
* [getGenerate12](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#getgenerate12) - Generate1
* [getGenerate3](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#getgenerate3) - Generate
* [postValidate12](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#postvalidate12) - Validate1
* [postValidate3](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#postvalidate3) - Validate
* [validate2](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#validate2) - Validate2

### [.oneofArrayXmlModel](docs/sdks/oneofarrayxmlmodel/README.md)

* [getGenerate11](docs/sdks/oneofarrayxmlmodel/README.md#getgenerate11) - Generate1
* [getGenerate2](docs/sdks/oneofarrayxmlmodel/README.md#getgenerate2) - Generate
* [postValidate11](docs/sdks/oneofarrayxmlmodel/README.md#postvalidate11) - Validate1
* [postValidate2](docs/sdks/oneofarrayxmlmodel/README.md#postvalidate2) - Validate

### [.oneofXmlModel](docs/sdks/oneofxmlmodel/README.md)

* [getGenerate](docs/sdks/oneofxmlmodel/README.md#getgenerate) - Generate
* [getGenerate1](docs/sdks/oneofxmlmodel/README.md#getgenerate1) - Generate1
* [postValidate](docs/sdks/oneofxmlmodel/README.md#postvalidate) - Validate
* [postValidate1](docs/sdks/oneofxmlmodel/README.md#postvalidate1) - Validate1
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://example.com/api` | None |
| 1 | `http://localhost:3000/body-xml` | None |

For example:

```typescript
import { OneOf } from "oneOf";

(async () => {
    const sdk = new OneOf({
        serverIdx: 1,
    });

    const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate13();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { OneOf } from "oneOf";

(async () => {
    const sdk = new OneOf({
        serverURL: "https://example.com/api",
    });

    const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate13();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from oneOf import OneOf;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new OneOf({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
