import React, { useEffect, useRef } from "react";

const TableauViz = ({ embedUrl, height = "400px", width = "100%" }) => {
  const vizRef = useRef(null);

  useEffect(() => {
    if (!embedUrl) return;

    // Load Tableau JS API dynamically
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, [embedUrl]);

  return (
    <div
      ref={vizRef}
      style={{
        width: width,
        height: height,
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <div className="tableauPlaceholder" style={{ width: "100%", height: "100%" }}>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https://public.tableau.com/" />
          <param name="embed_code_version" value="3" />
          <param name="path" value={`views/${embedUrl}`} />
          <param name="toolbar" value="yes" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
        </object>
      </div>
    </div>
  );
};

export default TableauViz;