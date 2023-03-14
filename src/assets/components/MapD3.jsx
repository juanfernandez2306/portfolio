import { useRef, useEffect } from "react";
import {
    geoOrthographic,
    geoNaturalEarth1,
    geoConicEqualArea,
    select,
    geoGraticule,
    geoPath,
    easeLinear,
    geoProjection, 
    json
} from 'd3';
import { feature } from "topojson-client";

function MapD3(){
    const svg_ref = useRef();

    useEffect(() => {
        let width, height;
        [width, height] = [340, 250];

        let optionProjections = [
            {name : "ortographic", projection: geoOrthographic().scale(90)},
            {name: "conic", projection: geoConicEqualArea().scale(50)},
            {name: "natural earth", projection: geoNaturalEarth1().scale(60)}
            
        ];

        var i, n;
        [i, n] = [0, optionProjections.length - 1];

        optionProjections.forEach(function(obj){
            obj.projection.translate([width / 2, height/ 2]);
        });

        const svg = select(svg_ref.current)
            .attr("width", width)
            .attr("height", height);

        const graticule = geoGraticule();

        let projection = optionProjections[0].projection;

        let pathGenerator = geoPath().projection(projection);

        svg.append("path")
            .datum(graticule.outline)
            .attr("class", "graticule outline")
            .attr("d", pathGenerator);

        svg.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", pathGenerator);

        function update(option) {
            svg.selectAll("path")
                .interrupt()
                .transition()
                .duration(1000)
                .ease(easeLinear)
                .attrTween("d", projectionTween(projection, projection = option.projection));
        };

        function projectionTween(projection0, projection1) {
            return function(d){
                var t = 0;
            
                var projection = geoProjection(project)
                    .scale(1)
                    .translate([width / 2, height / 2]);
            
                var path = geoPath()
                    .projection(projection);
            
                function project(λ, φ){
                    λ *= 180 / Math.PI, φ *= 180 / Math.PI;
                    var p0 = projection0([λ, φ]), p1 = projection1([λ, φ]);
                    return [(1 - t) * p0[0] + t * p1[0], (1 - t) * -p0[1] + t * -p1[1]];
                }
            
                return function(_){
                    t = _;
                    return path(d);
                };
            };
        };

        function loop(){
            i += 1;
            if(i > n){
                i = 0;
            }
    
            update(optionProjections[i]);
        };

        const urlWorldjson = '/countries-110m.json';

        json(urlWorldjson)
        .then(data => {
            const countries = feature(data, data.objects.countries);

            svg.insert("path", ".graticule")
                .datum(countries)
                .attr("class", "land")
                .attr("d", pathGenerator);
        })
        .then(data => {
            let interval = setInterval(loop, 4000);
        })

    }, [])

    return(
        <aside id="map">
            <svg ref={svg_ref}></svg>
        </aside>
    );
}

export default MapD3;