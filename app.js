//Fuçao que atualiza pagina
function Clear() {
    window.location = ""
}

function Calcular() {
    //Coletar valores do inputs
    const valores = {
        A: document.getElementById("A").value,
        B: document.getElementById("B").value,
        C: document.getElementById("C").value
    }

    const paragrafos = {
         p1 : document.getElementById("p1"),
         p2 : document.getElementById("p2"),
         p3 : document.getElementById("p3")
    }


    //Verificar se os campos estão vazios
    if (valores.A == '' || valores.B == '' || valores.C == '') {
        paragrafos.p1.textContent = "Preencha todos os campos"
        return false
    }

    //trasnformalos em numeros
    A = parseFloat(valores.A)
    B = parseFloat(valores.B)
    C = parseFloat(valores.C)

    // Calcular Delta
    let Delta = (B * B) - 4 * A * C;

    paragrafos.p1.textContent = `Delta é igual a: ${Delta} .`



    if (Delta < 0) {

        paragrafos.p2.textContent = `Para delta negativo não existem raizes reais.`

    } else {
        paragrafos.p2.textContent = "Para Delta positivo, raízes diferentes."



        //Calcular Bhaskara + e -
        let x2 = (-B + Math.sqrt(Delta)) / (2 * A)
        let x1 = (-B - Math.sqrt(Delta)) / (2 * A)

        paragrafos.p3.textContent = `Soluçao = { ${x1} , ${x2} } .`




    }


}
