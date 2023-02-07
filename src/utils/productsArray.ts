type ProductProps = {
    title: string
    description: string
    type: string
    capasity: number
    price: number
}

const productsArray:ProductProps[] = [
{
    title: 'iPhone 14 Pro',
    description: 'This is Iphone 14 Pro',
    type: 'phone',
    capasity: 256,
    price: 1099
},
{
    title: 'iPhone 13 Pro',
    description: 'This is Iphone 13 Pro',
    type: 'phone',
    capasity: 128,
    price: 1199
},
{
    title: 'iPhone 12 Pro',
    description: 'This is Iphone 12 Pro',
    type: 'phone',
    capasity: 128,
    price: 999
},
{
    title: 'iPhone 10 Pro',
    description: 'This is Iphone 10 Pro',
    type: 'phone',
    capasity: 128,
    price: 899
},
{
    title: 'iPhone X',
    description: 'This is Iphone X',
    type: 'phone',
    capasity: 64,
    price: 799
},
{
    title: 'iPhone 12',
    description: 'This is Iphone 12',
    type: 'phone',
    capasity: 256,
    price: 1199
}
]

export default productsArray