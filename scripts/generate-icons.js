// PWA Icon Placeholder Generator
// This creates a simple SVG-based icon for the PWA
// In production, replace with proper high-quality PNG icons

const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Simple SVG template for Elysium Equine icon
const generateSVG = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="#059669"/>
  
  <!-- Horse silhouette (simplified) -->
  <g transform="translate(${size / 2}, ${size / 2})">
    <path d="M -${size * 0.25} -${size * 0.15} 
             Q -${size * 0.2} -${size * 0.25} -${size * 0.1} -${size * 0.2}
             L 0 -${size * 0.15}
             L ${size * 0.15} -${size * 0.1}
             Q ${size * 0.2} 0 ${size * 0.15} ${size * 0.1}
             L ${size * 0.05} ${size * 0.25}
             L -${size * 0.05} ${size * 0.25}
             L -${size * 0.15} ${size * 0.15}
             Q -${size * 0.25} ${size * 0.05} -${size * 0.25} -${size * 0.15}
             Z" 
          fill="#FCD34D" stroke="#000000" stroke-width="2"/>
  </g>
  
  <!-- Text -->
  <text x="${size / 2}" y="${size * 0.85}" 
        font-family="Arial, sans-serif" 
        font-size="${size * 0.12}" 
        font-weight="bold" 
        fill="#FCD34D" 
        text-anchor="middle">EE</text>
</svg>`;

// Generate SVG files for each size
sizes.forEach(size => {
  const svgContent = generateSVG(size);
  const filePath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated: icon-${size}x${size}.svg`);
});

// Create a README for icon replacement
const readmeContent = `# PWA Icons

## Current Status
These are placeholder SVG icons for development purposes.

## Production Replacement
For production, replace these SVG files with high-quality PNG icons:

${sizes.map(size => `- icon-${size}x${size}.png`).join('\n')}

## Recommended Tools
- Use a graphic designer or tools like Figma/Adobe Illustrator
- Or use online generators like:
  - https://realfavicongenerator.net/
  - https://www.pwabuilder.com/imageGenerator
  
## Icon Design Guidelines
- Use the Elysium Equine logo or horse imagery
- Background: Emerald green (#059669)
- Accent: Amber (#FCD34D)
- Ensure good contrast for different backgrounds
- Test on both light and dark device themes
`;

fs.writeFileSync(path.join(iconsDir, 'README.md'), readmeContent);
console.log('\nGenerated README.md with instructions for production icons');
console.log('\n✅ All placeholder icons generated successfully!');
