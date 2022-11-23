import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    // acessar
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: /encountered pokémon/i });
    // agir
    // aferir
    expect(title).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado:', () => {
    // acessar
    renderWithRouter(<App />);
    const namePokemon = screen.getByText(/pikachu/i);
    expect(namePokemon).toBeInTheDocument();
    const buttonNextPoke = screen.getByRole('button', { name: /próximo pokémon/i });
    // agir
    userEvent.click(buttonNextPoke);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();

    // aferir
    expect(buttonNextPoke).toBeInTheDocument();
  });

  test('Teste se a Pokédex tem os botões de filtro:', () => {
    // acessar
    renderWithRouter(<App />);
    const filterButtonsType = screen.getAllByTestId('pokemon-type-button');
    // agir
    // aferir
    expect(filterButtonsType[0]).toHaveTextContent('Electric');
    expect(filterButtonsType[1]).toHaveTextContent('Fire');
    expect(filterButtonsType[2]).toHaveTextContent('Bug');
    expect(filterButtonsType[3]).toHaveTextContent('Poison');
    expect(filterButtonsType[4]).toHaveTextContent('Psychic');
    expect(filterButtonsType[5]).toHaveTextContent('Normal');
    expect(filterButtonsType[6]).toHaveTextContent('Dragon');
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    // acessar
    renderWithRouter(<App />);
    const filterButtonAll = screen.getByRole('button', { name: /all/i });
    // agir
    userEvent.click(filterButtonAll);
    // aferir
    expect(filterButtonAll).toBeInTheDocument();
  });
});
