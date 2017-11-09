/**
 * creates an object with the Id, name and email of the selected edit
 */
function createEditEvent() {
    document.querySelectorAll(".edit").forEach(function(el) {
        el.addEventListener("click", function (e) {
            let self = e.target.parentNode.parentNode

            let data = {
                id: self.getAttribute("data-uid"),
                name: self.querySelector(".name").textContent,
                email: self.querySelector(".email").textContent
            }

            document.querySelector(".editPopUp").dataset.uid = data.id
            document.querySelector(".editPopUp").dataset.name = data.name
            document.querySelector(".editPopUp").dataset.email = data.email
            document.querySelector(".editPopUp").style.display = "block"
            document.querySelector(".blur").style.display = "block"

            document.querySelector("#editName").value = data.name
            document.querySelector("#editEmail").value = data.email
        })
    })
}

/**
 * creates an object with the Id of the selected delete
 */
function createDeleteEvent() {
    document.querySelectorAll(".delete").forEach(function(el) {
        el.addEventListener("click", function(e) {
            let self = e.target.parentNode.parentNode

            document.querySelector(".deletePopUp").dataset.uid = self.getAttribute("data-uid")
            document.querySelector(".deletePopUp").style.display = "block"
            document.querySelector(".blur").style.display = "block"
            })
        })
}

/**
 * makes pop up close when the background or the close button is clicked
 */
function closePopUp() {
    document.querySelector(".editPopUp").style.display = "none"
    document.querySelector(".deletePopUp").style.display = "none"
    document.querySelector(".blur").style.display = "none"
}

document.querySelector(".blur").addEventListener("click", closePopUp)


