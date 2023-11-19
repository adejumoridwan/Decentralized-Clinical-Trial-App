<!-- src/routes/yourPage.svelte -->

<script context="module" lang="ts">
    import { load } from 'src/routes/+page.server.js';
  
    export const loadContext = load;
  </script>
  
<a>{myDID}</a>