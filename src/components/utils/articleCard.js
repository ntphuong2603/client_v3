import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

const ArticleCard = ({article}) => {

    return(
        <Card>
            <CardMedia 
                style={{height:0,paddingTop:'56.25%'}} 
                image='https://picsum.photos/200'
                title=''/>
            <CardContent>
                <Typography variant='h5'>
                    Title
                </Typography>
                <Typography variant='body1' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon/>
                </IconButton>
                <Button size='small' color='primary' component={RouterLink} to={`/article/${article._id}`}>
                    View more ...
                </Button>
            </CardActions>
        </Card>
    )
}

export default ArticleCard;