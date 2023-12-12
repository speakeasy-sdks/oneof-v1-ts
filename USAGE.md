<!-- Start SDK Example Usage [usage] -->
```typescript
import { OneOf } from "oneOf";

async function run() {
    const sdk = new OneOf();

    const res = await sdk.arrayOfModelWithOneofModelsInside.getGenerate13();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->