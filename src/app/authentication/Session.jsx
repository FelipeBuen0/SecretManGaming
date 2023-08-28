
function isLogged() {
    const token = localStorage.getItem('auth');
    if (!token || token === '' || token === null) {
        console.log('02# - Session.jsx | Validando token. Aguarde...');
        return false;
    }
    return true;
}

function logout() {
    const token = localStorage.set('auth');
    if (token || token !== '' || token !== null) {
        localStorage.removeItem('auth')
        console.log('01# - Session.jsx | Removendo token. Aguarde...');
    }
}

export {logout, isLogged};