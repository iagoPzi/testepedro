import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

const Navigation = () => (
  <NavigationRoot>
    <NavigationList>
      <NavigationItem>

        <NavigationTrigger> teste</NavigationTrigger>
        <NavigationContent forceMount>
          <NavigationLink href='/'>link</NavigationLink>
          <NavigationLink href='/'>link</NavigationLink>
          <NavigationLink href='/'>link</NavigationLink>
          
        </NavigationContent>
      </NavigationItem>


      <NavigationMenu.Indicator />
    </NavigationList>

    <NavigationMenu.Viewport />
  </NavigationRoot>
);

export default Navigation;


const NavigationRoot = styled(NavigationMenu.Root)`
position: relative;
`

const NavigationList = styled(NavigationMenu.List)`

`



const NavigationItem = styled(NavigationMenu.Item)`

`



const NavigationTrigger = styled(NavigationMenu.Trigger)`
background: inherit;
font-size: 1rem;

`



const NavigationContent = styled(NavigationMenu.Content)`
position: absolute;
top: 10;


background: #fff;
box-shadow: 0px 6px 20px 0px rgba(0,0,0,0.2);
width: 10rem;
padding: .5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`



const NavigationLink = styled(NavigationMenu.Link)``




