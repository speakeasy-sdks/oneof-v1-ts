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
import { GetGenerate13Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.arrayOfModelWithOneofModelsInside.getGenerate13().then((res: GetGenerate13Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ArrayOfModelWithOneofModelsInside](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md)

* [getGenerate13](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#getgenerate13) - Generate1
* [getGenerate4](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#getgenerate4) - Generate
* [postValidate13](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#postvalidate13) - Validate1
* [postValidate4](docs/sdks/arrayofmodelwithoneofmodelsinside/README.md#postvalidate4) - Validate

### [OneofArrayXmlModel](docs/sdks/oneofarrayxmlmodel/README.md)

* [getGenerate11](docs/sdks/oneofarrayxmlmodel/README.md#getgenerate11) - Generate1
* [getGenerate2](docs/sdks/oneofarrayxmlmodel/README.md#getgenerate2) - Generate
* [postValidate11](docs/sdks/oneofarrayxmlmodel/README.md#postvalidate11) - Validate1
* [postValidate2](docs/sdks/oneofarrayxmlmodel/README.md#postvalidate2) - Validate

### [OneofArrayOrSingleXmlModelWithOptionalWrappingElement](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md)

* [generate2](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#generate2) - Generate2
* [getGenerate12](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#getgenerate12) - Generate1
* [getGenerate3](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#getgenerate3) - Generate
* [postValidate12](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#postvalidate12) - Validate1
* [postValidate3](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#postvalidate3) - Validate
* [validate2](docs/sdks/oneofarrayorsinglexmlmodelwithoptionalwrappingelement/README.md#validate2) - Validate2

### [OneofXmlModel](docs/sdks/oneofxmlmodel/README.md)

* [getGenerate](docs/sdks/oneofxmlmodel/README.md#getgenerate) - Generate
* [getGenerate1](docs/sdks/oneofxmlmodel/README.md#getgenerate1) - Generate1
* [postValidate](docs/sdks/oneofxmlmodel/README.md#postvalidate) - Validate
* [postValidate1](docs/sdks/oneofxmlmodel/README.md#postvalidate1) - Validate1

### [SimpleXmlModel](docs/sdks/simplexmlmodel/README.md)

* [generate](docs/sdks/simplexmlmodel/README.md#generate) - Generate
* [generate1](docs/sdks/simplexmlmodel/README.md#generate1) - Generate1
* [validate](docs/sdks/simplexmlmodel/README.md#validate) - Validate
* [validate1](docs/sdks/simplexmlmodel/README.md#validate1) - Validate1
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

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
