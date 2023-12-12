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

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayXmlModel.getGenerate11();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGenerate11Response](../../sdk/models/operations/getgenerate11response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getGenerate2

This endpoint returns a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayXmlModel.getGenerate2();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGenerate2Response](../../sdk/models/operations/getgenerate2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postValidate11

This endpoint expects a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayXmlModel.postValidate11(new TextEncoder().encode("0xd30B1A5d8E"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostValidate11Response](../../sdk/models/operations/postvalidate11response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postValidate2

This endpoint expects a 'CatsOrDogs' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayXmlModel.postValidate2(new TextEncoder().encode("0xC036A4f80F"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostValidate2Response](../../sdk/models/operations/postvalidate2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
