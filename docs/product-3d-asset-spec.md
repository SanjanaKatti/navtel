# Product 3D Asset Handoff Spec

Use this guide for designer/3D artist delivery for product hero visuals.

## Phase 1 (Pseudo-3D from 2D assets)

Deliver per product:

1. `base` cutout image (transparent background)
2. `shadow` pass (soft, transparent PNG/WebP)
3. Optional `highlight` pass
4. Optional angle variants (`left20`, `right20`, `top10`, `bottom10`)

### File format and size

- Preferred format: `webp` (use `png` only when alpha quality needs it)
- Standard size: `1600x1200`
- High density size: `2400x1800`
- Color profile: `sRGB`
- Background: transparent only

### Naming convention

Use lowercase and hyphen-separated names:

- `product-{slug}-base-1600.webp`
- `product-{slug}-base-2400.webp`
- `product-{slug}-shadow-1600.webp`
- `product-{slug}-shadow-2400.webp`
- `product-{slug}-highlight-1600.webp`
- `product-{slug}-left20-1600.webp`
- `product-{slug}-right20-1600.webp`
- `product-{slug}-top10-1600.webp`
- `product-{slug}-bottom10-1600.webp`

Example for S-2010:

- `product-s-2010-base-1600.webp`
- `product-s-2010-shadow-1600.webp`

## Phase 2 (True 3D model)

Deliver per product:

1. `GLB` model (`.glb`) centered at origin
2. PBR textures: base color, normal, roughness/metallic, AO
3. One poster fallback image

### 3D quality targets

- Up-axis: `Y`
- Scale: real-world, normalized
- Triangle budget: `40k-120k` per model
- Texture size: `2K` default, `4K` only for flagship hero models

### Naming convention

- `product-{slug}.glb`
- `product-{slug}-poster-2400.webp`
- `product-{slug}-basecolor-2k.webp`
- `product-{slug}-normal-2k.webp`
- `product-{slug}-orm-2k.webp`

## Delivery checklist

- Verify transparent edges (no halo artifacts)
- Confirm no baked background
- Keep consistent object orientation across products
- Ensure posters match web hero lighting direction
