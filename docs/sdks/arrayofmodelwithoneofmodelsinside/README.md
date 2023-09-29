# ArrayOfModelWithOneofModelsInside
(*arrayOfModelWithOneofModelsInside*)

### Available Operations

* [getGenerate13](#getgenerate13) - Generate1
* [getGenerate4](#getgenerate4) - Generate
* [postValidate13](#postvalidate13) - Validate1
* [postValidate4](#postvalidate4) - Validate

## getGenerate13

This endpoint returns a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGenerate13Response](../../models/operations/getgenerate13response.md)>**


## getGenerate4

This endpoint returns a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerate4Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.arrayOfModelWithOneofModelsInside.getGenerate4().then((res: GetGenerate4Response) => {
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

**Promise<[operations.GetGenerate4Response](../../models/operations/getgenerate4response.md)>**


## postValidate13

This endpoint expects a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate13Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.arrayOfModelWithOneofModelsInside.postValidate13("rXJ#*DNx!F" as bytes <<<>>>).then((res: PostValidate13Response) => {
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

**Promise<[operations.PostValidate13Response](../../models/operations/postvalidate13response.md)>**


## postValidate4

This endpoint expects a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate4Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.arrayOfModelWithOneofModelsInside.postValidate4("?4XB(ZSf0!" as bytes <<<>>>).then((res: PostValidate4Response) => {
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

**Promise<[operations.PostValidate4Response](../../models/operations/postvalidate4response.md)>**

