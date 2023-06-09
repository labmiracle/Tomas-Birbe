import { Link } from './Link';
import { Title } from './Title';
import { ListItem } from './ListItem';
import { Loading } from './Loading';
import { Text } from './Text';
import { List } from './List';

export function Props() {
  return (
    <Loading show={false}>
      <Title>Necesito partir en componentes todo esto</Title>
      <Text>
        Para ello puedo usar React que me permitirá reutilizar todos esos
        componentes. Para ello tengo que:
      </Text>
      <List>
        <ListItem>Observar el HTML</ListItem>
        <ListItem>
          Pensar en cómo puedo extraer cada parte en componentes
        </ListItem>
        <ListItem>Usarlos, o mejor dicho, reusarlos en React</ListItem>
      </List>
      <Link openInNewTab={true} href="https://react.dev/">
        React Docs
      </Link>
    </Loading>
  );
}
