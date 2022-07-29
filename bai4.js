fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(function name(data) {
    renderDataById(data);
    renderDataCardUser(data);
  })


function renderDataById(data) {
  let button = document.querySelector('#button')
  let inputData = document.querySelector('#inputData')

  button.addEventListener("click", function show() {
    let dta = data.find((a) => a.id === +inputData.value)
    let appendtext = `
          <tbody>
          <tr>
            <td>${dta.name} ${dta.username}</td>
            <td>${dta.email}</td>
            <td>${dta.address.city}</td>
            <td>${dta.phone}</td>
            <td>${dta.website}</td>
            <td>${dta.company.name}</td>
          </tr>
        </tbody>
          `;
    let add = document.querySelector("#add")
    add.innerHTML = appendtext;
  })

}


function renderDataCardUser(data) {
  let all = document.querySelector("#all")
  all.addEventListener("click", function showAll() {
    
    let appendtext = data.map((user)=>`
    <tbody>
    <tr>
      <td>${user.name} ${user.username}</td>
      <td>${user.email}</td>
      <td>${user.address.city}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
      <td>${user.company.name}</td>
    </tr>
  </tbody>
    `)
    let add = document.querySelector("#add");
    add.innerHTML = appendtext;
  })
}




