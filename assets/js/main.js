window.onload = function(){
    let $goRegister = document.querySelector('#goRegister')
    let $goLogin = document.querySelector('#goLogin')
    let $containerLogin = document.querySelector('.container-login')
    let $containerRegister = document.querySelector('.container-register')

    $goRegister.addEventListener('click', () => {
        console.log('go to register')

        $containerLogin.classList.toggle('ocultar-form')
        $containerRegister.classList.toggle('ocultar-form')
    })

    $goLogin.addEventListener('click', () => {
        console.log('go to login')
        $containerRegister.classList.toggle('ocultar-form')
        $containerLogin.classList.toggle('ocultar-form')
    })
}