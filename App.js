import Navigation from './src/Config/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
    </>
  )
}

export default App;

/*
(==================> Project Structure (Here ALL application details) <==================)

(1) All_Screens.

  i-  [User_Screens]
        1 - Splash.js
        2 - Register.js
        3 - Login.js
        4 - Home.js
        5 - Cart.js
        6 - Account.js

  ii- [Admin_Screens]
        7 - AdminHome.js
        8 - AdminAddItem.js
        9 - AdminAccount.js
        10 - AdminOrders.js
_____________________________________________.

(2) Configration.

  i-  [All_Navigation]
        1 - Navigation.js
        2 - AdminBottomNavigation.js
        3 - BottomNavigation.js
_____________________________________________.

(3) Application_Start.

1 - First Screen is (Splash) on Application Start then Navigate to (Register) screen on "3 seconds" of setTimeout, also click mannualy on "Get Started" button.   

2 - (Register) screen have inputs user fill the information and click on "Sign Up" button then goto the (Home) screen after registeration success. [Note: On current situation after the click on "Sign Up" button user navigate to "BottomNavigation.js" means (Home) screen].  

3 - If User already register so goto (login) screen have inputs user fill the information and click on "Sign In" button then goto the (Home) screen after Login success. [Note: On current situation after the click on "Sign Up" button user navigate to "AdminBottomNavigation.js" means (AdminHome) screen].
_____________________________________________.

(==================> Project Structure (Here ALL application details) <==================)
*/
