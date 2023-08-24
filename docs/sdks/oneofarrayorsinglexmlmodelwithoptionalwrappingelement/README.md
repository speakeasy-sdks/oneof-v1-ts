# oneofArrayOrSingleXmlModelWithOptionalWrappingElement

### Available Operations

* [generate2](#generate2) - Generate2
* [getGenerate12](#getgenerate12) - Generate1
* [getGenerate3](#getgenerate3) - Generate
* [postValidate12](#postvalidate12) - Validate1
* [postValidate3](#postvalidate3) - Validate
* [validate2](#validate2) - Validate2

## generate2

This endpoint returns a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { Generate2Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.generate2().then((res: Generate2Response) => {
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

**Promise<[operations.Generate2Response](../../models/operations/generate2response.md)>**


## getGenerate12

This endpoint returns a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerate12Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.getGenerate12().then((res: GetGenerate12Response) => {
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

**Promise<[operations.GetGenerate12Response](../../models/operations/getgenerate12response.md)>**


## getGenerate3

This endpoint returns a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { GetGenerate3Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.getGenerate3().then((res: GetGenerate3Response) => {
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

**Promise<[operations.GetGenerate3Response](../../models/operations/getgenerate3response.md)>**


## postValidate12

This endpoint expects a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate12Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.postValidate12("unde".encode()).then((res: PostValidate12Response) => {
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

**Promise<[operations.PostValidate12Response](../../models/operations/postvalidate12response.md)>**


## postValidate3

This endpoint expects a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { PostValidate3Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.postValidate3("nulla".encode()).then((res: PostValidate3Response) => {
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

**Promise<[operations.PostValidate3Response](../../models/operations/postvalidate3response.md)>**


## validate2

This endpoint expects a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";
import { Validate2Response } from "oneOf/dist/sdk/models/operations";

const sdk = new OneOf();

sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.validate2("corrupti".encode()).then((res: Validate2Response) => {
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

**Promise<[operations.Validate2Response](../../models/operations/validate2response.md)>**

