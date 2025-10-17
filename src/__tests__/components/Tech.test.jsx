import { render, screen } from '@testing-library/react';
import Tech from '../../components/Tech';

describe('Tech Component', () => {
  test('renders Tech component with stack image', () => {
    const stackImage = 'react.png';
    render(<Tech stack={stackImage} />);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', stackImage);
  });

  test('renders with different stack images', () => {
    const { rerender } = render(<Tech stack="nodejs.png" />);
    let image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'nodejs.png');

    rerender(<Tech stack="firebase.png" />);
    image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'firebase.png');
  });

  test('renders imgContainer div', () => {
    const { container } = render(<Tech stack="react.png" />);
    const imgContainer = container.querySelector('.imgContainer');
    expect(imgContainer).toBeInTheDocument();
  });
});

