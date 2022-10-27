let $signUpUsername = document.getElementById('signUp-username');

let $showPassword = document.getElementById('showPassword');
let $showConfirmPassword = document.getElementById('showConfirmPassword');

let $signUpPassword = document.getElementById('signUp-Password');
let $signUpConfirmPassword = document.getElementById('signUp-ConfirmPassword');

$showPassword.addEventListener('click', () => {
    if ($signUpPassword.type === "text") {
        $signUpPassword.type = "password";
        $showPassword.innerHTML = "visibility";
    } else {
        $signUpPassword.type = "text";
        $showPassword.innerHTML = "visibility_off";

    }
})

$showConfirmPassword.addEventListener('click', () => {
    if ($signUpConfirmPassword.type === "text") {
        $signUpConfirmPassword.type = "password";
        $showConfirmPassword.innerHTML = "visibility";
    } else {
        $signUpConfirmPassword.type = "text";
        $showConfirmPassword.innerHTML = "visibility_off";

    }
})


function logInError() {
    let $logInErrorText = document.getElementById('logIn-errorText');

    $logInErrorText.innerHTML = 'Incorrect Username or Password';
}

function signUpError() {
    let $userNameErrorText = document.getElementById('userName-errorText');
    let $signUpErrorText = document.getElementById('signUp-errorText');

    if($signUpUsername.value.length === 0) {
        $userNameErrorText.innerHTML = 'Username must not be blank.'
    }
    if($signUpPassword.value.length < 6) {
        $signUpErrorText.innerHTML = 'Password must have at least 6 characters';
    } else {
        if($signUpPassword.value !== $signUpConfirmPassword.value) {
            $signUpErrorText.innerHTML = 'Confirm Password does not match';
        }
    }
}
