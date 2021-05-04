function Gradient(props) {
  return (
    <svg id="background" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(100 .5 .5)">
          <animateTransform attributeName="gradientTransform" 
                            id="spin"
                            attributeType="XML"
                            type="rotate"
                            from="100 .5 .5"
                            to="460 .5 .5"
                            dur="35s"
                            repeatCount="indefinite" />
          <stop id="stop1" 
                offset="0" 
                stopColor={`rgba( ${props.colors[0].join(',')}, 0.4)`}/>
          <stop id="stop2" 
                offset=".3" 
                stopColor={`rgba(${props.colors[1].join(',')}, 0.4)`}>
            <animate attributeName="offset" 
                id="breath" 
                dur="40s" 
                values="0.40; 0.50; 0.40" 
                repeatCount="indefinite"></animate>
          </stop>
          <stop id="stop3" 
                offset="1" 
                stopColor={`rgba(${props.colors[2].join(',')}, 0.4)`}/>     
        </linearGradient> 
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)"/>
    </svg>
  );
}

export default Gradient;
