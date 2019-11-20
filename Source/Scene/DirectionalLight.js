import Cartesian3 from '../Core/Cartesian3.js';
import Color from '../Core/Color.js';
import defaultValue from '../Core/defaultValue.js';
import DeveloperError from '../Core/DeveloperError.js';

    /**
     * A light that gets emitted in a single direction from infinitely far away.
     *
     * @param {Object} options Object with the following properties:
     * @param {Cartesian3} options.direction The light's direction.
     * @param {Color} [options.color=Color.WHITE] The light's color.
     * @param {Number} [options.intensity=1.0] The light's intensity.
     *
     * @exception {DeveloperError} options.direction cannot be zero-length
     *
     * @alias DirectionalLight
     * @constructor
     */
    function DirectionalLight(options) {
        //>>includeStart('debug', pragmas.debug);
        Check.typeOf.object('options', options);
        Check.typeOf.object('options.direction', options.direction);
        if (Cartesian3.equals(options.direction, Cartesian3.ZERO)) {
            throw new DeveloperError('options.direction cannot be zero-length');
        }
        //>>includeEnd('debug');

        /**
         * The light's direction.
         * @type {Cartesian3}
         */
        this.direction = Cartesian3.clone(options.direction);

        /**
         * The light's color.
         * @type {Color}
         * @default Color.WHITE
         */
        this.color = Color.clone(defaultValue(options.color, Color.WHITE));

        /**
         * The light's intensity.
         * @type {Number}
         * @default 1.0
         */
        this.intensity = defaultValue(options.intensity, 1.0);
    }

export default DirectionalLight;
