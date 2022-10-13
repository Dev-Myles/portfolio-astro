/* eslint-env es6 */
/* eslint-disable */


    const positionIds = ['banner','projects', 'tech', 'about']
let currentPosition = 0;
const upBtn = document.getElementById('upBtn')
const downBtn = document.getElementById('downBtn')
const bannerIds = ['projectBtn', 'techBtn', 'aboutBtn']

    bannerIds.forEach((e, i) => {
        const ele = document.getElementById(e)
        const tab = positionIds[i+1]
        ele?.addEventListener('click', () =>
            tab
                ? [document
                      .getElementById(tab)
                      ?.scrollIntoView({ behavior: 'smooth' }), currentPosition = positionIds.indexOf(tab)]
                : null
        )
    })

upBtn?.addEventListener('click', buttonClick)
downBtn?.addEventListener('click', buttonClick)

    function buttonClick(this: Element){
       console.log(this.id)
        if(this.id === 'upBtn' && currentPosition > 0){
            
                    currentPosition -- 
                    const spot = positionIds[currentPosition]
           spot ?  document.getElementById(spot)?.scrollIntoView({behavior:'smooth'}) :   console.log('not working')
               
            
        }else if(this.id === 'downBtn' && currentPosition < positionIds.length - 1){
          
           
                    currentPosition ++ 
                    const spot = positionIds[currentPosition]
           spot ?  document.getElementById(spot)?.scrollIntoView({behavior:'smooth'}) :   console.log('not working')
                
        }
    }




export {}







