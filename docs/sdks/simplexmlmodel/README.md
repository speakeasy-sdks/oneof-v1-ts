# SimpleXmlModel
(*simpleXmlModel*)

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

(async() => {
  const sdk = new OneOf();

  const res = await sdk.simpleXmlModel.generate();

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

**Promise<[operations.GenerateResponse](../../sdk/models/operations/generateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## generate1

This endpoint returns a 'Dog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

(async() => {
  const sdk = new OneOf();

  const res = await sdk.simpleXmlModel.generate1();

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

**Promise<[operations.Generate1Response](../../sdk/models/operations/generate1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## validate

This endpoint expects a 'Cat' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

(async() => {
  const sdk = new OneOf();

  const res = await sdk.simpleXmlModel.validate(new TextEncoder().encode("0xd6BB5B71e0"));

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

**Promise<[operations.ValidateResponse](../../sdk/models/operations/validateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## validate1

This endpoint expects a 'Dog' model as xml.

### Example Usage

```typescript
import { OneOf } from "oneOf";

(async() => {
  const sdk = new OneOf();

  const res = await sdk.simpleXmlModel.validate1(new TextEncoder().encode("0xb1A694c3A3"));

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

**Promise<[operations.Validate1Response](../../sdk/models/operations/validate1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
