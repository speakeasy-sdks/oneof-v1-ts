<!-- Start SDK Example Usage -->


```typescript
import { OneOf } from "oneOf";

(async () => {
    const sdk = new OneOf();

    const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate13();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->