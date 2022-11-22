import { screen } from '@testing-library/dom';
/* import userEvent from '@testing-library/user-event'; */
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex;', () => {
    // acessar
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { name: /about pokédex/i });
    // agir

    // aferir
    expect(title).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    // acessar
    renderWithRouter(<About />);
    const textOne = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const textTwo = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    // agir

    // aferir
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    // acessar
    renderWithRouter(<About />);
    const imagePokedex = screen.getByRole('img');
    // agir

    // aferir
    expect(imagePokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
