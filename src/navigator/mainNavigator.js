import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile98102Navigator from '../features/UserProfile98102/navigator';
import Settings98101Navigator from '../features/Settings98101/navigator';
import Settings98099Navigator from '../features/Settings98099/navigator';
import SignIn298097Navigator from '../features/SignIn298097/navigator';
import SignUp1197931Navigator from '../features/SignUp1197931/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile98102: { screen: UserProfile98102Navigator },
Settings98101: { screen: Settings98101Navigator },
Settings98099: { screen: Settings98099Navigator },
SignIn298097: { screen: SignIn298097Navigator },
SignUp1197931: { screen: SignUp1197931Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
