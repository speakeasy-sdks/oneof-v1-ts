# oneofXmlModel

### Available Operations

* [getGenerate](#getgenerate) - Generate
* [getGenerate1](#getgenerate1) - Generate1
* [postValidate](#postvalidate) - Validate
* [postValidate1](#postvalidate1) - Validate1

## getGenerate

This endpoint returns a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerateResponse } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofXmlModel.getGenerate().then((res: GetGenerateResponse) => {
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

**Promise<[operations.GetGenerateResponse](../../models/operations/getgenerateresponse.md)>**


## getGenerate1

This endpoint returns a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerate1Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofXmlModel.getGenerate1().then((res: GetGenerate1Response) => {
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

**Promise<[operations.GetGenerate1Response](../../models/operations/getgenerate1response.md)>**


## postValidate

This endpoint expects a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidateResponse } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofXmlModel.postValidate("illum".encode()).then((res: PostValidateResponse) => {
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

**Promise<[operations.PostValidateResponse](../../models/operations/postvalidateresponse.md)>**


## postValidate1

This endpoint expects a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate1Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofXmlModel.postValidate1("vel".encode()).then((res: PostValidate1Response) => {
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

**Promise<[operations.PostValidate1Response](../../models/operations/postvalidate1response.md)>**

