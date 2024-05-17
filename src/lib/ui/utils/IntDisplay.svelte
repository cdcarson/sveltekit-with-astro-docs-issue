<script lang="ts">
  type P = {
    value: number | bigint | string;
    compact?: boolean;
  };

  let { value, compact = false }: P = $props();
  let formatted = $derived.by(() => {
    const formatter = compact
      ? new Intl.NumberFormat('en-us', {
          compactDisplay: 'short',
          notation: 'compact'
        })
      : new Intl.NumberFormat('en-us');
    return formatter.format(
      typeof value === 'string' ? parseInt(value) : value
    );
  });
</script>

{formatted}