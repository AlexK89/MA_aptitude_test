/**
 *  update the specified user's email and name
 *
 * @param userObject a JavaScript object with email, name and id
 *
 * @return a promise containing a boolean success property
 */
async function updateUser(userObject) {
    let data = jsonToFormData(userObject)
    let apiData = await fetch(
        'http://localhost:8080/user/edit',
        {
            method: 'post',
            body: data
        }
    )
    apiData = await apiData.json()
    return apiData
}

document.querySelector("#editUser").addEventListener("click", function () {
    let data = {
        id: document.querySelector(".editPopUp").dataset.uid,
        name: document.querySelector("#editName").value,
        email: document.querySelector("#editEmail").value
    }
    updateUser(data).then(function (response) {
        if (response.success) {
            updateUserTable()
            closePopUp()
        }
    })
})