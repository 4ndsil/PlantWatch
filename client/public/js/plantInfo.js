async function plantInfo({ id, img, ...info }) {
    document.getElementById("plantinfo-img").src = img
    const tbody = document.getElementById("plantinfo-table")

    for (const [key, value] of Object.entries(info)) {
      let tr = document.createElement("tr")
      let th = document.createElement("th")
      let td = document.createElement("td")

      tbody.appendChild(tr)
      tr.appendChild(th)
      tr.appendChild(td)

      th.innerText = key
      td.innerText = value
    }
    document.getElementById("plantinfo-spinner").remove()
  }