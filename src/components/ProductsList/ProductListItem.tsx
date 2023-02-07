import { Card, CardContent, Button, CardActions } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capasity: number
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product_title">{props.title}</div>
                <div className="product_description">{props.description}</div>
                <div className="product_features">Type: {props.type}</div>
                <div className="product_features">
                    Capasity: {props.capasity} Gb
                </div>
                <div className="product_price">{props.price}$</div>
            </CardContent>
            <CardActions className="product_btn_wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
