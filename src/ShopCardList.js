import * as React from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ShopCardComponent = () => (
  <ScrollView style={{paddingTop:10}}>
    <Card>
    <Card.Title title="PWB Tee" subtitle="Dropped 1d ago"/>
    <Card.Cover source={{ uri: 'https://cdn.shopify.com/s/files/1/0021/5764/1815/products/image_c7c4f234-1e00-488a-aceb-fc1223366548_1728x.jpg' }} />
    <Card.Actions>
      <Button>Add To Cart</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Title title="Academy Polo Cap" subtitle="Dropped 4d ago"/>
    <Card.Cover source={{ uri: 'https://cdn.shopify.com/s/files/1/0021/5764/1815/products/image_0d23ecac-b868-4344-ace4-7a598fcae627_4472x.jpg' }} />
    <Card.Actions>
      <Button>Add To Cart</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Title title="Outlier Polo" subtitle="Dropped 2w ago"/>
    <Card.Cover source={{ uri: 'https://cdn.shopify.com/s/files/1/0021/5764/1815/products/image_7fb41b65-ba1b-4ede-9770-d05887948f41_1728x.jpg' }} />
    <Card.Actions>
      <Button>Add To Cart</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Title title="IN TOO DEEP" subtitle="Dropped 1d ago"/>
    <Card.Cover source={{ uri: 'https://cdn.shopify.com/s/files/1/0021/5764/1815/products/image_69005841-1e4d-4eaa-b4d8-3704d214425f_1728x.png' }} />
    <Card.Actions>
      <Button>Add To Cart</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Title title="PWB Tee" subtitle="Dropped 1d ago"/>
    <Card.Cover source={{ uri: 'https://cdn.shopify.com/s/files/1/0021/5764/1815/products/image_992ab712-968b-4219-be24-446482a25dae_4472x.jpg' }} />
    <Card.Actions>
      <Button>Add To Cart</Button>
    </Card.Actions>
  </Card>
  </ScrollView>
);

export default ShopCardComponent;
