
const accountStatus = {
    deposite: 0,
    withdraw: 0,
    balance: 1250,
}
const today = new Date();
const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
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

const balanceSheet = document.getElementById('balanceSheet');
const balanceSheetBody = document.getElementById('balanceSheetBody');
const balanceSheetFoot = document.getElementById('balanceSheetFoot');

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
        balanceSheet.classList.remove('hidden');
        balanceSheetBody.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">`
            + date + `
        </th>
        <td class="py-4 px-6">` +
            '' + `
        </td>
        <td class="py-4 px-6">
            `+ parseInt(depositeValue.value) + `
        </td>
        <td class="py-4 px-6">
            `+ accountStatus.balance + `
        </td>

    </tr>
    `
        balanceSheetFoot.innerHTML = `
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">`+ 'Total' + `
        </th>
        <td class="py-4 px-6">` +
            accountStatus.withdraw + `
        </td>
        <td class="py-4 px-6">
            `+ accountStatus.deposite + `
        </td>
        <td class="py-4 px-6">
            `+ accountStatus.balance + `
        </td>

    </tr>
    `
        depositeValue.value = '';
    }
})
withdrawButton.addEventListener('click', function () {
    // console.log(withdrawValue.value);
    if (isNaN(parseInt(withdrawValue.value))) {
        modalOverlayDeposite.classList.remove('hidden');
        modalOverlayDeposite.classList.add('block');
        modalDeposite.classList.remove('hidden');
        modalDeposite.classList.add('block');
    }
    else if (parseInt(withdrawValue.value) > accountStatus.balance) {
        modalOverlay.classList.remove('hidden');
        modalOverlay.classList.add('block');
        modal.classList.remove('hidden');
        modal.classList.add('block');
    } else {
        accountStatus.withdraw = accountStatus.withdraw + parseInt(withdrawValue.value);
        withdrawAmount.innerText = '$' + accountStatus.withdraw;
        accountStatus.balance = accountStatus.balance - parseInt(withdrawValue.value);
        balanceAmount.innerText = '$' + accountStatus.balance;
        balanceSheet.classList.remove('hidden');
        balanceSheetBody.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">`
            + date + `
        </th>
        <td class="py-4 px-6">` +
            parseInt(withdrawValue.value) + `
        </td>
        <td class="py-4 px-6">
            `+ '' + `
        </td>
        <td class="py-4 px-6">
            `+ accountStatus.balance + `
        </td>

    </tr>
    `
        balanceSheetFoot.innerHTML = `
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">`+ 'Total' + `
        </th>
        <td class="py-4 px-6">` +
            accountStatus.withdraw + `
        </td>
        <td class="py-4 px-6">
            `+ accountStatus.deposite + `
        </td>
        <td class="py-4 px-6">
            `+ accountStatus.balance + `
        </td>

    </tr>
    `
        withdrawValue.value = '';
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