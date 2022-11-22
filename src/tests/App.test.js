import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    // acessar
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    // agir

    // aferir
    expect(linkHome).toBeInTheDocument();
  });

  test('O segundo link deve possuir o texto About', () => {
    // acessar
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });
    // agir

    // aferir
    expect(linkAbout).toBeInTheDocument();
  });

  test('O terceiro link deve possuir o texto Favorite Pokémon', () => {
    // acessar
    renderWithRouter(<App />);
    const linkFavourite = screen.getByRole('link', { name: 'Favorite Pokémon' });
    // agir

    // aferir
    expect(linkFavourite).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    // agir
    userEvent.click(linkHome);
    // aferir
    expect(history.location.pathname).toBe('/');
  });

  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });
    // agir
    userEvent.click(linkAbout);
    // aferir
    expect(history.location.pathname).toBe('/about');
  });

  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação;', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const linkFavourite = screen.getByRole('link', { name: 'Favorite Pokémon' });
    // agir
    userEvent.click(linkFavourite);
    // aferir
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    // agir
    history.push('/xablau');
    // aferir
    expect(history.location.pathname).toBe('/xablau');
  });
});
