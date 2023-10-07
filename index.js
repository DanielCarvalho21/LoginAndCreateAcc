
document.getElementById('botao').addEventListener('click', async function(){
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  console.log(email, senha)

  try {
    await axios.post('https://localhost:7050/api/Usuario/Login', {
      email,
      senha
    })

  } catch (error) {
    alert("Erro")
 }
})


const button = document.querySelector('#button');

if (button) {
  button.addEventListener('click', async function(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senhaCompare = document.getElementById('senhaCompare').value;
    console.log(email, senha)

    if (senhaCompare == senha){
      try {
        await axios.post('https://localhost:7050/api/Usuario/Adicionar', {
          email,
          senha
        })

      } catch (error) {
        alert("Erro")
      }
    }
  })
} else {
  console.log("Elemento não encontrado")
}





