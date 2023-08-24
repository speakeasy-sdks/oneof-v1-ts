# simpleXmlModel

### Available Operations

* [generate](#generate) - Generate
* [generate1](#generate1) - Generate1
* [validate](#validate) - Validate
* [validate1](#validate1) - Validate1

## generate

 This endpoint returns a cat model in xml

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GenerateResponse } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.simpleXmlModel.generate().then((res: GenerateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GenerateResponse](../../models/operations/generateresponse.md)>**


## generate1

This endpoint returns a 'Dog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { Generate1Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.simpleXmlModel.generate1().then((res: Generate1Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.Generate1Response](../../models/operations/generate1response.md)>**


## validate

This endpoint expects a 'Cat' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { ValidateResponse } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.simpleXmlModel.validate("error".encode()).then((res: ValidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateResponse](../../models/operations/validateresponse.md)>**


## validate1

This endpoint expects a 'Dog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { Validate1Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.simpleXmlModel.validate1("deserunt".encode()).then((res: Validate1Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.Validate1Response](../../models/operations/validate1response.md)>**

