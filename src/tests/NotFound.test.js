import { screen } from '@testing-library/dom';
/* import userEvent from '@testing-library/user-event'; */
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found;', () => {
    // acessar
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', { name: /page requested not found/i });
    // agir

    // aferir
    expect(title).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.', () => {
    // acessar
    renderWithRouter(<NotFound />);
    const imgNotFound = screen.getByRole('img');
    // agir

    // aferir
    expect(imgNotFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
