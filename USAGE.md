<!-- Start SDK Example Usage -->


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
<!-- End SDK Example Usage -->