$(document).ready(function(){

    const CORECT_USER = 'admin';
    const CORECT_PASS = 'admin';

    let elUserName = $('#username');
    let elPassword = $('#password');
    let formlogin = $('#form-login');
    let error = $('.error');
    let btnLogin = $('#btn-login');
    let system_login = $('.login-system');
    let wrap_login = $('.wrap-form');
    let active_login = $('.active-login');
    let close = $('.close');
    let forgot = $('.forgot');

    console.log(formlogin);
    console.log(username);
    console.log(password);
    console.log(error);
    console.log(location.href);
    console.log(btnLogin);
    console.log(system_login);
    console.log(close);
    console.log(forgot);

    forgot[0].addEventListener('click', () => {
        elUserName[0].setAttribute("placeholder", "OldPassWord");
        elPassword[0].setAttribute("placeholder", "NewPassWord");
        btnLogin[0].innerHTML = 'Save';
    });
    close[0].addEventListener('click', () => {

    });
    system_login[0].addEventListener('click', () => {
        wrap_login[0].classList.remove('d-none');
        system_login[0].classList.add('d-none');
    });

    formlogin[0].addEventListener('submit', function (){

        userName = elUserName.val();
        passWord = elPassword.val();

        if( userName === CORECT_USER & passWord === CORECT_PASS ){

            btnLogin[0].classList.add('spinner-border');
            btnLogin[0].classList.add('text-success');
            btnLogin[0].classList.add('loading');
            btnLogin[0].classList.remove('btn');
            btnLogin[0].classList.remove('btn-primary');
            btnLogin[0].innerHTML = '';

            setTimeout(function(){ 

                //window.location.href = './paslogin.html';
                active_login[0].classList.remove('d-none');
                active_login[0].classList.add('block');
                active_login[0].innerHTML = 'Đăng Nhập Thành Công';
                formlogin[0].classList.add('d-none');
                wrap_login[0].style.background = "white";
                
                
            }, 5000);
        }else {
            error[0].innerHTML = 'Tài khoản hoặc mật khẩu không đúng.';
        }

    });
    
});