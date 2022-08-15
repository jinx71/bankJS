
const accountStatus = {
    deposite: 0,
    withdraw: 0,
    balance: 1250,
}

const accounts = document.getElementsByClassName('account');
const userMail = document.getElementById('userMail');
const logOutButton = document.getElementById('sign-out-button')

const balanceAmount = document.getElementById('balanceAmount');
const depositeAmount = document.getElementById('depositeAmount');
const withdrawAmount = document.getElementById('withdrawAmount');

const depositeValue = document.getElementById('deposite');
const withdrawValue = document.getElementById('withdraw');
const depositeButton = document.getElementById('depositeButton');
const withdrawButton = document.getElementById('withdrawButton');

const modalOverlay = document.getElementById('overlay');
const modal = document.getElementById('dialog');
const closeModal = document.getElementById('close');

const modalOverlayDeposite = document.getElementById('overlayDeposite');
const modalDeposite = document.getElementById('dialogDeposite');
const closeModalDeposite = document.getElementById('closeDeposite');

userMail.innerText = 'User Mail : ' + document.cookie;

balanceAmount.innerText = '$' + accountStatus.balance;
depositeAmount.innerText = '$' + accountStatus.deposite;
withdrawAmount.innerText = '$' + accountStatus.withdraw;


logOutButton.addEventListener('click', function () {
    // logInPage.classList.add('flex');
    // logInPage.classList.remove('hidden');
    // for (let account of accounts) {
    //     account.classList.add('hidden');
    //     account.classList.remove('flex');
    // }
    window.location.href = './index.html';
})

depositeButton.addEventListener('click', function () {
    // console.log(depositeValue.value);
    if (isNaN(parseInt(depositeValue.value))) {
        modalOverlayDeposite.classList.remove('hidden');
        modalOverlayDeposite.classList.add('block');
        modalDeposite.classList.remove('hidden');
        modalDeposite.classList.add('block');
    }
    else {
        accountStatus.deposite = accountStatus.deposite + parseInt(depositeValue.value);
        depositeAmount.innerText = '$' + accountStatus.deposite;
        accountStatus.balance = accountStatus.balance + parseInt(depositeValue.value);
        balanceAmount.innerText = '$' + accountStatus.balance;

    }

})
withdrawButton.addEventListener('click', function () {
    // console.log(withdrawValue.value);
    if (parseInt(withdrawValue.value) > accountStatus.balance) {
        modalOverlay.classList.remove('hidden');
        modalOverlay.classList.add('block');
        modal.classList.remove('hidden');
        modal.classList.add('block');
    } else {
        accountStatus.withdraw = accountStatus.withdraw + parseInt(withdrawValue.value);
        withdrawAmount.innerText = '$' + accountStatus.withdraw;
        accountStatus.balance = accountStatus.balance - parseInt(withdrawValue.value);
        balanceAmount.innerText = '$' + accountStatus.balance;

    }
})
closeModal.addEventListener('click', function () {
    modalOverlay.classList.remove('block');
    modalOverlay.classList.add('hidden');
    modal.classList.remove('block');
    modal.classList.add('hidden');
})
closeModalDeposite.addEventListener('click', function () {
    modalOverlayDeposite.classList.remove('block');
    modalOverlayDeposite.classList.add('hidden');
    modalDeposite.classList.remove('block');
    modalDeposite.classList.add('hidden');
})