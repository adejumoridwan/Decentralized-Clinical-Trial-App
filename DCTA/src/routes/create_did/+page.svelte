<script>
  import { onMount } from "svelte";
  import { Web5 } from "@web5/api/browser";

  let userDID;
  let isLoading = true;

  const loadUserDID = async () => {
    try {
      // Simulate a 20-second delay
      await new Promise((resolve) => setTimeout(resolve, 100));

      const { web5, did: loadedUserDid } = await Web5.connect();
      console.log("Connected to Web5:", web5);
      console.log("User DID:", loadedUserDid);
      userDID = loadedUserDid;
    } catch (error) {
      console.error("Error loading DID", error);
    } finally {
      isLoading = false;
    }
  };

  onMount(loadUserDID);

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
  {#if isLoading}
    <p>Loading...</p>
  {:else}
    <button type="button" class="btn btn-primary" on:click={copyToClipboard}
      >Copy DID</button
    >
  {/if}
</main>
