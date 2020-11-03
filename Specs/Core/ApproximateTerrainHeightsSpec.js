import { ApproximateTerrainHeights } from "../../Source/Cesium.js";
import { Cartesian3 } from "../../Source/Cesium.js";
import { Math as CesiumMath } from "../../Source/Cesium.js";
import { Rectangle } from "../../Source/Cesium.js";

describe("Core/ApproximateTerrainHeights", function () {
  beforeAll(function () {
    return ApproximateTerrainHeights.initialize();
  });

  it("initializes", function () {
    // TODO: remove me?
    return ApproximateTerrainHeights.initialize().then(function () {
      expect(ApproximateTerrainHeights._terrainHeights).toBeDefined();
    });
  });

  it("getMinimumMaximumHeights computes minimum and maximum terrain heights", function () {
    var result = ApproximateTerrainHeights.getMinimumMaximumHeights(
      Rectangle.fromDegrees(-121.0, 10.0, -120.0, 11.0)
    );
    expect(result.minimumTerrainHeight).toEqualEpsilon(
      -476.12571188755,
      CesiumMath.EPSILON10
    );
    expect(result.maximumTerrainHeight).toEqualEpsilon(
      -28.53,
      CesiumMath.EPSILON10
    );
  });

  it("getMinimumMaximumHeights throws with no rectangle", function () {
    expect(function () {
      return ApproximateTerrainHeights.getMinimumMaximumHeights();
    }).toThrowDeveloperError();
  });

  it("getBoundingSphere computes a bounding sphere", function () {
    var result = ApproximateTerrainHeights.getBoundingSphere(
      Rectangle.fromDegrees(-121.0, 10.0, -120.0, 11.0)
    );
    expect(result.center).toEqualEpsilon(
      new Cartesian3(
        -3183013.849117281,
        -5403772.559109628,
        1154581.5821590829
      ),
      CesiumMath.EPSILON10
    );
    expect(result.radius).toEqualEpsilon(
      77884.16321007285,
      CesiumMath.EPSILON10
    );
  });

  it("getBoundingSphere throws with no rectangle", function () {
    expect(function () {
      return ApproximateTerrainHeights.getBoundingSphere();
    }).toThrowDeveloperError();
  });
});
