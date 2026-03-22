import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface SchumannWaveProps {
  frequency: number;
  amplitude: number;
  color: string;
  className?: string;
}

export const SchumannWave: React.FC<SchumannWaveProps> = ({ frequency, amplitude, color, className }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    
    svg.selectAll("*").remove();

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const y = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

    const line = d3.line<number>()
      .x((d, i) => x(i))
      .y(d => y(d))
      .curve(d3.curveBasis);

    const path = svg.append("path")
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 2)
      .attr("opacity", 0.6);

    let t = 0;
    const animate = () => {
      const data = d3.range(101).map(i => {
        return Math.sin((i / 10 + t) * frequency * 0.1) * amplitude;
      });
      
      path.attr("d", line(data));
      t += 0.05;
      requestAnimationFrame(animate);
    };

    const handle = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(handle);
  }, [frequency, amplitude, color]);

  return <svg ref={svgRef} className={className} />;
};
