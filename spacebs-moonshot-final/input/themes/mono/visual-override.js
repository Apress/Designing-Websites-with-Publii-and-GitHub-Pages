/*
* Custom function used to generate the output of the override.css file
*/

var generateOverride = function(params) {
	let output = '';
	
	if (params.galleryZoom !== true) {
		output += `   
		.pswp--zoom-allowed .pswp__img {
			cursor: default !important  
		}`;
	}
	
	if (params.lazyLoadEffect === 'fadein') {
		output += ` 
		img[loading] {
			opacity: 0;
		}
		
		img.is-loaded {
			opacity: 1;
			transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1), transform .6s ease-out, filter .6s ease-out; 
		}`;
	}
	
	return output;
}

module.exports = generateOverride;