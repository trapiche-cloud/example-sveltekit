<script>
  import { enhance } from '$app/forms'

  let { data, form } = $props()
  let count = $derived(form?.count ?? data.count)
</script>

<div style="font-family:system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#0f0f0f;color:#fff;gap:2rem;">
  <h1 style="font-size:1.25rem;opacity:0.5;letter-spacing:0.05em;text-transform:uppercase;">SvelteKit on Trapiche</h1>
  <div style="font-size:6rem;font-weight:700;line-height:1;">{count}</div>
  <div style="display:flex;gap:1rem;">
    <form method="post" action="?/decrement" use:enhance>
      <button style="padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#333;color:#fff;">−</button>
    </form>
    <form method="post" action="?/increment" use:enhance>
      <button style="padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#6366f1;color:#fff;">+</button>
    </form>
  </div>
  <span style="font-size:0.75rem;opacity:0.35;">server-side counter · adapter-node</span>
</div>
