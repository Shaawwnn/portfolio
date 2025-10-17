import { render, screen } from '@testing-library/react';
import TechStack from '../../components/TechStack';
import { techStack } from '../../projectData';

describe('TechStack Component', () => {
  test('renders TechStack component', () => {
    render(<TechStack />);
  });

  test('renders the header with correct text', () => {
    render(<TechStack />);
    const header = screen.getByText(/Tools_I_Use/i);
    expect(header).toBeInTheDocument();
  });

  test('renders correct number of tech items', () => {
    const { container } = render(<TechStack />);
    const techItems = container.querySelectorAll('.imgContainer');
    // The number should match the techStack array length
    expect(techItems.length).toBe(techStack.length);
    expect(techStack.length).toBeGreaterThan(0);
  });

  test('renders opening and closing tags in header', () => {
    const { container } = render(<TechStack />);
    const header = container.querySelector('.projectHeader');
    expect(header).toBeInTheDocument();
  });
});

