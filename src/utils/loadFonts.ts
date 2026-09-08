// Utility to dynamically load Flama fonts from base64 text files
import flamaSemiboldBase64 from '../imports/pasted_text/flama-semibold-font.txt?raw';
import flamaBoldBase64 from '../imports/pasted_text/font-license.txt?raw';

async function loadFontFromBase64(base64Data: string, fontFamily: string, fontWeight: number) {
  try {
    // Create a data URL from the base64 string
    const fontFace = new FontFace(
      fontFamily,
      `url(data:font/opentype;base64,${base64Data.trim()})`,
      { weight: fontWeight.toString(), style: 'normal' }
    );
    
    await fontFace.load();
    document.fonts.add(fontFace);
    
    console.log(`✓ Loaded ${fontFamily} weight ${fontWeight}`);
  } catch (error) {
    console.error(`Failed to load ${fontFamily} weight ${fontWeight}:`, error);
  }
}

export async function loadFlamaFonts() {
  await Promise.all([
    loadFontFromBase64(flamaSemiboldBase64, 'Flama', 600),
    loadFontFromBase64(flamaBoldBase64, 'Flama', 700)
  ]);
}