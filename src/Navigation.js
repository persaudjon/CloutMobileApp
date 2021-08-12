import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import ShopCardList from './ShopCardList';

const ShopRoute = () => <ShopCardList/>;

const FeedRoute = () => <Text>Feeds</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const NavigationComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'shop', title: 'Shop', icon: 'cart' },
    { key: 'feed', title: 'Feed', icon: 'ethernet' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    shop: ShopRoute,
    feed: FeedRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationComponent;
