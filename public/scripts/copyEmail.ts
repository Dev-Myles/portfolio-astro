/* eslint-env es6 */
/* eslint-disable */

const emailScript = (function(){
        const emailDiv = document.getElementById('copyEmail');
        emailDiv?.addEventListener('click', function(){
    navigator.clipboard.writeText('mylessworkemail@gmail');
    this.innerText = 'Copied!'
})

})()



export default emailScript


