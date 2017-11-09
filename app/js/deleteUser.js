/**
 * delete the specified user using the API
 *
 * @param userId the id of the user to delete
 *
 * @returns a promise containing a boolean success property
 */
async function deleteUser(userId) {
    let apiData = await fetch(
        'http://localhost:8080/user/delete/' + userId,
        {
            method: 'post',
            body: 'delete'
        }
    )
    apiData = await apiData.json()
    return apiData
}

document.querySelector("#deleteUser").addEventListener("click", function (e) {
    let userId = document.querySelector(".deletePopUp").dataset.uid
    deleteUser(userId).then(function (response) {
        if (response.success) {
            updateUserTable()
            closePopUp()
        }
    })
})