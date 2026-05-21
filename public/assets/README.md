# Image assets

Drop the centerpiece illustration here:

```
public/assets/couple.png
```

Recommended:
- A PNG with transparent background (so the arch + temple decorations behind it show through)
- ~800 × 1000 px is plenty; the hero scales it down
- The reference design uses an illustrated bride & groom, optionally with a small temple/garden base

The path is set in [src/lib/config.ts](../../src/lib/config.ts) as `coupleImage`. If the file is missing, the hero falls back to a built-in SVG silhouette so the site still renders.
