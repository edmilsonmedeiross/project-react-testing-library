import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkMoreDetails);

    const title = screen.getByRole('heading', { name: /pikachu details/i });
    const notLink = screen.queryByRole('link', { name: /more details/i });
    const summary = screen.getByRole('heading', { name: /summary/i });
    const text = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);

    expect(notLink).not.toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const title = screen.getByRole('heading', { name: /game locations of pikachu/i });
    const locationNameOne = screen.getByText(/kanto viridian forest/i);
    const locationNameTwo = screen.getByText(/kanto power plant/i);
    const imgsMaps = screen.getAllByAltText('Pikachu location');

    imgsMaps.forEach((location) => {
      expect(location).toBeInTheDocument();
      expect(location.alt).toBe('Pikachu location');
    });
    expect(title).toBeInTheDocument();
    expect(imgsMaps[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgsMaps[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(locationNameTwo).toBeInTheDocument();
    expect(locationNameOne).toBeInTheDocument();
  });

  test('Teste se o usuário pode favoritar um Pokémon através da página de detalhes:', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const checkBox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    const checkBoxLabel = screen.getByText(/pokémon favoritado\?/i);

    expect(checkBoxLabel).toBeInTheDocument();
    expect(checkBox).toBeInTheDocument();

    userEvent.click(checkBox);
    const star = screen.queryByRole('img', { name: /pikachu is marked as favorite/i });
    expect(star).toBeInTheDocument();
    userEvent.click(checkBox);
    expect(star).not.toBeInTheDocument();
  });
});
