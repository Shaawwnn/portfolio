import { render, screen } from '@testing-library/react';
import Tech from '../../components/Tech';

describe('Tech Component', () => {
  const mockTech = {
    name: "React",
    icon: "react.png"
  };

  test('renders Tech component with tech data', () => {
    render(<Tech tech={mockTech} />);
    
    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });

  test('renders tech name', () => {
    render(<Tech tech={mockTech} />);
    const techName = screen.getByText(/React/i);
    expect(techName).toBeInTheDocument();
  });

  test('renders tech icon with correct src', () => {
    render(<Tech tech={mockTech} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/react.png');
  });

  test('renders with different tech data', () => {
    const { rerender } = render(<Tech tech={mockTech} />);
    expect(screen.getByText(/React/i)).toBeInTheDocument();

    const nodeTech = { name: "Node.js", icon: "nodejs.png" };
    rerender(<Tech tech={nodeTech} />);
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/nodejs.png');
  });

  test('renders tech card structure', () => {
    const { container } = render(<Tech tech={mockTech} />);
    const techCard = container.querySelector('.techCard');
    const iconContainer = container.querySelector('.iconContainer');
    const techInfo = container.querySelector('.techInfo');
    
    expect(techCard).toBeInTheDocument();
    expect(iconContainer).toBeInTheDocument();
    expect(techInfo).toBeInTheDocument();
  });

  test('renders tech name in techInfo section', () => {
    const { container } = render(<Tech tech={mockTech} />);
    const techName = container.querySelector('.techName');
    expect(techName).toBeInTheDocument();
    expect(techName).toHaveTextContent('React');
  });
});

