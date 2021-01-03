//Fuçao que atualiza pagina
  function Clear() {
    window.location = ""
 }

function Calcular() {
    //Coletar valores do inputs
    let A = document.getElementById("A").value
    let B = document.getElementById("B").value
    let C = document.getElementById("C").value

    let sp1 = document.getElementById("p1")
    let sp2 = document.getElementById("p2")
    let sp3 = document.getElementById("p3")


    //Verificar se os campos estão vazios
    if (A == '' || B == '' || C == '') {
        p1.textContent = "Preencha todos os campos"
        return false
    }

    //trasnformalos em numeros
    A = parseFloat(A)
    B = parseFloat(B)
    C = parseFloat(C)

    // Calcular Delta
    let Delta = (B * B) - 4 * A * C;

    p1.textContent = `Delta é igual a: ${Delta} .`



    if (Delta < 0) {

        p2.textContent = `Para delta negativo não existem raizes reais.`

    } else {
        p2.textContent = "Para Delta positivo, raízes diferentes."



        //Calcular Bhaskara + e -
        let x2 = (-B + Math.sqrt(Delta)) / (2 * A)
        let x1 = (-B - Math.sqrt(Delta)) / (2 * A)

        p3.textContent = `Soluçao = { ${x1} , ${x2} } .`




    }


}
