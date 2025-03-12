const cargaData = async () => {


    const result = await fetch("https://wscbdev.cablecolor.hn/API/getMotivos?ws_u=UVOZY&ws_p=s5czl5r6&actividad=CSP")

    if (result.ok) {
        const data = await result.json();
        console.log(data)

        const { response } = data
        let tbody = ''
        response.map((item) => {
            tbody += `<tr> 
                            <td> ${item.CODIGO_MOTIVO}  </td>
                             <td> ${item.NOMBRE_MOTIVO}  </td>
                            </tr> `
        })

        reporte.innerHTML = tbody
    } else {

        try {
            const data = await result.json();
            console.log(data)
        } catch (err) {
            console.log(err.message)
        }

    }

}

cargaData()


const crearOrden = async () => {

    const data = {
        ws_u: "UVOZY",
        ws_p: "s5czl5r6",
        cliente: "806968",
        actividad: "CSP",
        comentario: "Me cambiaron los canales",
        motivo: "164"
    };

    const result = await fetch("https://wscbdev.cablecolor.hn/API/crearOrden", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(data)
        }
    })

    console.log(result)

}