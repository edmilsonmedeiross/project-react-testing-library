import { screen } from '@testing-library/dom';
/* import userEvent from '@testing-library/user-event'; */
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    // acessar
    renderWithRouter(<FavoritePokemon />);
    const textNoFavourite = screen.getByText(/no favorite pokémon found/i);
    // agir

    // aferir
    expect(textNoFavourite).toBeInTheDocument();
  });
});
