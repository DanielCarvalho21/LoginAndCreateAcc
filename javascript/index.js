
document.getElementById('botao').addEventListener('click', async function(){
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  console.log(email, senha)

  try {
    await axios.post('https://localhost:7050/api/Usuario/Login', {
      email,
      senha
    })

    location.href="http://127.0.0.1:5501/html/logged.html"

  } catch (error) {
    alert("Erro")
 }
})




