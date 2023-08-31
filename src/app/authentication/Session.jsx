
function isLogged() {
    const token = localStorage.getItem('auth');
    if (!token || token === '' || token === null) {
        console.log('02# - Session.jsx | Validando token. Aguarde...');
        // window.location.href = '/Login'
        return false;
    }
    // window.location.href = '/'
    return true;
}

function logout() {
    const token = localStorage.set('auth');
    if (token || token !== '' || token !== null) {
        localStorage.removeItem('auth')
        window.location.href = '/Login'
        console.log('01# - Session.jsx | Removendo token. Aguarde...');
    }
}

export {logout, isLogged};