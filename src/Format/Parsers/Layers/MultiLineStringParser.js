/**
 * Created by PRadostev on 09.06.2015.
 */

L.GML.MultiLineStringParser = L.GML.AbstractMultiPolylineParser.extend({
    initialize: function () {
        L.GML.AbstractMultiPolylineParser.prototype.initialize.call(this);
        this.appendParser(new L.GML.LineStringParser());
        this.elementTag = 'gml:MultiLineString';
    }
});