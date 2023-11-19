import { webcrypto } from "node:crypto";

if (!globalThis.crypto) globalThis.crypto = webcrypto;

import { Web5 } from "@web5/api";
const { web5, did: userDID } = await Web5.connect();

console.log(userDID);
