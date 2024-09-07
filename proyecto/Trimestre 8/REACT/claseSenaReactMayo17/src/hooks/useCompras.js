

const existeProducto = (arreglo, id) => {
    let existe = false
    arreglo.map((item) => {
        if (item.id === id) existe = true
        return existe
    })
    return existe
}


const getNuevaCantidad = (arreglo, id) => {
    let cantidad = 0
    arreglo.map((item) => {
        if (item.id === id) cantidad = item.cantidad
        return cantidad
    })
    return cantidad
}

const existeCategoria = (arreglo, id) => {
    let existe = false
    arreglo.forEach((item) => {
      if (item.idCategoria === id) 
         existe = true
          return existe;
    });
    return existe
  }


export function getCompras() {
    let compraStore = JSON.parse(localStorage.getItem("compras"))
    if (compraStore != null) {
        return compraStore
    } else
        return []

}

export function addCompra(compra) {
    let nuevaCompra = []
    let compraStore = JSON.parse(localStorage.getItem("compras"))
    if (compraStore == null) {
        nuevaCompra.push(compra)
    } else {
        let nuevaCompra = compraStore
        if (existeProducto(compraStore, compra.id)) {
            console.log ("si existe el producto " + compra.id)
            nuevaCompra = compraStore.map((item) => {
                if (item.id === compra.id) {
                    item.cantidad = compra.cantidad
                    return item
                } else {
                    return item
                }
            })

        } else {
            
            nuevaCompra.push(compra)
        }
       

        let compras = JSON.stringify(nuevaCompra)
        localStorage.setItem('compras', compras)
        return (nuevaCompra)

    }

    let compras = JSON.stringify(nuevaCompra)
    localStorage.setItem('compras', compras)
    return (nuevaCompra)

}

export function deleteCompra(id) {
    let compraStore = JSON.parse(localStorage.getItem("compras"))
    if (compraStore != null) {
        let compraNueva = compraStore.filter((item) => item.id != id);
        let compras = JSON.stringify(compraNueva)
        localStorage.setItem('compras', compras)
        return (compraNueva)
    } else
        return []
}


export function actualizarCantidades  (vector) {
    let compraStore = JSON.parse(localStorage.getItem("compras"))
    if (compraStore != null) {
        let nuevoVector = vector.map((item) => {
            if (existeProducto(compraStore, item.id)) {
                item.cantidad = getNuevaCantidad(compraStore, item.id)
                return item
            }
            else {
                return item
            }
        })
        return nuevoVector


    } else {
        return vector
    }

}


export function getMenu (vector) {
    let menuCategoria = []
    vector.forEach((item) => {
        if (!existeCategoria(menuCategoria, item.idCategoria)) {
           let objeto= {
             idCategoria:item.idCategoria,
             nombreCategoria:item.nombreCategoria
           }
           menuCategoria.push(objeto)
        }
       });

       return menuCategoria
}



export function getFiltro ( vector,  opcion) {
    let nuevoFiltro = []
    nuevoFiltro = vector.filter((item) => item.idCategoria == opcion);
    return nuevoFiltro

}





