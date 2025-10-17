import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders all main sections', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
  });

  test('renders Navbar component', () => {
    const { container } = render(<App />);
    const logo = container.querySelector('.logo img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/sasa.png');
  });

  test('renders CV download link', () => {
    render(<App />);
    const cvLink = screen.getByText(/CV/i);
    expect(cvLink).toBeInTheDocument();
  });
});

