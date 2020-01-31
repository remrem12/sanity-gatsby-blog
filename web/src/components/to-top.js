import React from 'react'

const ToTop = () => {

  const goToTop = () => {
    // to top button 
    
      let eli = document.querySelector('.to-top i');
      const ani1 = new mojs.Shape({
          parent: $('.to-top'),
          radius: { 0: 50 },
          fill: 'transparent',
          stroke: '#C0C1C3',
          strokeWidth: { 35: 0 },
          opacity: 0.6,
          duration: 600,
          easing: mojs.easing.ease.inout
      })


      const ani2 = new mojs.Tween({
          duration: 1100,
          onUpdate: function (progress) {
              if (progress > 0.3) {
                  var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
                  eli.style.WebkitTransform = eli.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
              }
              else {
                  eli.style.WebkitTransform = eli.style.transform = 'scale3d(0,0,1)';
              }
          }
      })

      const ani3 = new mojs.Burst({
        parent: 		$('.to-top'),
        count: 			6,
        radius: 		{40:90},
        children: {
          fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
          opacity: 		0.6,
          scale: 			1,
          radius:     { 7: 0 },
          duration: 	1500,
          delay: 			300,
          easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
      })

      ani1.play();
      ani2.play();
      ani3.play();
      $('#header').animatescroll({ easing: 'easeInOutExpo' });
      

  }
  
  return (
    <div className="to-top" onClick={goToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  )
}

export default ToTop