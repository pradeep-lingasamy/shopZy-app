export interface Obj{
    additioninfo: {weight: string,
        dimension: string,
        Material: string,
        Color: string[],
        Size: string[],
    },
    category:string,
    id:number,
    image: string[],
    price: {
        value:number,
        discount: number,
   },
   description: string,
    specification: string,
    title: string,
}

export interface Localobj{
    id: number,
    img: string,
    title: string,
    price: number,
    quantity: number,
}