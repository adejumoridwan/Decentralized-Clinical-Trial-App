<script>
  import { webcrypto } from "node:crypto";
  import { onMount } from "svelte";

  if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
  }

  import { Web5 } from "@web5/api";

  let userDID;

  onMount(async () => {
    const { web5, did: userDid } = await Web5.connect();
    userDID = userDid
    console.log(userDID)
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
  {#if userDID}
    <p>{userDID}</p>
    <button on:click={copyToClipboard}>Copy DID</button>
  {/if}
</main>
