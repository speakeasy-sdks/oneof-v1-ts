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

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.generate2();

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

**Promise<[operations.Generate2Response](../../sdk/models/operations/generate2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getGenerate12

This endpoint returns a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.getGenerate12();

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

**Promise<[operations.GetGenerate12Response](../../sdk/models/operations/getgenerate12response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getGenerate3

This endpoint returns a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.getGenerate3();

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

**Promise<[operations.GetGenerate3Response](../../sdk/models/operations/getgenerate3response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postValidate12

This endpoint expects a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.postValidate12(new TextEncoder().encode("0xf9361EfF98"));

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

**Promise<[operations.PostValidate12Response](../../sdk/models/operations/postvalidate12response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postValidate3

This endpoint expects a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.postValidate3(new TextEncoder().encode("0xcE70FDb90d"));

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

**Promise<[operations.PostValidate3Response](../../sdk/models/operations/postvalidate3response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## validate2

This endpoint expects a 'CatsOrADogOrWolves' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofArrayOrSingleXmlModelWithOptionalWrappingElement.validate2(new TextEncoder().encode("0x9f52AfDFcE"));

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

**Promise<[operations.Validate2Response](../../sdk/models/operations/validate2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
