import Color from '../Core/Color.js';
import defaultValue from '../Core/defaultValue.js';

    /**
     * A directional light source that originates from the Sun.
     *
     * @param {Object} [options] Object with the following properties:
     * @param {Color} [options.color=new Color(0.9, 0.925, 1.0)] The light's color.
     * @param {Number} [options.intensity=2.0] The light's intensity.
     *
     * @alias SunLight
     * @constructor
     */
    function SunLight(options) {
        /**
         * The light's color.
         * @type {Color}
         * @default new Color(0.9, 0.925, 1.0)
         */
        this.color = defined(options.color) ? Color.clone(options.color) : new Color(0.9, 0.925, 1.0);

        /**
         * The light's intensity.
         * @type {Number}
         * @default 2.0
         */
        this.intensity = defaultValue(options.intensity, 2.0);
    }

export default SunLight;
