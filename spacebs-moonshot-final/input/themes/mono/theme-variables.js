/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function (params) {
  let fontParams = {
    'system-ui': {
      name: 'SystemUI',
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    aleo: {
      name: 'Aleo',
      family: '\'Aleo\', serif',
      weight: '100 900'
    },
    andadapro: {
      name: 'Andada Pro',
      family: '\'Andada Pro\', serif',
      weight: '400 840'
    },
    besley: {
      name: 'Besley',
      family: '\'Besley\', serif',
      weight: '400 900'
    },
    bitter: {
      name: 'Bitter',
      family: '\'Bitter\', serif',
      weight: '100 900'
    },
    brygada1918: {
      name: 'Brygada 1918',
      family: '\'Brygada 1918\', serif',
      weight: '400 700'
    },
    domine: {
      name: 'Domine',
      family: '\'Domine\', serif',
      weight: '400 700'
    },
    faustina: {
      name: 'Faustina',
      family: '\'Faustina\', serif',
      weight: '300 800'
    },
    frankruhllibre: {
      name: 'Frank Ruhl Libre',
      family: '\'Frank Ruhl Libre\', serif',
      weight: '300 900'
    },
    imbue: {
      name: 'Imbue',
      family: '\'Imbue\', serif',
      weight: '100 900'
    },
    kreon: {
      name: 'Kreon',
      family: '\'Kreon\', serif',
      weight: '300 700'
    },
    labrada: {
      name: 'Labrada',
      family: '\'Labrada\', serif',
      weight: '100 900'
    },
    lora: {
      name: 'Lora',
      family: '\'Lora\', serif',
      weight: '400 700'
    },
    manuale: {
      name: 'Manuale',
      family: '\'Manuale\', serif',
      weight: '300 800'
    },
    petrona: {
      name: 'Petrona',
      family: '\'Petrona\', serif',
      weight: '100 900'
    },
    playfairdisplay: {
      name: 'Playfair Display',
      family: '\'Playfair Display\', serif',
      weight: '400 900'
    },
    robotoslab: {
      name: 'Roboto Slab',
      family: '\'Roboto Slab\', serif',
      weight: '100 900'
    },
    rokkitt: {
      name: 'Rokkitt',
      family: '\'Rokkitt\', serif',
      weight: '100 900'
    },
    yrsa: {
      name: 'Yrsa',
      family: '\'Yrsa\', serif',
      weight: '300 700'
    },

    adventpro: {
      name: 'Advent Pro',
      family: '\'Advent Pro\', sans-serif',
      weight: '100 900'
    },
    antonio: {
      name: 'Antonio',
      family: '\'Antonio\', sans-serif',
      weight: '100 700'
    },
    archivonarrow: {
      name: 'Archivo Narrow',
      family: '\'Archivo Narrow\', sans-serif',
      weight: '400 700'
    },
    asap: {
      name: 'Asap',
      family: '\'Asap\', sans-serif',
      weight: '400 700'
    },
    assistant: {
      name: 'Assistant',
      family: '\'Assistant\', sans-serif',
      weight: '200 800'
    },
    cabin: {
      name: 'Cabin',
      family: '\'Cabin\', sans-serif',
      weight: '400 700'
    },
    cairo: {
      name: 'Cairo',
      family: '\'Cairo\', sans-serif',
      weight: '200 1000'
    },
    dosis: {
      name: 'Dosis',
      family: '\'Dosis\', sans-serif',
      weight: '200 800'
    },
    exo: {
      name: 'Exo',
      family: '\'Exo\', sans-serif',
      weight: '100 900'
    },
    figtree: {
      name: 'Figtree',
      family: '\'Figtree\', sans-serif',
      weight: '300 900'
    },
    glory: {
      name: 'Glory',
      family: '\'Glory\', sans-serif',
      weight: '100 800'
    },
    heebo: {
      name: 'Heebo',
      family: '\'Heebo\', sans-serif',
      weight: '100 900'
    },
    instrumentsans: {
      name: 'Instrument Sans',
      family: '\'Instrument Sans\', serif',
      weight: '400 700'
    },
    jura: {
      name: 'Jura',
      family: '\'Jura\', sans-serif',
      weight: '300 700'
    },
    karla: {
      name: 'Karla',
      family: '\'Karla\', sans-serif',
      weight: '200 800'
    },
    lexend: {
      name: 'Lexend',
      family: '\'Lexend\', sans-serif',
      weight: '100 900'
    },
    librefranklin: {
      name: 'Libre Franklin',
      family: '\'Libre Franklin\', sans-serif',
      weight: '100 900'
    },
    manrope: {
      name: 'Manrope',
      family: '\'Manrope\', sans-serif',
      weight: '100 900'
    },
    mavenpro: {
      name: 'Maven Pro',
      family: '\'Maven Pro\', sans-serif',
      weight: '400 900'
    },
    merriweathersans: {
      name: 'Merriweather Sans',
      family: '\'Merriweather Sans\', sans-serif',
      weight: '300 800'
    },
    montserrat: {
      name: 'Montserrat',
      family: '\'Montserrat\', sans-serif',
      weight: '100 900'
    },
    nunito: {
      name: 'Nunito',
      family: '\'Nunito\', sans-serif',
      weight: '200 1000'
    },
    orbitron: {
      name: 'Orbitron',
      family: '\'Orbitron\', sans-serif',
      weight: '400 900'
    },
    oswald: {
      name: 'Oswald',
      family: '\'Oswald\', sans-serif',
      weight: '200 700'
    },
    plusjakartasans: {
      name: 'Plus Jakarta Sans',
      family: '\'Plus Jakarta Sans\', sans-serif',
      weight: '200 800'
    },
    publicsans: {
      name: 'Public Sans',
      family: '\'Public Sans\', sans-serif',
      weight: '100 900'
    },
    quicksand: {
      name: 'Quicksand',
      family: '\'Quicksand\', sans-serif',
      weight: '300 700'
    },
    raleway: {
      name: 'Raleway',
      family: '\'Raleway\', sans-serif',
      weight: '100 900'
    },
    redhatdisplay: {
      name: 'Red Hat Display',
      family: '\'Red Hat Display\', sans-serif',
      weight: '300 900'
    },
    robotoflex: {
      name: 'Roboto Flex',
      family: '\'Roboto Flex\', sans-serif',
      weight: '100 900'
    },
    rubik: {
      name: 'Rubik',
      family: '\'Rubik\', sans-serif',
      weight: '300 900'
    },
    ruda: {
      name: 'Ruda',
      family: '\'Ruda\', sans-serif',
      weight: '400 900'
    },
    smoochsans: {
      name: 'Smooch Sans',
      family: '\'Smooch Sans\', sans-serif',
      weight: '100 900'
    },
    spartan: {
      name: 'Spartan',
      family: '\'Spartan\', sans-serif',
      weight: '100 900'
    },
    urbanist: {
      name: 'Urbanist',
      family: '\'Urbanist\', sans-serif',
      weight: '100 900'
    },
    worksans: {
      name: 'Work Sans',
      family: '\'Work Sans\', sans-serif',
      weight: '100 900'
    },
    yanonekaffeesatz: {
      name: 'Yanone Kaffeesatz',
      family: '\'Yanone Kaffeesatz\', sans-serif',
      weight: '200 700'
    },

    bigshouldersdisplay: {
      name: 'Big Shoulders Display',
      family: '\'Big Shoulders Display\', cursive',
      weight: '100 900'
    },
    comfortaa: {
      name: 'Comfortaa',
      family: '\'Comfortaa\', cursive',
      weight: '300 700'
    },
    dancingscript: {
      name: 'Dancing Script',
      family: '\'Dancing Script\', cursive',
      weight: '400 700'
    },
    gluten: {
      name: 'Gluten',
      family: '\'Gluten\', cursive',
      weight: '100 900'
    },
    lemonada: {
      name: 'Lemonada',
      family: '\'Lemonada\', cursive',
      weight: '300 700'
    },

    jetbrainsmono: {
      name: 'JetBrains Mono',
      family: '\'JetBrains Mono\', monospace',
      weight: '100 800'
    },
    redhatmono: {
      name: 'Red Hat Mono',
      family: '\'Red Hat Mono\', monospace',
      weight: '300 700'
    },
    sourcecodepro: {
      name: 'Source Code Pro',
      family: '\'Source Code Pro\', monospace',
      weight: '200 900'
    }
  };
  let fontBodyName = fontParams[params.fontBody]?.name;
  let fontBodyFamily = fontParams[params.fontBody]?.family;
  let fontBodyWeight = fontParams[params.fontBody]?.weight;

  let fontHeadingsName = fontParams[params.fontHeadings]?.name;
  let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
  let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;

  let fontEntryName = fontParams[params.fontEntry]?.name;
  let fontEntryFamily = fontParams[params.fontEntry]?.family;
  let fontEntryWeight = fontParams[params.fontEntry]?.weight;

  if (params.fontMenu === 'system-ui') {
    params.fontMenu = fontParams['system-ui'].family;
  }

  if (params.fontLogo === 'system-ui') {
    params.fontLogo = fontParams['system-ui'].family;
  }

  let output = '';

  let fonts = {
    [params.fontBody]: { name: fontBodyName, weight: fontBodyWeight },
    [params.fontHeadings]: { name: fontHeadingsName, weight: fontHeadingsWeight },
    [params.fontEntry]: { name: fontEntryName, weight: fontEntryWeight }
  };

  let uniqueFonts = new Set();
  [params.fontBody, params.fontHeadings, params.fontEntry].forEach(font => {
    if (font !== 'system-ui') {
      uniqueFonts.add(font);
    }
  });

  uniqueFonts.forEach(font => {
    let fontProperties = fonts[font];
    output += `             
          @font-face {
              font-family: '${fontProperties.name}';
              src: url('../dynamic/fonts/${font}/${font}.woff2') format('woff2 supports variations'),
              url('../dynamic/fonts/${font}/${font}.woff2') format('woff2-variations');
              font-weight: ${fontProperties.weight};
              font-display: swap;
              font-style: normal;
          }
      `;
  });

  // Conversion of HEX to RGB
  function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;

    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }

    return [+(r), +(g), +(b)];
  }

  // Conversion of RGB to HSL
  function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100) + '%', Math.round(l * 100) + '%'];
  }

  // Conversion of RGBA to RGB
  function rgbaToRgb(rgba) {
    const rgbMatch = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!rgbMatch) {
      return null;
    }
    const [r, g, b] = rgbMatch.slice(1);
    return [parseInt(r), parseInt(g), parseInt(b)];
  }

  // Conversion of HSLA to HSL
  function hslaToHsl(hsla) {
    const hslMatch = hsla.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
    if (!hslMatch) {
      return null;
    }
    const [h, s, l] = hslMatch.slice(1);
    return `${h}, ${s}%, ${l}%`;
  }

  // Logic for choosing an accent color
  let accentHSL;
  if (params.accentColor === 'custom') {
    let customColor = params.customAccentColor;

    if (customColor.startsWith('hsla')) {
      accentHSL = hslaToHsl(customColor);
    } else if (customColor.startsWith('rgba')) {
      const rgb = rgbaToRgb(customColor);
      accentHSL = rgbToHsl(...rgb).join(', ');
    } else if (customColor.startsWith('#')) {
      const rgb = hexToRgb(customColor);
      accentHSL = rgbToHsl(...rgb).join(', ');
    } else {
      accentHSL = customColor;
    }
  } else {
    accentHSL = params.accentColor;
  }

  // Fluid base font-size
  const minScreen = 20; // rem
  const maxScreen = 75; // rem
  const screenRange = maxScreen - minScreen;
  const minFontSize = params.minFontSize;
  const maxFontSize = params.maxFontSize;
  const fontSizeRange = maxFontSize - minFontSize;
  const fontSizeValue = `clamp(${minFontSize}rem, ${minFontSize}rem + (${fontSizeRange} * ((100vw - ${minScreen}rem) / ${screenRange})), ${maxFontSize}rem)`;

  output += `    
    :root {
      --page-margin:           ${params.pageMargin};
      --page-width:            ${params.mainColumnWidth};
      --left-bar-width:        auto;
      --right-bar-width:       ${params.rightColumnWidth};
      --entry-width:           ${params.entryWidth}; 
      --featured-image-height: ${params.postFeaturedImageHeight};
      --border-radius:         6px; 
      --transition:            all 0.3s ease-out;
      --baseline:              0.2rem;
      --gallery-gap:           ${params.galleryItemGap}; 
      --pre-height:            ${params.codeMaxHeight}; 
      --font-body:             ${fontBodyFamily};
      --font-heading:          ${fontHeadingsFamily};
      --font-entry:            ${fontEntryFamily};
      --font-logo:             ${params.fontLogo};
      --font-menu:             ${params.fontMenu};
      --font-size:             ${fontSizeValue};
      --font-weight-normal:    ${params.fontBodyWeight}; 
      --font-weight-bold:      ${params.fontBoldWeight}; 
      --line-height:           ${params.lineHeight}; 
      --letter-spacing:        ${params.letterSpacing}em;
      --headings-weight:       ${params.fontHeadignsWeight};
      --headings-transform:    ${params.fontHeadingsTransform};
      --headings-style:        ${params.fontHeadingsStyle};
      --headings-letter-spacing: ${params.fontHeadingsletterSpacing}em;
      --headings-line-height:  ${params.fontHeadingsLineHeight};
      --accent:                ${accentHSL};

`;

  if (params.colorScheme !== 'dark') {
    output += `             
      --yellow: 40, 100%, 64%;
      --blue: 208, 100%, 50%;
      --green: 166, 100%, 34%;
      --red: 334, 100%, 56%;
      --white: #FFFFFF;
      --black: #000000;
      --background: hsla(0, 0%, 100%, 1);
      --background-transparent: hsla(0, 0%, 100%, .85);
      --background-pattern: radial-gradient(rgb(245, 245, 245) 1px, transparent 1px), radial-gradient(rgb(245, 245, 245) 1px, rgba(255, 255, 255, 0) 1px); 
      --accent-light: hsla(${accentHSL}, .8);
      --accent-medium: hsla(${accentHSL}, 1);
      --accent-transparent: hsla(${accentHSL}, .5);
      --color-lighter: hsla(220, 11%, 96%, 1);
      --color-light: hsla(220, 11%, 90%, 1);
      --color-medium: hsla(220, 11%, 85%, 1);
      --color-dark: hsla(220, 11%, 45%, 1);
      --color-darker: hsla(220, 11%, 11%, 1);
    `;
  }

  if (params.colorScheme === 'dark') {
    output += `             
      --yellow: 40, 100%, 64%;
      --blue: 208, 100%, 50%;
      --green: 166, 100%, 34%;
      --red: 334, 100%, 56%;
      --white: #FFFFFF;
      --black: #000000;
      --background: hsla(214, 17%, 8%, 1);
      --background-transparent: hsla(214, 17%, 8%, .85);
      --background-pattern: radial-gradient(rgb(31, 37, 46) 1px, transparent 1px), radial-gradient(rgb(31, 37, 46) 1px, rgba(31, 37, 46, 0) 1px);
      --accent-light: hsla(${accentHSL}, .8);
      --accent-medium: hsla(${accentHSL}, 1);
      --accent-transparent: hsla(${accentHSL}, .5);
      --color-lighter: hsla(220, 11%, 15%, 1);
      --color-light: hsla(220, 11%, 17%, 1);
      --color-medium: hsla(220, 11%, 20%, 1);
      --color-dark: hsla(220, 11%, 60%, 1);
      --color-darker: hsla(220, 11%, 94%, 1);
    `;
  }

  output += `
      }`;

  if (params.colorScheme === 'auto') {
    output += ` 
      @media (prefers-color-scheme: dark) {
        :root {
          --yellow: 40, 100%, 64%;
          --blue: 208, 100%, 50%;
          --green: 166, 100%, 34%;
          --red: 334, 100%, 56%;
          --white: #FFFFFF;
          --black: #000000;
          --background: hsla(214, 17%, 8%, 1);
          --background-transparent: hsla(214, 17%, 8%, .85);
          --background-pattern: radial-gradient(rgb(31, 37, 46) 1px, transparent 1px), radial-gradient(rgb(31, 37, 46) 1px, rgba(31, 37, 46, 0) 1px);
          --accent-light: hsla(${accentHSL}, .8);
          --accent-medium: hsla(${accentHSL}, 1);
          --accent-transparent: hsla(${accentHSL}, .5);
          --color-lighter: hsla(220, 11%, 15%, 1);
          --color-light: hsla(220, 11%, 17%, 1);
          --color-medium: hsla(220, 11%, 20%, 1);
          --color-dark: hsla(220, 11%, 60%, 1);
          --color-darker: hsla(220, 11%, 94%, 1);
        }        
    }`;
  }

  return output;
}

module.exports = generateThemeVariables;