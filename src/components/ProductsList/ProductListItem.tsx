import { Card, CardContent, Button, CardActions } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capasity: number
    price: number
}

const ProductListItem = ({
    title,
    description,
    type,
    capasity,
    price,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product_title">{title}</div>
                <div className="product_description">{description}</div>
                <div className="product_features">Type: {type}</div>
                <div className="product_features">Capasity: {capasity} Gb</div>
                <div className="product_price">{price}$</div>
            </CardContent>
            <CardActions className="product_btn_wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
