
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

