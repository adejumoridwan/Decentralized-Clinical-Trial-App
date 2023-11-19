import { webcrypto } from "node:crypto";

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

// src/hooks/web5.js

import { Web5 } from "@web5/api";

export async function load({ context }) {
  let web5;
  let myDID;

  ({ web5, did: myDID } = await Web5.connect({
    sync: "5s",
  }));

  return {
    provide: {
      web5,
      myDID,
    },
  };
}
