import { Card, CardContent, Button, CardActions } from '@mui/material'
import './ProductListItem.scss'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product_title">iPhone 14 PRO</div>
                <div className="product_description">This iPhone 14 PRO</div>
                <div className="product_features">Type: phone</div>
                <div className="product_features">Capasity: 256 Gb</div>
                <div className="product_price">1200$</div>
            </CardContent>
            <CardActions className="product_btn_wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
