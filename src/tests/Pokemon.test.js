import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const idRoute = '/pokemon/25';
  test('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    // acessar
    renderWithRouter(<App />);
    const nameOfPokemon = screen.getByText(/pikachu/i);
    const typeOfPokemon = screen.getByTestId('pokemon-type');
    const weightOfPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    const imageOfPokemon = screen.getByAltText('Pikachu sprite');
    // agir

    // aferir
    expect(nameOfPokemon).toBeInTheDocument();
    expect(typeOfPokemon).toHaveTextContent(/Electric/);
    expect(weightOfPokemon).toBeInTheDocument();
    expect(imageOfPokemon).toHaveAttribute('alt', 'Pikachu sprite');
    expect(imageOfPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
    // acessar
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    // agir

    // aferir
    expect(linkMoreDetails).toHaveAttribute('href', idRoute);
  });

  test('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon;', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    // agir
    userEvent.click(linkMoreDetails);
    // aferir
    expect(history.location.pathname).toBe(idRoute);
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados:', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    // agir
    act(() => {
      history.push('/pokemon/25');
    });
    const checkBoxFavouritePoke = screen.getByRole('checkbox');
    userEvent.click(checkBoxFavouritePoke);
    act(() => {
      history.push('/');
    });
    const star = screen.getByAltText('Pikachu is marked as favorite');
    // aferir
    expect(star).toHaveAttribute('src', '/star-icon.svg');
    expect(star).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
