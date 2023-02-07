import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13 Pro"
                        description="iPhone"
                        type="phone"
                        capasity={256}
                        price={1299}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 12 Pro"
                        description="iPhone"
                        type="phone"
                        capasity={128}
                        price={1099}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13 Pro"
                        description="iPhone"
                        type="phone"
                        capasity={64}
                        price={999}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 10 Pro"
                        description="iPhone"
                        type="phone"
                        capasity={64}
                        price={999}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone X Pro"
                        description="iPhone"
                        type="phone"
                        capasity={128}
                        price={899}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 8"
                        description="iPhone"
                        type="phone"
                        capasity={32}
                        price={399}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
