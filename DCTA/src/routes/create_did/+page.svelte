<script>
  import { webcrypto } from "node:crypto";
  import { onMount } from "svelte";

  if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
  }

  import { Web5 } from "@web5/api";

  let userDid;

  onMount(async () => {
    const { web5, did: userDid } = await Web5.connect();
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userDID);
      alert("DID copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy DID to clipboard", err);
    }
  };
</script>

<main>
  <h1>Your User DID</h1>
  {#if userDid}
    <p>{userDid}</p>
    <button on:click={copyToClipboard}>Copy DID</button>
  {/if}
</main>
