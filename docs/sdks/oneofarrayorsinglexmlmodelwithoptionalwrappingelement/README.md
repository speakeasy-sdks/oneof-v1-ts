# OneofArrayOrSingleXmlModelWithOptionalWrappingElement
(*oneofArrayOrSingleXmlModelWithOptionalWrappingElement*)

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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.generate2();

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.getGenerate12();

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.getGenerate3();

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.postValidate12("dG.=%vb}GD" as bytes <<<>>>);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.postValidate3("Sw@\"}sPH!\" as bytes <<<>>>);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.validate2("Kb8,gas|Ww" as bytes <<<>>>);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.Validate2Response](../../models/operations/validate2response.md)>**

