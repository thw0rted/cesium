import Color from '../Core/Color.js';
import defineProperties from '../Core/defineProperties.js';

    /**
     * A light source. This type describes an interface and is not intended to be instantiated directly.
     *
     * @alias Light
     * @constructor
     *
     * @see DirectionalLight
     * @see SunLight
     */
    function Light() {
    }

    defineProperties(Light.prototype, {
        /**
         * The light's color.
         * @memberof Light.prototype
         * @type {Color}
         */
        color : {
            get : DeveloperError.throwInstantiationError
        },

        /**
         * The light's intensity.
         * @memberof Light.prototype
         * @type {Number}
         */
        intensity : {
            get : DeveloperError.throwInstantiationError
        }
    });

export default Light;
