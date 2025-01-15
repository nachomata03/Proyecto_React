import productos from './data'

export default function getData() {
    console.log(`Solicitando datos...`)
    const promesa = new Promise((resolve, reject) => {

        const data = false
        setTimeout(() => {
            if (data) reject(`Ocurrio un error`)
            
            resolve(productos)
        }, 2000);
    })
    return promesa
} 

export function getDataById(id) {
    console.log(`Solicitando datos del producto...`)
    const promesa = new Promise((resolve, reject) => {

        const data = false
        setTimeout(() => {
            if (data) reject(`Ocurrio un error al traer los datos del producto`)
            
            const requestId = productos.find(producto => producto.id === Number(id))
            resolve(requestId)
        }, 500);
    })
    return promesa
}

export function getDataByCategory(category) {
    console.log(`Solicitando datos del producto...`)
    const promesa = new Promise((resolve, reject) => {

        const data = false
        setTimeout(() => {
            if (data) reject(`Ocurrio un error al traer los datos del producto`)
            
            const requestCategory = productos.filter(productos => productos.category.toLowerCase() === category.toLowerCase())
            resolve(requestCategory)
        }, 500);
    })
    return promesa
}