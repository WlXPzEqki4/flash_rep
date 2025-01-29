import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const NetworkGraph = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Sample data - you can modify this structure later
  const graphData = {
    nodes: [
      { id: "DeepSeek", group: 1, label: "DeepSeek AI", size: 20 },
      { id: "OpenAI", group: 2, label: "OpenAI", size: 15 },
      { id: "Microsoft", group: 2, label: "Microsoft", size: 15 },
      { id: "Google", group: 2, label: "Google", size: 15 },
      { id: "Investors", group: 3, label: "Investors", size: 10 },
      { id: "Research", group: 4, label: "Research Community", size: 12 },
      { id: "Users", group: 5, label: "User Base", size: 8 },
      { id: "Policy", group: 6, label: "Policymakers", size: 10 }
    ],
    links: [
      { source: "DeepSeek", target: "OpenAI", value: 5 },
      { source: "DeepSeek", target: "Microsoft", value: 3 },
      { source: "DeepSeek", target: "Google", value: 3 },
      { source: "DeepSeek", target: "Investors", value: 4 },
      { source: "DeepSeek", target: "Research", value: 5 },
      { source: "DeepSeek", target: "Users", value: 4 },
      { source: "DeepSeek", target: "Policy", value: 2 },
      { source: "OpenAI", target: "Microsoft", value: 5 },
      { source: "OpenAI", target: "Google", value: 3 },
      { source: "Microsoft", target: "Google", value: 2 }
    ]
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 500
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[600px] bg-white rounded-lg">
      {dimensions.width > 0 && (
        <ForceGraph2D
          graphData={graphData}
          nodeLabel="label"
          nodeColor={node => {
            const colors = [
              '#4f46e5', // indigo
              '#06b6d4', // cyan
              '#10b981', // emerald
              '#f59e0b', // amber
              '#ef4444', // red
              '#8b5cf6', // violet
              '#ec4899'  // pink
            ];
            return colors[node.group - 1];
          }}
          nodeRelSize={6}
          linkWidth={link => link.value}
          linkColor={() => '#cccccc'}
          backgroundColor="#ffffff"
          width={dimensions.width}
          height={dimensions.height}
          onNodeDragEnd={node => {
            // Pin node at its current position
            node.fx = node.x;
            node.fy = node.y;
          }}
          onNodeClick={node => {
            // Unpin node on click
            node.fx = null;
            node.fy = null;
          }}
          cooldownTicks={100}
          onEngineStop={() => {
            // Graph has finished initial animation
          }}
          enableZoom={true}
          enableNodeDrag={true}
          nodeCanvasObjectMode={() => 'after'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.label;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText(label, node.x, node.y + 12);
          }}
        />
      )}
    </div>
  );
};

export default NetworkGraph;




