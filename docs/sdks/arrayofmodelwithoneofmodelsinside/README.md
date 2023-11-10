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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate13();

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

**Promise<[operations.GetGenerate13Response](../../sdk/models/operations/getgenerate13response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getGenerate4

This endpoint returns a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

(async() => {
  const sdk = new OneOf();

  const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate4();

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

**Promise<[operations.GetGenerate4Response](../../sdk/models/operations/getgenerate4response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postValidate13

This endpoint expects a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

(async() => {
  const sdk = new OneOf();

  const res = await sdk.arrayOfModelWithOneofModelsInside.postValidate13(new TextEncoder().encode("0xDd9028aE08"));

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostValidate13Response](../../sdk/models/operations/postvalidate13response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postValidate4

This endpoint expects a 'ArrayOfCatOrDogObjects' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

(async() => {
  const sdk = new OneOf();

  const res = await sdk.arrayOfModelWithOneofModelsInside.postValidate4(new TextEncoder().encode("0x74d81dbA30"));

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostValidate4Response](../../sdk/models/operations/postvalidate4response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
