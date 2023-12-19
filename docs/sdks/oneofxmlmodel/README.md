# OneofXmlModel
(*oneofXmlModel*)

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

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofXmlModel.getGenerate();

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

**Promise<[operations.GetGenerateResponse](../../sdk/models/operations/getgenerateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getGenerate1

This endpoint returns a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofXmlModel.getGenerate1();

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

**Promise<[operations.GetGenerate1Response](../../sdk/models/operations/getgenerate1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postValidate

This endpoint expects a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofXmlModel.postValidate(new TextEncoder().encode("0xcf557fcA6a"));

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

**Promise<[operations.PostValidateResponse](../../sdk/models/operations/postvalidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postValidate1

This endpoint expects a 'CatOrDog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

async function run() {
  const sdk = new OneOf();

  const res = await sdk.oneofXmlModel.postValidate1(new TextEncoder().encode("0xfc648e7E3F"));

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

**Promise<[operations.PostValidate1Response](../../sdk/models/operations/postvalidate1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
