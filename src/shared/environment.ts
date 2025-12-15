import { createEnv } from "@t3-oss/env-core";
import process from "process";
import { z as zod } from "zod";

export default createEnv({
    client: {
        NEXT_PUBLIC_BOOKING_URL: zod.url().optional(),
    },
    clientPrefix: "NEXT_PUBLIC",
    emptyStringAsUndefined: true,
    runtimeEnv: process.env,
});
