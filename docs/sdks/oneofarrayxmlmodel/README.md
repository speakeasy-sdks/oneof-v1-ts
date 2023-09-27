# OneofArrayXmlModel
(*oneofArrayXmlModel*)

### Available Operations

* [getGenerate11](#getgenerate11) - Generate1
* [getGenerate2](#getgenerate2) - Generate
* [postValidate11](#postvalidate11) - Validate1
* [postValidate2](#postvalidate2) - Validate

## getGenerate11

This endpoint returns a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerate11Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayXmlModel.getGenerate11().then((res: GetGenerate11Response) => {
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

**Promise<[operations.GetGenerate11Response](../../models/operations/getgenerate11response.md)>**


## getGenerate2

This endpoint returns a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerate2Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayXmlModel.getGenerate2().then((res: GetGenerate2Response) => {
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

**Promise<[operations.GetGenerate2Response](../../models/operations/getgenerate2response.md)>**


## postValidate11

This endpoint expects a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate11Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayXmlModel.postValidate11("distinctio".encode()).then((res: PostValidate11Response) => {
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

**Promise<[operations.PostValidate11Response](../../models/operations/postvalidate11response.md)>**


## postValidate2

This endpoint expects a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate2Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayXmlModel.postValidate2("quibusdam".encode()).then((res: PostValidate2Response) => {
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

**Promise<[operations.PostValidate2Response](../../models/operations/postvalidate2response.md)>**

